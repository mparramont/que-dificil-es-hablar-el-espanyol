import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  BigCloseSvg,
  CloseSvg,
  DoneSvg,
  LessonFastForwardEndFailSvg,
  LessonFastForwardEndPassSvg,
  LessonFastForwardStartSvg,
  LessonTopBarEmptyHeart,
  LessonTopBarHeart,
} from "~/components/Svgs";
import womanPng from "../../public/woman.png";
import { useBoundStore } from "~/hooks/useBoundStore";
import { useRouter } from "next/router";
import { defaultLesson, getLesson } from "~/courses/spanishSpain";
import type { Problem } from "~/courses/types";
import {
  answersMatch,
  normalizeSpanish,
  speakingMatches,
  speakSpanish,
  useSpeechRecognition,
  useTtsReady,
} from "~/hooks/useSpeech";

const formatTime = (timeMs: number): string => {
  const seconds = Math.floor(timeMs / 1000) % 60;
  const minutes = Math.floor(timeMs / 1000 / 60) % 60;
  const hours = Math.floor(timeMs / 1000 / 60 / 60);
  if (hours === 0)
    return [minutes, seconds]
      .map((x) => x.toString().padStart(2, "0"))
      .join(":");
  return [hours, minutes, seconds]
    .map((x) => x.toString().padStart(2, "0"))
    .join(":");
};

const tilesToString = (tiles: readonly string[], indices: readonly number[]) =>
  indices.map((i) => tiles[i] ?? "").join(" ");

const Lesson: NextPage = () => {
  const router = useRouter();

  const unitParam = router.query.unit;
  const tileParam = router.query.tile;
  const hasTileParams =
    typeof unitParam === "string" && typeof tileParam === "string";

  const lesson = useMemo(() => {
    if (!hasTileParams) return defaultLesson;
    return getLesson(Number(unitParam), Number(tileParam));
  }, [hasTileParams, unitParam, tileParam]);

  const [lessonProblemIndex, setLessonProblemIndex] = useState(0);
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
  const [incorrectAnswerCount, setIncorrectAnswerCount] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [typedAnswer, setTypedAnswer] = useState("");
  const [spokenAnswer, setSpokenAnswer] = useState("");
  const [correctAnswerShown, setCorrectAnswerShown] = useState(false);
  const [quitMessageShown, setQuitMessageShown] = useState(false);

  const startTime = useRef(Date.now());
  const endTime = useRef(startTime.current + 1000 * 60 * 3 + 1000 * 33);

  const [questionResults, setQuestionResults] = useState<QuestionResult[]>([]);
  const [reviewLessonShown, setReviewLessonShown] = useState(false);

  const totalCorrectAnswersNeeded = lesson.problems.length;
  const problem: Problem | undefined = lesson.problems[lessonProblemIndex];

  const [isStartingLesson, setIsStartingLesson] = useState(true);
  const hearts =
    "fast-forward" in router.query &&
    !isNaN(Number(router.query["fast-forward"]))
      ? 3 - incorrectAnswerCount
      : null;

  const isAnswerCorrect = useMemo(() => {
    if (!problem) return false;
    switch (problem.type) {
      case "WRITE_IN_ENGLISH":
      case "WRITE_IN_SPANISH": {
        const userString = tilesToString(problem.answerTiles, selectedAnswers);
        const correctString = tilesToString(
          problem.answerTiles,
          problem.correctAnswer,
        );
        return userString.trim() === correctString.trim();
      }
      case "FREE_WRITE_ES":
        return answersMatch(typedAnswer, problem.acceptableAnswers);
      case "LISTEN":
        return answersMatch(typedAnswer, problem.acceptableAnswers);
      case "SPEAK":
        return speakingMatches(spokenAnswer, problem.targetEs);
    }
  }, [problem, selectedAnswers, typedAnswer, spokenAnswer]);

  const isAnswerSelected = useMemo(() => {
    if (!problem) return false;
    switch (problem.type) {
      case "WRITE_IN_ENGLISH":
      case "WRITE_IN_SPANISH":
        return selectedAnswers.length > 0;
      case "FREE_WRITE_ES":
      case "LISTEN":
        return typedAnswer.trim().length > 0;
      case "SPEAK":
        return spokenAnswer.trim().length > 0;
    }
  }, [problem, selectedAnswers, typedAnswer, spokenAnswer]);

  const onCheckAnswer = () => {
    if (!problem) return;
    setCorrectAnswerShown(true);
    if (isAnswerCorrect) {
      setCorrectAnswerCount((x) => x + 1);
    } else {
      setIncorrectAnswerCount((x) => x + 1);
    }
    const result = buildQuestionResult(
      problem,
      selectedAnswers,
      typedAnswer,
      spokenAnswer,
    );
    setQuestionResults((prev) => [...prev, result]);
  };

  const onFinish = () => {
    setSelectedAnswers([]);
    setTypedAnswer("");
    setSpokenAnswer("");
    setCorrectAnswerShown(false);
    setLessonProblemIndex((x) =>
      lesson.problems.length === 0 ? 0 : (x + 1) % lesson.problems.length,
    );
    endTime.current = Date.now();
  };

  const onSkip = () => {
    setCorrectAnswerShown(true);
  };

  const unitNumber = Number(router.query["fast-forward"]);

  if (hearts !== null && hearts < 0 && !correctAnswerShown) {
    return (
      <LessonFastForwardEndFail
        unitNumber={unitNumber}
        reviewLessonShown={reviewLessonShown}
        setReviewLessonShown={setReviewLessonShown}
        questionResults={questionResults}
      />
    );
  }

  if (
    hearts !== null &&
    hearts >= 0 &&
    !correctAnswerShown &&
    correctAnswerCount >= totalCorrectAnswersNeeded
  ) {
    return (
      <LessonFastForwardEndPass
        unitNumber={unitNumber}
        reviewLessonShown={reviewLessonShown}
        setReviewLessonShown={setReviewLessonShown}
        questionResults={questionResults}
      />
    );
  }

  if (hearts !== null && isStartingLesson) {
    return (
      <LessonFastForwardStart
        unitNumber={unitNumber}
        setIsStartingLesson={setIsStartingLesson}
      />
    );
  }

  if (correctAnswerCount >= totalCorrectAnswersNeeded && !correctAnswerShown) {
    return (
      <LessonComplete
        correctAnswerCount={correctAnswerCount}
        incorrectAnswerCount={incorrectAnswerCount}
        startTime={startTime}
        endTime={endTime}
        reviewLessonShown={reviewLessonShown}
        setReviewLessonShown={setReviewLessonShown}
        questionResults={questionResults}
      />
    );
  }

  if (!problem) {
    return null;
  }

  const sharedProps = {
    correctAnswerCount,
    totalCorrectAnswersNeeded,
    quitMessageShown,
    correctAnswerShown,
    setQuitMessageShown,
    isAnswerCorrect,
    isAnswerSelected,
    onCheckAnswer,
    onFinish,
    onSkip,
    hearts,
  };

  switch (problem.type) {
    case "WRITE_IN_ENGLISH":
      return (
        <ProblemWriteInEnglish
          problem={problem}
          selectedAnswers={selectedAnswers}
          setSelectedAnswers={setSelectedAnswers}
          {...sharedProps}
        />
      );
    case "WRITE_IN_SPANISH":
      return (
        <ProblemWriteInSpanish
          problem={problem}
          selectedAnswers={selectedAnswers}
          setSelectedAnswers={setSelectedAnswers}
          {...sharedProps}
        />
      );
    case "FREE_WRITE_ES":
      return (
        <ProblemFreeWriteEs
          problem={problem}
          typedAnswer={typedAnswer}
          setTypedAnswer={setTypedAnswer}
          {...sharedProps}
        />
      );
    case "LISTEN":
      return (
        <ProblemListen
          problem={problem}
          typedAnswer={typedAnswer}
          setTypedAnswer={setTypedAnswer}
          {...sharedProps}
        />
      );
    case "SPEAK":
      return (
        <ProblemSpeak
          problem={problem}
          spokenAnswer={spokenAnswer}
          setSpokenAnswer={setSpokenAnswer}
          {...sharedProps}
        />
      );
  }
};

