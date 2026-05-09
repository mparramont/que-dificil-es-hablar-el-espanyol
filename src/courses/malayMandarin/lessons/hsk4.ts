import type { Lesson } from "../../types";

export const u7Interview: Lesson = {
  title: "HSK 4 · 找工作 / 面试",
  problems: [
    {
      type: "WRITE_IN_TARGET",
      questionEn: "Please tell me about your work experience.",
      answerTiles: [
        "请",
        "你",
        "说说",
        "你的",
        "工作",
        "学习",
        "经验。",
      ],
      correctAnswer: [0, 1, 2, 3, 4, 6],
    },
    {
      type: "LISTEN",
      tts: "我之前在新加坡的一家科技公司工作过三年。",
      translationEn:
        "I previously worked at a tech company in Singapore for three years.",
      acceptableAnswers: [
        "我之前在新加坡的一家科技公司工作过三年",
        "我之前在新加坡的一家科技公司工作过三年。",
      ],
    },
    {
      type: "WRITE_IN_ENGLISH",
      questionTarget: "我希望能在贵公司学习更多东西。",
      answerTiles: [
        "I",
        "hope",
        "I",
        "can",
        "learn",
        "more",
        "things",
        "at",
        "your",
        "company.",
      ],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    },
    {
      type: "FREE_WRITE_TARGET",
      questionEn:
        "Translate: My biggest strength is the ability to work in a team.",
      acceptableAnswers: [
        "我最大的优点是团队合作能力",
        "我最大的优点是团队合作的能力",
        "我最大的优势是团队合作能力",
      ],
    },
    {
      type: "SPEAK",
      questionEn: "Say: Thank you for the opportunity.",
      targetText: "谢谢您给我这个机会。",
    },
  ],
};

export const u7Leave: Lesson = {
  title: "HSK 4 · 请假与加班",
  problems: [
    {
      type: "WRITE_IN_TARGET",
      questionEn: "I want to take leave tomorrow because I'm not well.",
      answerTiles: [
        "我",
        "明天",
        "今天",
        "想",
        "请假,",
        "因为",
        "我",
        "不舒服。",
        "很忙。",
      ],
      correctAnswer: [0, 1, 3, 4, 5, 6, 7],
    },
    {
      type: "LISTEN",
      tts: "今天加班,可能要十点才能回家。",
      translationEn:
        "Working overtime today; I might not get home until ten.",
      acceptableAnswers: [
        "今天加班,可能要十点才能回家",
        "今天加班 可能要十点才能回家",
      ],
    },
    {
      type: "WRITE_IN_ENGLISH",
      questionTarget: "我们这个项目下星期就要交了,大家加把劲。",
      answerTiles: [
        "Our",
        "project",
        "is",
        "due",
        "next",
        "week,",
        "everyone",
        "let's",
        "push",
        "harder.",
      ],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    },
    {
      type: "FREE_WRITE_TARGET",
      questionEn:
        "Translate: I'm sorry, I can't take on more work right now.",
      acceptableAnswers: [
        "对不起,我现在没办法再接更多工作",
        "抱歉,我现在没办法再接更多工作",
      ],
    },
    {
      type: "SPEAK",
      questionEn: "Say: I'd like to discuss my workload with you.",
      targetText: "我想和你讨论一下我的工作量。",
    },
  ],
};

export const u7Singapore: Lesson = {
  title: "HSK 4 · 在 Singapore 工作",
  problems: [
    {
      type: "WRITE_IN_TARGET",
      questionEn:
        "Many Malaysians work in Singapore and go home on weekends.",
      answerTiles: [
        "很多",
        "马来西亚人",
        "在",
        "新加坡",
        "工作,",
        "周末",
        "回家。",
        "上班。",
      ],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6],
    },
    {
      type: "LISTEN",
      tts: "新加坡的薪水比马来西亚高,但是生活成本也很高。",
      translationEn:
        "Salaries in Singapore are higher than in Malaysia, but the cost of living is also high.",
      acceptableAnswers: [
        "新加坡的薪水比马来西亚高,但是生活成本也很高",
        "新加坡的薪水比马来西亚高 但是生活成本也很高",
      ],
    },
    {
      type: "WRITE_IN_ENGLISH",
      questionTarget: "每天过 Causeway 上班真的很累。",
      answerTiles: [
        "Crossing",
        "the",
        "Causeway",
        "every",
        "day",
        "to",
        "work",
        "is",
        "really",
        "tiring.",
      ],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    },
    {
      type: "FREE_WRITE_TARGET",
      questionEn: "Translate: Many of my friends commute between JB and Singapore.",
      acceptableAnswers: [
        "我很多朋友都在新山和新加坡之间通勤",
        "我有很多朋友在新山和新加坡两地通勤",
      ],
    },
    {
      type: "SPEAK",
      questionEn: "Say: I plan to go back to Muar next year.",
      targetText: "我打算明年回麻坡。",
    },
  ],
};

