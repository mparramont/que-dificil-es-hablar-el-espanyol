import type { CoursePlacement } from "../types";

const levels = ["HSK 1", "HSK 2", "HSK 3", "HSK 4", "HSK 5", "HSK 6"] as const;

export const malayMandarinPlacement: CoursePlacement = {
  levels,
  levelToStartUnit: {
    "HSK 1": 1,
    "HSK 2": 3,
    "HSK 3": 5,
    "HSK 4": 7,
    "HSK 5": 9,
    "HSK 6": 11,
  },
  questions: [
    {
      level: "HSK 1",
      question: "你好,我 ___ Lin。",
      context: "— Hi, my name is Lin.",
      options: ["叫", "去", "在", "也"],
      correct: 0,
    },
    {
      level: "HSK 1",
      question: "我有 ___ 个姐姐。",
      options: ["二", "两", "双", "对"],
      correct: 1,
      // 两 (liǎng) before measure words; 二 (èr) for counting alone
    },
    {
      level: "HSK 2",
      question: "我每天 ___ 八点起床。",
      options: ["在", "于", "从", "向"],
      correct: 0,
    },
    {
      level: "HSK 2",
      question: "去年我 ___ 槟城。",
      context: "Past action.",
      options: ["去", "去了", "要去", "在去"],
      correct: 1,
    },
    {
      level: "HSK 3",
      question: "我哥哥 ___ 我高五公分。",
      options: ["比", "和", "跟", "像"],
      correct: 0,
    },
    {
      level: "HSK 3",
      question: "因为下雨,___ 我没出门。",
      options: ["但是", "所以", "可是", "如果"],
      correct: 1,
    },
    {
      level: "HSK 4",
      question: "尽管经济不景气,我们公司 ___ 在招聘。",
      options: ["仍然", "已经", "还没", "终于"],
      correct: 0,
    },
    {
      level: "HSK 4",
      question: "请你 ___ 一下你的工作经验。",
      options: ["说说", "说了", "说着", "说过"],
      correct: 0,
      // 说说 = 'tell me a bit about'
    },
    {
      level: "HSK 5",
      question: "这件事情 ___ 社交媒体上引起了讨论。",
      options: ["从", "在", "于", "由"],
      correct: 1,
    },
    {
      level: "HSK 5",
      question: "他做事 ___,从来不认真。",
      context: "Idiom: careless attitude.",
      options: ["认认真真", "马马虎虎", "干干净净", "高高兴兴"],
      correct: 1,
    },
    {
      level: "HSK 6",
      question: "本研究 ___ 探讨身份认同的复杂性。",
      options: ["旨在", "竟然", "无非", "未免"],
      correct: 0,
      // 旨在 = aims to, formal academic register
    },
    {
      level: "HSK 6",
      question: "____ 这一现象具有重要的研究价值。",
      context: "Formal: 'From this we can see...'",
      options: ["由此可见,", "总而言之,", "顺便说一下,", "话说回来,"],
      correct: 0,
    },
  ],
};