export default Lesson;

type SharedProblemProps = {
  correctAnswerCount: number;
  totalCorrectAnswersNeeded: number;
  quitMessageShown: boolean;
  correctAnswerShown: boolean;
  setQuitMessageShown: React.Dispatch<React.SetStateAction<boolean>>;
  isAnswerCorrect: boolean;
  isAnswerSelected: boolean;
  onCheckAnswer: () => void;
  onFinish: () => void;
  onSkip: () => void;
  hearts: number | null;
};

const buildQuestionResult = (
  problem: Problem,
  selectedAnswers: number[],
  typedAnswer: string,
  spokenAnswer: string,
): QuestionResult => {
  switch (problem.type) {
    case "WRITE_IN_ENGLISH":
      return {
        question: problem.questionEs,
        yourResponse: tilesToString(problem.answerTiles, selectedAnswers),
        correctResponse: tilesToString(
          problem.answerTiles,
          problem.correctAnswer,
        ),
      };
    case "WRITE_IN_SPANISH":
      return {
        question: problem.questionEn,
        yourResponse: tilesToString(problem.answerTiles, selectedAnswers),
        correctResponse: tilesToString(
          problem.answerTiles,
          problem.correctAnswer,
        ),
      };
    case "FREE_WRITE_ES":
      return {
        question: problem.questionEn,
        yourResponse: typedAnswer,
        correctResponse: problem.acceptableAnswers[0] ?? "",
      };
    case "LISTEN":
      return {
        question: `Listen: "${problem.tts}"`,
        yourResponse: typedAnswer,
        correctResponse: problem.acceptableAnswers[0] ?? problem.tts,
      };
    case "SPEAK":
      return {
        question: problem.questionEn,
        yourResponse: spokenAnswer,
        correctResponse: problem.targetEs,
      };
  }
};

const ProgressBar = ({
  correctAnswerCount,
  totalCorrectAnswersNeeded,
  setQuitMessageShown,
  hearts,
}: {
  correctAnswerCount: number;
  totalCorrectAnswersNeeded: number;
  setQuitMessageShown: (isShown: boolean) => void;
  hearts: null | number;
}) => {
  return (
    <header className="flex items-center gap-4">
      {correctAnswerCount === 0 ? (
        <Link href="/learn" className="text-gray-400">
          <CloseSvg />
          <span className="sr-only">Exit lesson</span>
        </Link>
      ) : (
        <button
          className="text-gray-400"
          onClick={() => setQuitMessageShown(true)}
        >
          <CloseSvg />
          <span className="sr-only">Exit lesson</span>
        </button>
      )}
      <div
        className="h-4 grow rounded-full bg-gray-200"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={1}
        aria-valuenow={correctAnswerCount / totalCorrectAnswersNeeded}
      >
        <div
          className={
            "h-full rounded-full bg-green-500 transition-all duration-700 " +
            (correctAnswerCount > 0 ? "px-2 pt-1 " : "")
          }
          style={{
            width: `${(correctAnswerCount / totalCorrectAnswersNeeded) * 100}%`,
          }}
        >
          <div className="h-[5px] w-full rounded-full bg-green-400"></div>
        </div>
      </div>
      {hearts !== null &&
        [1, 2, 3].map((heart) => {
          if (heart <= hearts) {
            return <LessonTopBarHeart key={heart} />;
          }
          return <LessonTopBarEmptyHeart key={heart} />;
        })}
    </header>
  );
};

