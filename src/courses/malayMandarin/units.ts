import type { Unit } from "~/utils/units";

const hsk1Colors = {
  backgroundColor: "bg-[#7ee787]",
  textColor: "text-[#3aa64b]",
  borderColor: "border-[#3aa64b]",
} as const;

const hsk2Colors = {
  backgroundColor: "bg-[#3ec8ff]",
  textColor: "text-[#0a91c2]",
  borderColor: "border-[#0a91c2]",
} as const;

const hsk3Colors = {
  backgroundColor: "bg-[#58cc02]",
  textColor: "text-[#58cc02]",
  borderColor: "border-[#46a302]",
} as const;

const hsk4Colors = {
  backgroundColor: "bg-[#ff8c42]",
  textColor: "text-[#cc6f33]",
  borderColor: "border-[#cc6f33]",
} as const;

const hsk5Colors = {
  backgroundColor: "bg-[#ff5277]",
  textColor: "text-[#cc4060]",
  borderColor: "border-[#cc4060]",
} as const;

const hsk6Colors = {
  backgroundColor: "bg-[#a47ad6]",
  textColor: "text-[#7c5ba6]",
  borderColor: "border-[#7c5ba6]",
} as const;

export const malayMandarinUnits: readonly Unit[] = [
  {
    unitNumber: 1,
    level: "HSK 1",
    description: "HSK 1 · 你好啦! (Hello!)",
    ...hsk1Colors,
    tiles: [
      { type: "star", description: "你好,我是 Lin" },
      { type: "book", description: "你来自哪里?" },
      { type: "star", description: "数字与年龄" },
      { type: "treasure" },
      { type: "book", description: "我的家庭" },
      { type: "trophy", description: "Unit 1 review" },
    ],
  },
  {
    unitNumber: 2,
    level: "HSK 1",
    description: "HSK 1 · 在巴刹 (At the market)",
    ...hsk1Colors,
    tiles: [
      { type: "star", description: "去巴刹买菜" },
      { type: "book", description: "在咖啡店点东西" },
      { type: "star", description: "Muar 美食" },
      { type: "treasure" },
      { type: "book", description: "多少钱?" },
      { type: "trophy", description: "Unit 2 review" },
    ],
  },
  {
    unitNumber: 3,
    level: "HSK 2",
    description: "HSK 2 · 我的一天 (My day)",
    ...hsk2Colors,
    tiles: [
      { type: "fast-forward", description: "我的一天" },
      { type: "star", description: "起床、上班、回家" },
      { type: "book", description: "时间和钟点" },
      { type: "treasure" },
      { type: "book", description: "在 Muar 的生活" },
      { type: "star", description: "问路" },
      { type: "trophy", description: "Unit 3 review" },
    ],
  },
  {
    unitNumber: 4,
    level: "HSK 2",
    description: "HSK 2 · 假期与回乡 (Holidays & balik kampung)",
    ...hsk2Colors,
    tiles: [
      { type: "fast-forward", description: "假期与回乡" },
      { type: "star", description: "新年回家" },
      { type: "book", description: "买新衣服" },
      { type: "treasure" },
      { type: "book", description: "订酒店" },
      { type: "star", description: "去年我去了…" },
      { type: "trophy", description: "Unit 4 review" },
    ],
  },
  {
    unitNumber: 5,
    level: "HSK 3",
    description: "HSK 3 · 我的看法 (My opinions)",
    ...hsk3Colors,
    tiles: [
      { type: "fast-forward", description: "我的看法" },
      { type: "star", description: "我觉得…" },
      { type: "book", description: "比较 (A 比 B…)" },
      { type: "treasure" },
      { type: "book", description: "因为…所以…" },
      { type: "star", description: "同意与不同意" },
      { type: "trophy", description: "Unit 5 review" },
    ],
  },
  {
    unitNumber: 6,
    level: "HSK 3",
    description: "HSK 3 · 朋友与爱情 (Friends & love)",
    ...hsk3Colors,
    tiles: [
      { type: "fast-forward", description: "朋友与爱情" },
      { type: "dumbbell", description: "Personalized practice" },
      { type: "book", description: "认识新朋友" },
      { type: "treasure" },
      { type: "star", description: "约朋友吃饭" },
      { type: "book", description: "谈谈感情" },
      { type: "star", description: "结婚或单身" },
      { type: "treasure" },
      { type: "dumbbell", description: "Personalized practice" },
      { type: "trophy", description: "Unit 6 review" },
    ],
  },
  {
    unitNumber: 7,
    level: "HSK 4",
    description: "HSK 4 · 工作与学习 (Work & study)",
    ...hsk4Colors,
    tiles: [
      { type: "fast-forward", description: "工作与学习" },
      { type: "book", description: "找工作 / 面试" },
      { type: "star", description: "请假与加班" },
      { type: "treasure" },
      { type: "book", description: "在 Singapore 工作" },
      { type: "star", description: "继续学习" },
      { type: "trophy", description: "Unit 7 review" },
    ],
  },
  {
    unitNumber: 8,
    level: "HSK 4",
    description: "HSK 4 · 文化与传统 (Culture & traditions)",
    ...hsk4Colors,
    tiles: [
      { type: "fast-forward", description: "文化与传统" },
      { type: "book", description: "华人新年" },
      { type: "star", description: "马来西亚多元文化" },
      { type: "treasure" },
      { type: "book", description: "Hokkien 与 Mandarin 的差别" },
      { type: "star", description: "庙会与拜拜" },
      { type: "trophy", description: "Unit 8 review" },
    ],
  },
  {
    unitNumber: 9,
    level: "HSK 5",
    description: "HSK 5 · 社会与政治 (Society & politics)",
    ...hsk5Colors,
    tiles: [
      { type: "fast-forward", description: "社会与政治" },
      { type: "book", description: "讨论新闻" },
      { type: "star", description: "经济与就业" },
      { type: "treasure" },
      { type: "book", description: "环境保护" },
      { type: "star", description: "辩论与表态" },
      { type: "trophy", description: "Unit 9 review" },
    ],
  },
  {
    unitNumber: 10,
    level: "HSK 5",
    description: "HSK 5 · 文学与艺术 (Literature & art)",
    ...hsk5Colors,
    tiles: [
      { type: "fast-forward", description: "文学与艺术" },
      { type: "book", description: "马华文学" },
      { type: "star", description: "电影与音乐" },
      { type: "treasure" },
      { type: "book", description: "成语与典故" },
      { type: "star", description: "美学讨论" },
      { type: "trophy", description: "Unit 10 review" },
    ],
  },
  {
    unitNumber: 11,
    level: "HSK 6",
    description: "HSK 6 · 商业与谈判 (Business & negotiation)",
    ...hsk6Colors,
    tiles: [
      { type: "fast-forward", description: "商业与谈判" },
      { type: "book", description: "商务邮件" },
      { type: "star", description: "谈判与说服" },
      { type: "treasure" },
      { type: "book", description: "数据分析与报告" },
      { type: "star", description: "签约与合作" },
      { type: "trophy", description: "Unit 11 review" },
    ],
  },
  {
    unitNumber: 12,
    level: "HSK 6",
    description: "HSK 6 · 高级讨论 (Advanced discourse)",
    ...hsk6Colors,
    tiles: [
      { type: "fast-forward", description: "高级讨论" },
      { type: "book", description: "学术写作" },
      { type: "star", description: "评论时事" },
      { type: "treasure" },
      { type: "book", description: "哲学与思辨" },
      { type: "star", description: "诗与隐喻" },
      { type: "trophy", description: "Unit 12 review" },
    ],
  },
];
