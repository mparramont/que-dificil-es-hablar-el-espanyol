import type { Unit } from "~/utils/units";

export type Problem =
  | {
      type: "WRITE_IN_ENGLISH";
      questionTarget: string;
      answerTiles: string[];
      correctAnswer: number[];
    }
  | {
      type: "WRITE_IN_TARGET";
      questionEn: string;
      answerTiles: string[];
      correctAnswer: number[];
    }
  | {
      type: "FREE_WRITE_TARGET";
      questionEn: string;
      acceptableAnswers: string[];
      hint?: string;
    }
  | {
      type: "LISTEN";
      tts: string;
      translationEn: string;
      acceptableAnswers: string[];
    }
  | {
      type: "SPEAK";
      questionEn: string;
      targetText: string;
    };

export type Lesson = {
  title: string;
  problems: Problem[];
};

export type CourseContent = Record<number, Record<number, Lesson>>;

export type PlacementQuestion = {
  level: string;
  question: string;
  context?: string;
  options: string[];
  correct: number;
};

export type CoursePlacement = {
  levels: readonly string[];
  questions: PlacementQuestion[];
  levelToStartUnit: Record<string, number>;
};

export type CourseId = "spanishSpain" | "malayMandarin";

export type Course = {
  id: CourseId;
  name: string;
  nativeName: string;
  flagEmoji: string;
  ttsLang: string;
  sttLang: string;
  description: string;
  units: readonly Unit[];
  content: CourseContent;
  defaultLesson: Lesson;
  placement: CoursePlacement;
};