const QuitMessage = ({
  quitMessageShown,
  setQuitMessageShown,
}: {
  quitMessageShown: boolean;
  setQuitMessageShown: (isShown: boolean) => void;
}) => {
  return (
    <>
      <div
        className={
          quitMessageShown
            ? "fixed bottom-0 left-0 right-0 top-0 z-30 bg-black bg-opacity-60 transition-all duration-300"
            : "pointer-events-none fixed bottom-0 left-0 right-0 top-0 z-30 bg-black bg-opacity-0 transition-all duration-300"
        }
        onClick={() => setQuitMessageShown(false)}
        aria-label="Close quit message"
        role="button"
      ></div>

      <article
        className={
          quitMessageShown
            ? "fixed bottom-0 left-0 right-0 z-40 flex flex-col gap-4 bg-white px-5 py-12 text-center transition-all duration-300 sm:flex-row"
            : "fixed -bottom-96 left-0 right-0 z-40 flex flex-col bg-white px-5 py-12 text-center transition-all duration-300 sm:flex-row"
        }
        aria-hidden={!quitMessageShown}
      >
        <div className="flex grow flex-col gap-4">
          <h2 className="text-lg font-bold sm:text-2xl">
            Are you sure you want to quit?
          </h2>
          <p className="text-gray-500 sm:text-lg">
            All progress for this lesson will be lost.
          </p>
        </div>
        <div className="flex grow flex-col items-center justify-center gap-4 sm:flex-row-reverse">
          <Link
            className="flex w-full items-center justify-center rounded-2xl border-b-4 border-blue-500 bg-blue-400 py-3 font-bold uppercase text-white transition hover:brightness-105 sm:w-48"
            href="/learn"
          >
            Quit
          </Link>
          <button
            className="w-full rounded-2xl py-3 font-bold uppercase text-blue-400 transition hover:brightness-90 sm:w-48 sm:border-2 sm:border-b-4 sm:border-gray-300 sm:text-gray-400 sm:hover:bg-gray-100"
            onClick={() => setQuitMessageShown(false)}
          >
            Stay
          </button>
        </div>
      </article>
    </>
  );
};

const CheckAnswer = ({
  isAnswerSelected,
  isAnswerCorrect,
  correctAnswerShown,
  correctAnswer,
  onCheckAnswer,
  onFinish,
  onSkip,
}: {
  isAnswerSelected: boolean;
  isAnswerCorrect: boolean;
  correctAnswerShown: boolean;
  correctAnswer: string;
  onCheckAnswer: () => void;
  onFinish: () => void;
  onSkip: () => void;
}) => {
  return (
    <>
      <section className="border-gray-200 sm:border-t-2 sm:p-10">
        <div className="mx-auto flex max-w-5xl sm:justify-between">
          <button
            className="hidden rounded-2xl border-2 border-b-4 border-gray-200 bg-white p-3 font-bold uppercase text-gray-400 transition hover:border-gray-300 hover:bg-gray-200 sm:block sm:min-w-[150px] sm:max-w-fit"
            onClick={onSkip}
          >
            Skip
          </button>
          {!isAnswerSelected ? (
            <button
              className="grow rounded-2xl bg-gray-200 p-3 font-bold uppercase text-gray-400 sm:min-w-[150px] sm:max-w-fit sm:grow-0"
              disabled
            >
              Check
            </button>
          ) : (
            <button
              onClick={onCheckAnswer}
              className="grow rounded-2xl border-b-4 border-green-600 bg-green-500 p-3 font-bold uppercase text-white sm:min-w-[150px] sm:max-w-fit sm:grow-0"
            >
              Check
            </button>
          )}
        </div>
      </section>

      <div
        className={
          correctAnswerShown
            ? isAnswerCorrect
              ? "fixed bottom-0 left-0 right-0 bg-lime-100 font-bold text-green-600 transition-all"
              : "fixed bottom-0 left-0 right-0 bg-red-100 font-bold text-red-500 transition-all"
            : "fixed -bottom-52 left-0 right-0"
        }
      >
        <div className="flex max-w-5xl flex-col gap-4 p-5 sm:mx-auto sm:flex-row sm:items-center sm:justify-between sm:p-10 sm:py-14">
          <>
            {isAnswerCorrect ? (
              <div className="mb-2 flex flex-col gap-5 sm:flex-row sm:items-center">
                <div className="hidden rounded-full bg-white p-5 text-green-500 sm:block">
                  <DoneSvg />
                </div>
                <div className="text-2xl">¡Genial!</div>
              </div>
            ) : (
              <div className="mb-2 flex flex-col gap-5 sm:flex-row sm:items-center">
                <div className="hidden rounded-full bg-white p-5 text-red-500 sm:block">
                  <BigCloseSvg />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-2xl">Correct solution:</div>{" "}
                  <div className="text-sm font-normal">{correctAnswer}</div>
                </div>
              </div>
            )}
          </>
          <button
            onClick={onFinish}
            className={
              isAnswerCorrect
                ? "w-full rounded-2xl border-b-4 border-green-600 bg-green-500 p-3 font-bold uppercase text-white transition hover:brightness-105 sm:min-w-[150px] sm:max-w-fit"
                : "w-full rounded-2xl border-b-4 border-red-600 bg-red-500 p-3 font-bold uppercase text-white transition hover:brightness-105 sm:min-w-[150px] sm:max-w-fit"
            }
          >
            Continue
          </button>
        </div>
      </div>
    </>
  );
};

