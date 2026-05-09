import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";
import { useBoundStore } from "~/hooks/useBoundStore";
import { useActiveCourse } from "~/courses/registry";
import type { CoursePlacement } from "~/courses/types";

type AnswerResult = { level: string; correct: boolean };

type Recommendation = {
  highestPassed: string | null;
  recommendedUnit: number;
  recommendedLabel: string;
};

const computeRecommendation = (
  results: AnswerResult[],
  placement: CoursePlacement,
): Recommendation => {
  const correctByLevel: Record<string, number> = {};
  for (const lv of placement.levels) correctByLevel[lv] = 0;
  for (const r of results) {
    if (r.correct) correctByLevel[r.level] = (correctByLevel[r.level] ?? 0) + 1;
  }
  let highestPassed: string | null = null;
  for (const level of placement.levels) {
    if ((correctByLevel[level] ?? 0) >= 2) highestPassed = level;
  }
  if (highestPassed === null) {
    const first = placement.levels[0] ?? "Beginner";
    return {
      highestPassed: null,
      recommendedUnit: placement.levelToStartUnit[first] ?? 1,
      recommendedLabel: first,
    };
  }
  const top = placement.levels[placement.levels.length - 1];
  if (highestPassed === top) {
    return {
      highestPassed,
      recommendedUnit: placement.levelToStartUnit[top] ?? 1,
      recommendedLabel: `${top} (you've mastered the lot)`,
    };
  }
  const idx = placement.levels.indexOf(highestPassed);
  const next = placement.levels[idx + 1] ?? top ?? highestPassed;
  return {
    highestPassed,
    recommendedUnit: placement.levelToStartUnit[next] ?? 1,
    recommendedLabel: next,
  };
};

const Placement: NextPage = () => {
  const router = useRouter();
  const course = useActiveCourse();
  const placement = course.placement;
  const questions = placement.questions;

  const [step, setStep] = useState(0);
  const [results, setResults] = useState<AnswerResult[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);

  const jumpToUnit = useBoundStore((x) => x.jumpToUnit);

  const finished = step >= questions.length;
  const recommendation = useMemo(
    () => computeRecommendation(results, placement),
    [results, placement],
  );

  if (finished) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-[#235390] p-6 text-white">
        <h1 className="text-3xl font-bold">Placement complete</h1>
        <p className="max-w-md text-center text-lg">
          {recommendation.highestPassed === null
            ? `Looks like a fresh start. We'll begin at ${placement.levels[0] ?? ""}.`
            : `Highest level you passed: ${recommendation.highestPassed}. We'll drop you at ${recommendation.recommendedLabel}.`}
        </p>
        <div className="flex flex-col gap-3 rounded-2xl bg-white/10 p-5 text-sm">
          <div className="font-bold uppercase opacity-80">
            Score by level — {course.name}
          </div>
          {placement.levels.map((lv) => {
            const total = questions.filter((q) => q.level === lv).length;
            const correct = results.filter(
              (r) => r.level === lv && r.correct,
            ).length;
            return (
              <div key={lv} className="flex justify-between gap-8">
                <span>{lv}</span>
                <span>
                  {correct}/{total}
                </span>
              </div>
            );
          })}
        </div>
        <button
          className="rounded-2xl border-b-4 border-green-600 bg-green-500 px-8 py-4 text-lg font-bold uppercase transition hover:brightness-110"
          onClick={() => {
            jumpToUnit(recommendation.recommendedUnit);
            void router.push("/learn");
          }}
        >
          Start learning
        </button>
        <Link className="text-sm uppercase opacity-80" href="/learn">
          Skip to map without jumping
        </Link>
      </main>
    );
  }

  const q = questions[step];
  if (!q) return null;

  const onCheck = () => {
    if (selected === null) return;
    setRevealed(true);
  };

  const onContinue = () => {
    if (selected === null) return;
    setResults((prev) => [
      ...prev,
      { level: q.level, correct: selected === q.correct },
    ]);
    setSelected(null);
    setRevealed(false);
    setStep((s) => s + 1);
  };

  return (
    <main className="flex min-h-screen flex-col gap-6 p-6">
      <header className="flex items-center justify-between">
        <Link href="/" className="text-sm uppercase text-gray-400">
          Exit
        </Link>
        <div className="text-sm uppercase tracking-wide text-gray-500">
          {course.name} · Question {step + 1} / {questions.length}
        </div>
        <span className="rounded-full bg-[#235390] px-3 py-1 text-xs font-bold text-white">
          {q.level}
        </span>
      </header>

      <div className="h-2 w-full rounded-full bg-gray-200">
        <div
          className="h-full rounded-full bg-[#235390] transition-all duration-500"
          style={{ width: `${((step + 1) / questions.length) * 100}%` }}
        />
      </div>

      <section className="mx-auto flex w-full max-w-xl grow flex-col gap-6">
        <h1 className="text-2xl font-bold sm:text-3xl">
          Choose the right option
        </h1>
        <p className="text-xl">{q.question}</p>
        {q.context && (
          <p className="text-sm italic text-gray-500">{q.context}</p>
        )}
        <div className="flex flex-col gap-3" role="radiogroup">
          {q.options.map((option, i) => {
            const isSelected = i === selected;
            const isCorrect = i === q.correct;
            let cls =
              "rounded-2xl border-2 border-b-4 border-gray-200 p-4 text-left text-lg transition";
            if (revealed) {
              if (isCorrect) {
                cls += " border-green-500 bg-green-100 text-green-700";
              } else if (isSelected) {
                cls += " border-red-500 bg-red-100 text-red-700";
              } else {
                cls += " text-gray-500";
              }
            } else if (isSelected) {
              cls += " border-blue-400 bg-blue-50 text-blue-700";
            } else {
              cls += " hover:bg-gray-50";
            }
            return (
              <button
                key={i}
                className={cls}
                role="radio"
                aria-checked={isSelected}
                disabled={revealed}
                onClick={() => setSelected(i)}
              >
                {option}
              </button>
            );
          })}
        </div>
      </section>

      <footer className="mx-auto w-full max-w-xl">
        {!revealed ? (
          <button
            className={
              selected === null
                ? "w-full rounded-2xl bg-gray-200 p-3 font-bold uppercase text-gray-400"
                : "w-full rounded-2xl border-b-4 border-blue-600 bg-blue-500 p-3 font-bold uppercase text-white transition hover:brightness-110"
            }
            disabled={selected === null}
            onClick={onCheck}
          >
            Check
          </button>
        ) : (
          <button
            className="w-full rounded-2xl border-b-4 border-green-600 bg-green-500 p-3 font-bold uppercase text-white transition hover:brightness-110"
            onClick={onContinue}
          >
            Continue
          </button>
        )}
      </footer>
    </main>
  );
};

export default Placement;