export const u7Study: Lesson = {
  title: "HSK 4 · 继续学习",
  problems: [
    {
      type: "WRITE_IN_TARGET",
      questionEn: "I'm thinking of studying for a master's degree.",
      answerTiles: [
        "我",
        "在",
        "考虑",
        "想",
        "读",
        "硕士",
        "本科",
        "。",
      ],
      correctAnswer: [0, 1, 2, 4, 5, 7],
    },
    {
      type: "LISTEN",
      tts: "我打算一边工作一边学中文。",
      translationEn:
        "I plan to work and learn Chinese at the same time.",
      acceptableAnswers: ["我打算一边工作一边学中文", "我打算一边工作一边学中文。"],
    },
    {
      type: "WRITE_IN_ENGLISH",
      questionTarget: "学新东西不容易,但是很有意思。",
      answerTiles: [
        "Learning",
        "new",
        "things",
        "is",
        "not",
        "easy,",
        "but",
        "it's",
        "very",
        "interesting.",
      ],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    },
    {
      type: "FREE_WRITE_TARGET",
      questionEn: "Translate: I learn a little Mandarin every day.",
      acceptableAnswers: [
        "我每天学一点中文",
        "我每天学一点中文。",
      ],
    },
    {
      type: "SPEAK",
      questionEn: "Say: Practice makes perfect.",
      targetText: "熟能生巧。",
    },
  ],
};

export const u7Review: Lesson = {
  title: "HSK 4 · Unit 7 review",
  problems: [
    {
      type: "FREE_WRITE_TARGET",
      questionEn:
        "Translate: I want a job that lets me work from home.",
      acceptableAnswers: [
        "我想要一份可以在家工作的工作",
        "我想找一份可以在家工作的工作",
      ],
    },
    {
      type: "LISTEN",
      tts: "面试结束以后,他们说三天内会通知我。",
      translationEn:
        "After the interview, they said they would let me know within three days.",
      acceptableAnswers: [
        "面试结束以后,他们说三天内会通知我",
        "面试结束以后 他们说三天内会通知我",
      ],
    },
    {
      type: "SPEAK",
      questionEn: "Say: I appreciate your feedback.",
      targetText: "我很感谢您的反馈。",
    },
    {
      type: "WRITE_IN_ENGLISH",
      questionTarget: "我虽然累,但是觉得这份工作很有意义。",
      answerTiles: [
        "Although",
        "I'm",
        "tired,",
        "I",
        "feel",
        "this",
        "job",
        "is",
        "very",
        "meaningful.",
      ],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    },
  ],
};

export const u8CNY: Lesson = {
  title: "HSK 4 · 华人新年",
  problems: [
    {
      type: "WRITE_IN_TARGET",
      questionEn:
        "Chinese New Year is the most important festival for Chinese in Malaysia.",
      answerTiles: [
        "华人",
        "新年",
        "是",
        "马来西亚",
        "华人",
        "最",
        "重要",
        "的",
        "节日。",
      ],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    },
    {
      type: "LISTEN",
      tts: "我们除夕一定要吃团圆饭,然后看电视守岁。",
      translationEn:
        "On Chinese New Year's Eve we always have a reunion dinner and stay up watching TV.",
      acceptableAnswers: [
        "我们除夕一定要吃团圆饭,然后看电视守岁",
        "我们除夕一定要吃团圆饭 然后看电视守岁",
      ],
    },
    {
      type: "WRITE_IN_ENGLISH",
      questionTarget: "小孩子最喜欢拿红包了。",
      answerTiles: [
        "Kids",
        "love",
        "getting",
        "red",
        "packets",
        "the",
        "most.",
      ],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6],
    },
    {
      type: "FREE_WRITE_TARGET",
      questionEn:
        "Translate: We hold reunion dinner every year at grandma's house.",
      acceptableAnswers: [
        "我们每年都在阿嫲家吃团圆饭",
        "我们每年都在外婆家吃团圆饭",
      ],
    },
    {
      type: "SPEAK",
      questionEn: "Say: May you have prosperity and good fortune!",
      targetText: "恭喜发财!",
    },
  ],
};

export const u8Multicultural: Lesson = {
  title: "HSK 4 · 马来西亚多元文化",
  problems: [
    {
      type: "WRITE_IN_TARGET",
      questionEn:
        "Malaysia has Malay, Chinese, and Indian people living together.",
      answerTiles: [
        "马来西亚",
        "有",
        "马来人、",
        "华人",
        "和",
        "印度人",
        "一起",
        "生活。",
      ],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7],
    },
    {
      type: "LISTEN",
      tts: "在我们公司,我们说三种语言:中文、英文和马来语。",
      translationEn:
        "At our company, we speak three languages: Mandarin, English, and Malay.",
      acceptableAnswers: [
        "在我们公司,我们说三种语言:中文、英文和马来语",
        "在我们公司 我们说三种语言 中文 英文和马来语",
      ],
    },
    {
      type: "WRITE_IN_ENGLISH",
      questionTarget: "Hari Raya 的时候,马来朋友会请我们吃饭。",
      answerTiles: [
        "During",
        "Hari",
        "Raya,",
        "our",
        "Malay",
        "friends",
        "invite",
        "us",
        "over",
        "for",
        "a",
        "meal.",
      ],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    },
    {
      type: "FREE_WRITE_TARGET",
      questionEn:
        "Translate: I love the diversity of Malaysian cuisine.",
      acceptableAnswers: [
        "我喜欢马来西亚多元的饮食文化",
        "我很喜欢马来西亚多元化的饮食文化",
      ],
    },
    {
      type: "SPEAK",
      questionEn: "Say: Different cultures make Malaysia interesting.",
      targetText: "不同的文化让马来西亚变得有趣。",
    },
  ],
};