const LessonShell = ({
  children,
  correctAnswerCount,
  totalCorrectAnswersNeeded,
  setQuitMessageShown,
  hearts,
  quitMessageShown,
}: {
  children: React.ReactNode;
  correctAnswerCount: number;
  totalCorrectAnswersNeeded: number;
  setQuitMessageShown: React.Dispatch<React.SetStateAction<boolean>>;
  hearts: number | null;
  quitMessageShown: boolean;
}) => {
  return (
    <div className="flex min-h-screen flex-col gap-5 px-4 py-5 sm:px-0 sm:py-0">
      <div className="flex grow flex-col items-center gap-5">
        <div className="w-full max-w-5xl sm:mt-8 sm:px-5">
          <ProgressBar
            correctAnswerCount={correctAnswerCount}
            totalCorrectAnswersNeeded={totalCorrectAnswersNeeded}
            setQuitMessageShown={setQuitMessageShown}
            hearts={hearts}
          />
        </div>
        {children}
      </div>
      <QuitMessage
        quitMessageShown={quitMessageShown}
        setQuitMessageShown={setQuitMessageShown}
      />
    </div>
  );
};

const Wordbank = ({
  problem,
  selectedAnswers,
  setSelectedAnswers,
  promptHeader,
  questionText,
  speakerText,
}: {
  problem: Extract<Problem, { type: "WRITE_IN_ENGLISH" | "WRITE_IN_SPANISH" }>;
  selectedAnswers: number[];
  setSelectedAnswers: React.Dispatch<React.SetStateAction<number[]>>;
  promptHeader: string;
  questionText: string;
  speakerText?: string;
}) => {
  const { answerTiles } = problem;
  return (
    <section className="flex max-w-2xl grow flex-col gap-5 self-center sm:items-center sm:justify-center sm:gap-24">
      <h1 className="mb-2 text-2xl font-bold sm:text-3xl">{promptHeader}</h1>
      <div className="w-full">
        <div className="flex items-center gap-2 px-2">
          <Image src={womanPng} alt="" width={92} height={115} />
          <div className="relative ml-2 w-fit rounded-2xl border-2 border-gray-200 p-4">
            {speakerText ?? questionText}
            <div
              className="absolute h-4 w-4 rotate-45 border-b-2 border-l-2 border-gray-200 bg-white"
              style={{ top: "calc(50% - 8px)", left: "-10px" }}
            ></div>
          </div>
        </div>
        <div className="flex min-h-[60px] flex-wrap gap-1 border-b-2 border-t-2 border-gray-200 py-1">
          {selectedAnswers.map((i) => (
            <button
              key={`s-${i}`}
              className="rounded-2xl border-2 border-b-4 border-gray-200 p-2 text-gray-700"
              onClick={() =>
                setSelectedAnswers((prev) => prev.filter((x) => x !== i))
              }
            >
              {answerTiles[i]}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-1">
        {answerTiles.map((answerTile, i) => (
          <button
            key={i}
            className={
              selectedAnswers.includes(i)
                ? "rounded-2xl border-2 border-b-4 border-gray-200 bg-gray-200 p-2 text-gray-200"
                : "rounded-2xl border-2 border-b-4 border-gray-200 p-2 text-gray-700"
            }
            disabled={selectedAnswers.includes(i)}
            onClick={() =>
              setSelectedAnswers((prev) =>
                prev.includes(i) ? prev : [...prev, i],
              )
            }
          >
            {answerTile}
          </button>
        ))}
      </div>
    </section>
  );
};

const ProblemWriteInEnglish = ({
  problem,
  selectedAnswers,
  setSelectedAnswers,
  ...shared
}: SharedProblemProps & {
  problem: Extract<Problem, { type: "WRITE_IN_ENGLISH" }>;
  selectedAnswers: number[];
  setSelectedAnswers: React.Dispatch<React.SetStateAction<number[]>>;
}) => {
  return (
    <LessonShell
      correctAnswerCount={shared.correctAnswerCount}
      totalCorrectAnswersNeeded={shared.totalCorrectAnswersNeeded}
      setQuitMessageShown={shared.setQuitMessageShown}
      hearts={shared.hearts}
      quitMessageShown={shared.quitMessageShown}
    >
      <Wordbank
        problem={problem}
        selectedAnswers={selectedAnswers}
        setSelectedAnswers={setSelectedAnswers}
        promptHeader="Write this in English"
        questionText={problem.questionEs}
      />
      <CheckAnswer
        correctAnswer={tilesToString(problem.answerTiles, problem.correctAnswer)}
        correctAnswerShown={shared.correctAnswerShown}
        isAnswerCorrect={shared.isAnswerCorrect}
        isAnswerSelected={shared.isAnswerSelected}
        onCheckAnswer={shared.onCheckAnswer}
        onFinish={shared.onFinish}
        onSkip={shared.onSkip}
      />
    </LessonShell>
  );
};

const ProblemWriteInSpanish = ({
  problem,
  selectedAnswers,
  setSelectedAnswers,
  ...shared
}: SharedProblemProps & {
  problem: Extract<Problem, { type: "WRITE_IN_SPANISH" }>;
  selectedAnswers: number[];
  setSelectedAnswers: React.Dispatch<React.SetStateAction<number[]>>;
}) => {
  return (
    <LessonShell
      correctAnswerCount={shared.correctAnswerCount}
      totalCorrectAnswersNeeded={shared.totalCorrectAnswersNeeded}
      setQuitMessageShown={shared.setQuitMessageShown}
      hearts={shared.hearts}
      quitMessageShown={shared.quitMessageShown}
    >
      <Wordbank
        problem={problem}
        selectedAnswers={selectedAnswers}
        setSelectedAnswers={setSelectedAnswers}
        promptHeader="Write this in Spanish"
        questionText={problem.questionEn}
      />
      <CheckAnswer
        correctAnswer={tilesToString(problem.answerTiles, problem.correctAnswer)}
        correctAnswerShown={shared.correctAnswerShown}
        isAnswerCorrect={shared.isAnswerCorrect}
        isAnswerSelected={shared.isAnswerSelected}
        onCheckAnswer={shared.onCheckAnswer}
        onFinish={shared.onFinish}
        onSkip={shared.onSkip}
      />
    </LessonShell>
  );
};

const ProblemFreeWriteEs = ({
  problem,
  typedAnswer,
  setTypedAnswer,
  ...shared
}: SharedProblemProps & {
  problem: Extract<Problem, { type: "FREE_WRITE_ES" }>;
  typedAnswer: string;
  setTypedAnswer: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <LessonShell
      correctAnswerCount={shared.correctAnswerCount}
      totalCorrectAnswersNeeded={shared.totalCorrectAnswersNeeded}
      setQuitMessageShown={shared.setQuitMessageShown}
      hearts={shared.hearts}
      quitMessageShown={shared.quitMessageShown}
    >
      <section className="flex max-w-2xl grow flex-col gap-5 self-center sm:items-center sm:justify-center sm:gap-12 sm:px-5">
        <h1 className="self-start text-2xl font-bold sm:text-3xl">
          Write this in Spanish
        </h1>
        <div className="w-full rounded-2xl border-2 border-gray-200 p-4">
          <p className="text-lg">{problem.questionEn}</p>
          {problem.hint && (
            <p className="mt-2 text-sm italic text-gray-500">
              Tip: {problem.hint}
            </p>
          )}
        </div>
        <textarea
          className="w-full rounded-2xl border-2 border-gray-200 p-4 text-lg focus:border-blue-400 focus:outline-none"
          rows={3}
          autoFocus
          lang="es"
          placeholder="Escribe en español…"
          value={typedAnswer}
          onChange={(e) => setTypedAnswer(e.target.value)}
          disabled={shared.correctAnswerShown}
        />
      </section>
      <CheckAnswer
        correctAnswer={problem.acceptableAnswers[0] ?? ""}
        correctAnswerShown={shared.correctAnswerShown}
        isAnswerCorrect={shared.isAnswerCorrect}
        isAnswerSelected={shared.isAnswerSelected}
        onCheckAnswer={shared.onCheckAnswer}
        onFinish={shared.onFinish}
        onSkip={shared.onSkip}
      />
    </LessonShell>
  );
};

const SpeakerButton = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  const ttsReady = useTtsReady();
  return (
    <button
      type="button"
      onClick={() => void speakSpanish(text)}
      disabled={!ttsReady}
      className={
        className ??
        "rounded-full border-b-4 border-blue-600 bg-blue-500 px-6 py-4 text-2xl font-bold text-white transition hover:brightness-110 disabled:opacity-50"
      }
      aria-label="Play audio"
    >
      🔊
    </button>
  );
};

const ProblemListen = ({
  problem,
  typedAnswer,
  setTypedAnswer,
  ...shared
}: SharedProblemProps & {
  problem: Extract<Problem, { type: "LISTEN" }>;
  typedAnswer: string;
  setTypedAnswer: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const ttsReady = useTtsReady();
  const playedRef = useRef(false);
  useEffect(() => {
    if (ttsReady && !playedRef.current) {
      playedRef.current = true;
      void speakSpanish(problem.tts);
    }
  }, [ttsReady, problem.tts]);

  return (
    <LessonShell
      correctAnswerCount={shared.correctAnswerCount}
      totalCorrectAnswersNeeded={shared.totalCorrectAnswersNeeded}
      setQuitMessageShown={shared.setQuitMessageShown}
      hearts={shared.hearts}
      quitMessageShown={shared.quitMessageShown}
    >
      <section className="flex max-w-2xl grow flex-col gap-8 self-center sm:items-center sm:justify-center sm:gap-12 sm:px-5">
        <h1 className="self-start text-2xl font-bold sm:text-3xl">
          Type what you hear
        </h1>
        <div className="flex flex-col items-center gap-3">
          <SpeakerButton text={problem.tts} />
          <button
            type="button"
            onClick={() => void speakSpanish(problem.tts, 0.7)}
            className="text-sm uppercase text-blue-400"
          >
            🐢 Slow
          </button>
        </div>
        <textarea
          className="w-full rounded-2xl border-2 border-gray-200 p-4 text-lg focus:border-blue-400 focus:outline-none"
          rows={2}
          autoFocus
          lang="es"
          placeholder="Escribe lo que oyes…"
          value={typedAnswer}
          onChange={(e) => setTypedAnswer(e.target.value)}
          disabled={shared.correctAnswerShown}
        />
        {shared.correctAnswerShown && (
          <p className="text-sm text-gray-500">
            Translation: {problem.translationEn}
          </p>
        )}
      </section>
      <CheckAnswer
        correctAnswer={problem.acceptableAnswers[0] ?? problem.tts}
        correctAnswerShown={shared.correctAnswerShown}
        isAnswerCorrect={shared.isAnswerCorrect}
        isAnswerSelected={shared.isAnswerSelected}
        onCheckAnswer={shared.onCheckAnswer}
        onFinish={shared.onFinish}
        onSkip={shared.onSkip}
      />
    </LessonShell>
  );
};

const ProblemSpeak = ({
  problem,
  spokenAnswer,
  setSpokenAnswer,
  ...shared
}: SharedProblemProps & {
  problem: Extract<Problem, { type: "SPEAK" }>;
  spokenAnswer: string;
  setSpokenAnswer: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const speech = useSpeechRecognition("es-ES");

  useEffect(() => {
    if (speech.transcript) setSpokenAnswer(speech.transcript);
  }, [speech.transcript, setSpokenAnswer]);

  const unsupported = speech.state === "unsupported";

  return (
    <LessonShell
      correctAnswerCount={shared.correctAnswerCount}
      totalCorrectAnswersNeeded={shared.totalCorrectAnswersNeeded}
      setQuitMessageShown={shared.setQuitMessageShown}
      hearts={shared.hearts}
      quitMessageShown={shared.quitMessageShown}
    >
      <section className="flex max-w-2xl grow flex-col gap-8 self-center sm:items-center sm:justify-center sm:gap-12 sm:px-5">
        <h1 className="self-start text-2xl font-bold sm:text-3xl">
          Speak in Spanish
        </h1>
        <div className="w-full rounded-2xl border-2 border-gray-200 p-4">
          <p className="text-lg">{problem.questionEn}</p>
          <p className="mt-2 text-sm text-gray-500">
            Target: <span className="italic">{problem.targetEs}</span>
          </p>
          <div className="mt-2">
            <SpeakerButton
              text={problem.targetEs}
              className="rounded-full border-b-2 border-blue-600 bg-blue-500 px-3 py-1 text-sm text-white"
            />
          </div>
        </div>

        {unsupported ? (
          <div className="rounded-2xl border-2 border-yellow-300 bg-yellow-50 p-4 text-sm">
            Your browser does not support speech recognition. Type the phrase
            instead:
            <input
              className="mt-2 w-full rounded-xl border-2 border-gray-200 p-2"
              value={spokenAnswer}
              onChange={(e) => setSpokenAnswer(e.target.value)}
              disabled={shared.correctAnswerShown}
              lang="es"
            />
          </div>
        ) : (
          <div className="flex flex-col items-center gap-3">
            <button
              type="button"
              onClick={() =>
                speech.state === "listening" ? speech.stop() : speech.start()
              }
              disabled={shared.correctAnswerShown}
              className={
                speech.state === "listening"
                  ? "rounded-full border-b-4 border-red-600 bg-red-500 px-8 py-4 text-xl font-bold text-white animate-pulse"
                  : "rounded-full border-b-4 border-green-600 bg-green-500 px-8 py-4 text-xl font-bold text-white transition hover:brightness-110 disabled:opacity-50"
              }
            >
              {speech.state === "listening" ? "🎙️ Listening… (tap to stop)" : "🎙️ Tap to speak"}
            </button>
            {speech.errorMessage && (
              <p className="text-sm text-red-500">
                Mic error: {speech.errorMessage}
              </p>
            )}
            <p className="min-h-[2rem] text-center text-lg">
              {spokenAnswer ? (
                <span className="text-gray-800">"{spokenAnswer}"</span>
              ) : (
                <span className="text-gray-400">Your speech appears here…</span>
              )}
            </p>
          </div>
        )}
      </section>
      <CheckAnswer
        correctAnswer={problem.targetEs}
        correctAnswerShown={shared.correctAnswerShown}
        isAnswerCorrect={shared.isAnswerCorrect}
        isAnswerSelected={shared.isAnswerSelected}
        onCheckAnswer={shared.onCheckAnswer}
        onFinish={shared.onFinish}
        onSkip={shared.onSkip}
      />
    </LessonShell>
  );
};

const LessonComplete = ({
  correctAnswerCount,
  incorrectAnswerCount,
  startTime,
  endTime,
  reviewLessonShown,
  setReviewLessonShown,
  questionResults,
}: {
  correctAnswerCount: number;
  incorrectAnswerCount: number;
  startTime: React.MutableRefObject<number>;
  endTime: React.MutableRefObject<number>;
  reviewLessonShown: boolean;
  setReviewLessonShown: React.Dispatch<React.SetStateAction<boolean>>;
  questionResults: QuestionResult[];
}) => {
  const router = useRouter();
  const isPractice = "practice" in router.query;

  const increaseXp = useBoundStore((x) => x.increaseXp);
  const addToday = useBoundStore((x) => x.addToday);
  const increaseLingots = useBoundStore((x) => x.increaseLingots);
  const increaseLessonsCompleted = useBoundStore(
    (x) => x.increaseLessonsCompleted,
  );
  return (
    <div className="flex min-h-screen flex-col gap-5 px-4 py-5 sm:px-0 sm:py-0">
      <div className="flex grow flex-col items-center justify-center gap-8 font-bold">
        <h1 className="text-center text-3xl text-yellow-400">
          ¡Lección completada!
        </h1>
        <div className="flex flex-wrap justify-center gap-5">
          <div className="min-w-[110px] rounded-xl border-2 border-yellow-400 bg-yellow-400">
            <h2 className="py-1 text-center text-white">Total XP</h2>
            <div className="flex justify-center rounded-xl bg-white py-4 text-yellow-400">
              {correctAnswerCount}
            </div>
          </div>
          <div className="min-w-[110px] rounded-xl border-2 border-blue-400 bg-blue-400">
            <h2 className="py-1 text-center text-white">Committed</h2>
            <div className="flex justify-center rounded-xl bg-white py-4 text-blue-400">
              {formatTime(endTime.current - startTime.current)}
            </div>
          </div>
          <div className="min-w-[110px] rounded-xl border-2 border-green-400 bg-green-400">
            <h2 className="py-1 text-center text-white">Amazing</h2>
            <div className="flex justify-center rounded-xl bg-white py-4 text-green-400">
              {Math.round(
                (correctAnswerCount /
                  Math.max(1, correctAnswerCount + incorrectAnswerCount)) *
                  100,
              )}
              %
            </div>
          </div>
        </div>
      </div>
      <section className="border-gray-200 sm:border-t-2 sm:p-10">
        <div className="mx-auto flex max-w-5xl sm:justify-between">
          <button
            className="hidden rounded-2xl border-2 border-b-4 border-gray-200 bg-white p-3 font-bold uppercase text-gray-400 transition hover:border-gray-300 hover:bg-gray-200 sm:block sm:min-w-[150px] sm:max-w-fit"
            onClick={() => setReviewLessonShown(true)}
          >
            Review lesson
          </button>
          <Link
            className={
              "flex w-full items-center justify-center rounded-2xl border-b-4 border-green-600 bg-green-500 p-3 font-bold uppercase text-white transition hover:brightness-105 sm:min-w-[150px] sm:max-w-fit"
            }
            href="/learn"
            onClick={() => {
              increaseXp(correctAnswerCount);
              addToday();
              increaseLingots(isPractice ? 0 : 1);
              if (!isPractice) {
                increaseLessonsCompleted();
              }
            }}
          >
            Continue
          </Link>
        </div>
      </section>
      <ReviewLesson
        reviewLessonShown={reviewLessonShown}
        setReviewLessonShown={setReviewLessonShown}
        questionResults={questionResults}
      />
    </div>
  );
};

type QuestionResult = {
  question: string;
  yourResponse: string;
  correctResponse: string;
};

const ReviewLesson = ({
  reviewLessonShown,
  setReviewLessonShown,
  questionResults,
}: {
  reviewLessonShown: boolean;
  setReviewLessonShown: React.Dispatch<React.SetStateAction<boolean>>;
  questionResults: QuestionResult[];
}) => {
  const [selectedQuestionResult, setSelectedQuestionResult] =
    useState<null | QuestionResult>(null);
  return (
    <div
      className={[
        "fixed inset-0 flex items-center justify-center p-5 transition duration-300",
        reviewLessonShown ? "" : "pointer-events-none opacity-0",
      ].join(" ")}
    >
      <div
        className={[
          "absolute inset-0 bg-black",
          reviewLessonShown ? "opacity-75" : "pointer-events-none opacity-0",
        ].join(" ")}
        onClick={() => setReviewLessonShown(false)}
      ></div>
      <div className="relative flex w-full max-w-4xl flex-col gap-5 rounded-2xl border-2 border-gray-200 bg-white p-8">
        <button
          className="absolute -right-5 -top-5 rounded-full border-2 border-gray-200 bg-gray-100 p-1 text-gray-400 hover:brightness-90"
          onClick={() => setReviewLessonShown(false)}
        >
          <BigCloseSvg className="h-8 w-8" />
          <span className="sr-only">Close</span>
        </button>
        <h2 className="text-center text-3xl">Check out your scorecard!</h2>
        <p className="text-center text-xl text-gray-400">
          Click the tiles below to reveal the solutions
        </p>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {questionResults.map((questionResult, i) => {
            const matched =
              normalizeSpanish(questionResult.yourResponse) ===
              normalizeSpanish(questionResult.correctResponse);
            return (
              <button
                key={i}
                className={[
                  "relative flex flex-col items-stretch gap-3 rounded-xl p-5 text-left",
                  matched
                    ? "bg-yellow-100 text-yellow-600"
                    : "bg-red-100 text-red-500",
                ].join(" ")}
                onClick={() =>
                  setSelectedQuestionResult((selectedQuestionResult) =>
                    selectedQuestionResult === questionResult
                      ? null
                      : questionResult,
                  )
                }
              >
                <div className="flex justify-between gap-2">
                  <h3 className="font-bold">{questionResult.question}</h3>
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white">
                    {matched ? (
                      <DoneSvg className="h-5 w-5" />
                    ) : (
                      <BigCloseSvg className="h-5 w-5" />
                    )}
                  </div>
                </div>
                <div>{questionResult.yourResponse}</div>
                {selectedQuestionResult === questionResult && (
                  <div className="absolute left-1 right-1 top-20 z-10 rounded-2xl border-2 border-gray-200 bg-white p-3 text-sm tracking-tighter">
                    <div
                      className="absolute -top-2 h-3 w-3 rotate-45 border-l-2 border-t-2 border-gray-200 bg-white"
                      style={{ left: "calc(50% - 6px)" }}
                    ></div>
                    <div className="font-bold uppercase text-gray-400">
                      Your response:
                    </div>
                    <div className="mb-3 text-gray-700">
                      {questionResult.yourResponse}
                    </div>
                    <div className="font-bold uppercase text-gray-400">
                      Correct response:
                    </div>
                    <div className="text-gray-700">
                      {questionResult.correctResponse}
                    </div>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const LessonFastForwardStart = ({
  unitNumber,
  setIsStartingLesson,
}: {
  unitNumber: number;
  setIsStartingLesson: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="flex min-h-screen flex-col px-5 py-8 text-center">
      <div className="flex grow flex-col items-center justify-center gap-5">
        <LessonFastForwardStartSvg />
        <h1 className="text-lg font-bold">
          Want to jump to Unit {unitNumber}?
        </h1>
        <p className="text-sm text-gray-400">
          {`Pass the test to jump ahead. We won't make it easy for you though.`}
        </p>
      </div>
      <div className="flex flex-col gap-5"></div>
      <section className="border-gray-200 sm:border-t-2 sm:p-10">
        <div className="mx-auto flex max-w-5xl flex-col-reverse items-center gap-5 sm:flex-row sm:justify-between">
          <Link
            href="/learn"
            className="font-bold uppercase text-blue-400 transition hover:brightness-110"
          >
            Maybe later
          </Link>
          <button
            className="w-full rounded-2xl border-b-4 border-blue-500 bg-blue-400 p-3 font-bold uppercase text-white transition hover:brightness-110 sm:min-w-[150px] sm:max-w-fit"
            onClick={() => setIsStartingLesson(false)}
          >
            {`Let's go`}
          </button>
        </div>
      </section>
    </div>
  );
};

const LessonFastForwardEndFail = ({
  unitNumber,
  reviewLessonShown,
  setReviewLessonShown,
  questionResults,
}: {
  unitNumber: number;
  reviewLessonShown: boolean;
  setReviewLessonShown: React.Dispatch<React.SetStateAction<boolean>>;
  questionResults: QuestionResult[];
}) => {
  return (
    <div className="flex min-h-screen flex-col px-5 py-8 text-center">
      <div className="flex grow flex-col items-center justify-center gap-5">
        <LessonFastForwardEndFailSvg />
        <h1 className="text-2xl font-bold">
          {`You didn't unlock Unit ${unitNumber}`}
        </h1>
        <p className="text-lg text-gray-500">
          {`Don't worry! Practice makes perfect.`}
        </p>
      </div>
      <section className="border-gray-200 sm:border-t-2 sm:p-10">
        <div className="mx-auto flex max-w-5xl sm:justify-between">
          <button
            className="hidden rounded-2xl border-2 border-b-4 border-gray-200 bg-white p-3 font-bold uppercase text-gray-400 transition hover:border-gray-300 hover:bg-gray-200 sm:block sm:min-w-[150px] sm:max-w-fit"
            onClick={() => setReviewLessonShown(true)}
          >
            Review lesson
          </button>
          <Link
            className="flex w-full items-center justify-center rounded-2xl border-b-4 border-green-600 bg-green-500 p-3 font-bold uppercase text-white transition hover:brightness-105 sm:min-w-[150px] sm:max-w-fit"
            href="/learn"
          >
            Continue
          </Link>
        </div>
      </section>
      <ReviewLesson
        reviewLessonShown={reviewLessonShown}
        setReviewLessonShown={setReviewLessonShown}
        questionResults={questionResults}
      />
    </div>
  );
};

const LessonFastForwardEndPass = ({
  unitNumber,
  reviewLessonShown,
  setReviewLessonShown,
  questionResults,
}: {
  unitNumber: number;
  reviewLessonShown: boolean;
  setReviewLessonShown: React.Dispatch<React.SetStateAction<boolean>>;
  questionResults: QuestionResult[];
}) => {
  const jumpToUnit = useBoundStore((x) => x.jumpToUnit);
  return (
    <div className="flex min-h-screen flex-col px-5 py-8 text-center">
      <div className="flex grow flex-col items-center justify-center gap-5">
        <LessonFastForwardEndPassSvg />
        <h1 className="text-2xl font-bold">You unlocked Unit {unitNumber}!</h1>
        <p className="text-lg text-gray-500">
          Way to go! You’re making great strides!
        </p>
      </div>
      <section className="border-gray-200 sm:border-t-2 sm:p-10">
        <div className="mx-auto flex max-w-5xl sm:justify-between">
          <button
            className="hidden rounded-2xl border-2 border-b-4 border-gray-200 bg-white p-3 font-bold uppercase text-gray-400 transition hover:border-gray-300 hover:bg-gray-200 sm:block sm:min-w-[150px] sm:max-w-fit"
            onClick={() => setReviewLessonShown(true)}
          >
            Review lesson
          </button>
          <Link
            className="flex w-full items-center justify-center rounded-2xl border-b-4 border-green-600 bg-green-500 p-3 font-bold uppercase text-white transition hover:brightness-105 sm:min-w-[150px] sm:max-w-fit"
            href="/learn"
            onClick={() => jumpToUnit(unitNumber)}
          >
            Continue
          </Link>
        </div>
      </section>
      <ReviewLesson
        reviewLessonShown={reviewLessonShown}
        setReviewLessonShown={setReviewLessonShown}
        questionResults={questionResults}
      />
    </div>
  );
};
