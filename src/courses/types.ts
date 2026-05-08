export type Problem =
  | {
      type: "WRITE_IN_ENGLISH";
      questionEs: string;
      answerTiles: string[];
      correctAnswer: number[];
    }
  | {
      type: "WRITE_IN_SPANISH";
      questionEn: string;
      answerTiles: string[];
      correctAnswer: number[];
    }
  | {
      type: "FREE_WRITE_ES";
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
      targetEs: string;
    };

export type Lesson = {
  title: string;
  problems: Problem[];
};

export type CourseContent = Record<number, Record<number, Lesson>>;
