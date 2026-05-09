import type { Course, CourseContent, Lesson } from "./types";
import { malayMandarinUnits } from "./malayMandarin/units";
import { malayMandarinPlacement } from "./malayMandarin/placement";
import {
  u1NiHao,
  u1LaiZi,
  u1ShuZi,
  u1JiaTing,
  u1Review,
  u2Pasar,
  u2KopiTiam,
  u2MuarFood,
  u2DuoShao,
  u2Review,
} from "./malayMandarin/lessons/hsk1";
import {
  u3Routine,
  u3Time,
  u3Muar,
  u3Asking,
  u3Review,
  u4XinNian,
  u4Clothes,
  u4Hotel,
  u4LastYear,
  u4Review,
} from "./malayMandarin/lessons/hsk2";
import {
  u5Opinions,
  u5Compare,
  u5Causal,
  u5Agree,
  u5Review,
  u6NewFriends,
  u6Hangout,
  u6Love,
  u6Single,
  u6Review,
} from "./malayMandarin/lessons/hsk3";
import {
  u7Interview,
  u7Leave,
  u7Singapore,
  u7Study,
  u7Review,
  u8CNY,
  u8Multicultural,
  u8Hokkien,
  u8Temple,
  u8Review,
} from "./malayMandarin/lessons/hsk4";
import {
  u9News,
  u9Economy,
  u9Environment,
  u9Debate,
  u9Review,
  u10MalayChineseLit,
  u10MovieMusic,
  u10Idioms,
  u10Aesthetics,
  u10Review,
} from "./malayMandarin/lessons/hsk5";
import {
  u11Email,
  u11Negotiate,
  u11Report,
  u11Contract,
  u11Review,
  u12Academic,
  u12Editorial,
  u12Philosophy,
  u12Poetry,
  u12Review,
} from "./malayMandarin/lessons/hsk6";

const defaultPractice: Lesson = {
  title: "Personalized practice",
  problems: [
    {
      type: "FREE_WRITE_TARGET",
      questionEn: "Translate: I have already eaten.",
      acceptableAnswers: ["我已经吃过了", "我已经吃了"],
    },
    {
      type: "LISTEN",
      tts: "今晚我和朋友一起去吃宵夜。",
      translationEn: "Tonight I'm going for late-night supper with friends.",
      acceptableAnswers: [
        "今晚我和朋友一起去吃宵夜",
        "今晚我和朋友一起去吃宵夜。",
      ],
    },
    {
      type: "SPEAK",
      questionEn: "Say: How are you all doing?",
      targetText: "你们好吗?",
    },
    {
      type: "WRITE_IN_ENGLISH",
      questionTarget: "我又把手机弄丢了。",
      answerTiles: ["I", "lost", "my", "phone", "again."],
      correctAnswer: [0, 1, 2, 3, 4],
    },
    {
      type: "WRITE_IN_TARGET",
      questionEn: "OK lah, see you later.",
      answerTiles: ["好", "啦,", "等下", "见。", "明天"],
      correctAnswer: [0, 1, 2, 3],
    },
  ],
};

const content: CourseContent = {
  1: {
    0: u1NiHao,
    1: u1LaiZi,
    2: u1ShuZi,
    4: u1JiaTing,
    5: u1Review,
  },
  2: {
    0: u2Pasar,
    1: u2KopiTiam,
    2: u2MuarFood,
    4: u2DuoShao,
    5: u2Review,
  },
  3: {
    0: u3Routine, // fast-forward
    1: u3Routine,
    2: u3Time,
    4: u3Muar,
    5: u3Asking,
    6: u3Review,
  },
  4: {
    0: u4XinNian,
    1: u4XinNian,
    2: u4Clothes,
    4: u4Hotel,
    5: u4LastYear,
    6: u4Review,
  },
  5: {
    0: u5Opinions,
    1: u5Opinions,
    2: u5Compare,
    4: u5Causal,
    5: u5Agree,
    6: u5Review,
  },
  6: {
    0: u6NewFriends,
    1: defaultPractice,
    2: u6NewFriends,
    4: u6Hangout,
    5: u6Love,
    6: u6Single,
    8: defaultPractice,
    9: u6Review,
  },
  7: {
    0: u7Interview,
    1: u7Interview,
    2: u7Leave,
    4: u7Singapore,
    5: u7Study,
    6: u7Review,
  },
  8: {
    0: u8CNY,
    1: u8CNY,
    2: u8Multicultural,
    4: u8Hokkien,
    5: u8Temple,
    6: u8Review,
  },
  9: {
    0: u9News,
    1: u9News,
    2: u9Economy,
    4: u9Environment,
    5: u9Debate,
    6: u9Review,
  },
  10: {
    0: u10MalayChineseLit,
    1: u10MalayChineseLit,
    2: u10MovieMusic,
    4: u10Idioms,
    5: u10Aesthetics,
    6: u10Review,
  },
  11: {
    0: u11Email,
    1: u11Email,
    2: u11Negotiate,
    4: u11Report,
    5: u11Contract,
    6: u11Review,
  },
  12: {
    0: u12Academic,
    1: u12Academic,
    2: u12Editorial,
    4: u12Philosophy,
    5: u12Poetry,
    6: u12Review,
  },
};

export const malayMandarinCourse: Course = {
  id: "malayMandarin",
  name: "Mandarin (Muar)",
  nativeName: "中文 (麻坡口音)",
  flagEmoji: "🇲🇾",
  ttsLang: "zh-CN",
  sttLang: "zh-CN",
  description:
    "Malaysian Mandarin with Muar/Hokkien flavour, graded by HSK 1 → HSK 6.",
  units: malayMandarinUnits,
  content,
  defaultLesson: defaultPractice,
  placement: malayMandarinPlacement,
};