export const u8Hokkien: Lesson = {
  title: "HSK 4 · Hokkien 与 Mandarin 的差别",
  problems: [
    {
      type: "WRITE_IN_TARGET",
      questionEn: "In Hokkien, 'eat' is 'chia̍h', not 'chī'.",
      answerTiles: [
        "在",
        "福建话",
        "中文",
        "里,",
        "「吃」",
        "说",
        "chia̍h,",
        "不是",
        "chī。",
      ],
      correctAnswer: [0, 1, 3, 4, 5, 6, 7, 8],
    },
    {
      type: "LISTEN",
      tts: "在 Muar,大家都会说一点点福建话。",
      translationEn:
        "In Muar, everyone speaks a little Hokkien.",
      acceptableAnswers: [
        "在 muar,大家都会说一点点福建话",
        "在 muar 大家都会说一点点福建话",
        "在麻坡,大家都会说一点点福建话",
      ],
    },
    {
      type: "WRITE_IN_ENGLISH",
      questionTarget: "我的阿公阿嫲只会说福建话,不会说普通话。",
      answerTiles: [
        "My",
        "grandparents",
        "only",
        "speak",
        "Hokkien,",
        "not",
        "Mandarin.",
      ],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6],
    },
    {
      type: "FREE_WRITE_TARGET",
      questionEn:
        "Translate: I understand Hokkien but I can't speak it.",
      acceptableAnswers: [
        "我听得懂福建话,但是不会说",
        "我听得懂福建话 但是不会说",
        "我能听懂福建话,但是不会说",
      ],
    },
    {
      type: "SPEAK",
      questionEn: "Say: My Mandarin has a Hokkien accent.",
      targetText: "我说的中文带一点福建口音。",
    },
  ],
};

export const u8Temple: Lesson = {
  title: "HSK 4 · 庙会与拜拜",
  problems: [
    {
      type: "WRITE_IN_TARGET",
      questionEn: "We go to the temple every month to pray.",
      answerTiles: ["我们", "每个月", "都", "去", "庙里", "拜拜。", "见面。"],
      correctAnswer: [0, 1, 2, 3, 4, 5],
    },
    {
      type: "LISTEN",
      tts: "中元节的时候,我们会烧金纸给祖先。",
      translationEn:
        "During the Hungry Ghost Festival, we burn joss paper for our ancestors.",
      acceptableAnswers: [
        "中元节的时候,我们会烧金纸给祖先",
        "中元节的时候 我们会烧金纸给祖先",
      ],
    },
    {
      type: "WRITE_IN_ENGLISH",
      questionTarget: "庙会很热闹,有很多小吃。",
      answerTiles: [
        "The",
        "temple",
        "fair",
        "is",
        "very",
        "lively,",
        "with",
        "lots",
        "of",
        "snacks.",
      ],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    },
    {
      type: "FREE_WRITE_TARGET",
      questionEn:
        "Translate: My grandmother prays for the family every morning.",
      acceptableAnswers: [
        "我阿嫲每天早上都为家人祈祷",
        "我阿嫲每天早上都为家人拜拜",
      ],
    },
    {
      type: "SPEAK",
      questionEn: "Say: This temple has been here for over a hundred years.",
      targetText: "这个庙已经有一百多年的历史了。",
    },
  ],
};

export const u8Review: Lesson = {
  title: "HSK 4 · Unit 8 review",
  problems: [
    {
      type: "FREE_WRITE_TARGET",
      questionEn:
        "Translate: Each region in Malaysia has its own dialect and customs.",
      acceptableAnswers: [
        "马来西亚每个地区都有自己的方言和习俗",
        "马来西亚的每个地区都有自己的方言和习俗",
      ],
    },
    {
      type: "LISTEN",
      tts: "新年过后,我们会去走亲戚,大人小孩都开心。",
      translationEn:
        "After the new year, we visit relatives — both adults and kids are happy.",
      acceptableAnswers: [
        "新年过后,我们会去走亲戚,大人小孩都开心",
        "新年过后 我们会去走亲戚 大人小孩都开心",
      ],
    },
    {
      type: "SPEAK",
      questionEn: "Say: Our family always celebrates with friends.",
      targetText: "我们家每次都和朋友一起庆祝。",
    },
    {
      type: "WRITE_IN_ENGLISH",
      questionTarget: "马来西亚的多元文化是我们的优势。",
      answerTiles: [
        "Malaysia's",
        "multiculturalism",
        "is",
        "our",
        "strength.",
      ],
      correctAnswer: [0, 1, 2, 3, 4],
    },
  ],
};
