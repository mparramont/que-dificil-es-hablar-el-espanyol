import type { Lesson } from "../../types";

export const u3Routine: Lesson = {
  title: "HSK 2 · 起床、上班、回家",
  problems: [
    {
      type: "WRITE_IN_TARGET",
      questionEn: "I get up at seven every morning.",
      answerTiles: [
        "我",
        "每天",
        "早上",
        "晚上",
        "七点",
        "起床。",
        "睡觉。",
      ],
      correctAnswer: [0, 1, 2, 4, 5],
    },
    {
      type: "LISTEN",
      tts: "我下班以后,常常去健身房。",
      translationEn: "After work, I often go to the gym.",
      acceptableAnswers: [
        "我下班以后,常常去健身房",
        "我下班以后 常常去健身房",
      ],
    },
    {
      type: "WRITE_IN_ENGLISH",
      questionTarget: "我中午一点吃午餐,有时候吃 nasi lemak。",
      answerTiles: [
        "I",
        "have",
        "lunch",
        "at",
        "one",
        "in",
        "the",
        "afternoon,",
        "sometimes",
        "nasi",
        "lemak.",
      ],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    {
      type: "FREE_WRITE_TARGET",
      questionEn: "Translate: I drive to work every day.",
      acceptableAnswers: [
        "我每天开车去上班",
        "我每天开车上班",
      ],
    },
    {
      type: "SPEAK",
      questionEn: "Say: I usually go home at seven in the evening.",
      targetText: "我通常晚上七点回家。",
    },
  ],
};

export const u3Time: Lesson = {
  title: "HSK 2 · 时间和钟点",
  problems: [
    {
      type: "WRITE_IN_TARGET",
      questionEn: "What time is it now?",
      answerTiles: ["现在", "今天", "几", "什么", "点?"],
      correctAnswer: [0, 2, 4],
    },
    {
      type: "LISTEN",
      tts: "现在是下午三点半。",
      translationEn: "It's now half past three in the afternoon.",
      acceptableAnswers: ["现在是下午三点半", "现在是下午三点半。"],
    },
    {
      type: "WRITE_IN_ENGLISH",
      questionTarget: "店铺早上九点开,晚上九点关。",
      answerTiles: [
        "The",
        "shop",
        "opens",
        "at",
        "nine",
        "in",
        "the",
        "morning,",
        "and",
        "closes",
        "at",
        "nine",
        "in",
        "the",
        "evening.",
      ],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
    },
    {
      type: "FREE_WRITE_TARGET",
      questionEn: "Translate: It's a quarter past three.",
      acceptableAnswers: ["三点一刻", "三点十五分"],
    },
    {
      type: "SPEAK",
      questionEn: "Say: The movie starts at eight in the evening.",
      targetText: "电影晚上八点开始。",
    },
  ],
};

export const u3Muar: Lesson = {
  title: "HSK 2 · 在 Muar 的生活",
  problems: [
    {
      type: "WRITE_IN_TARGET",
      questionEn: "Life in Muar is very relaxed.",
      answerTiles: ["在", "麻坡", "的", "生活", "很", "悠闲。", "忙碌。"],
      correctAnswer: [0, 1, 2, 3, 4, 5],
    },
    {
      type: "LISTEN",
      tts: "麻坡的人都很友好,而且食物便宜。",
      translationEn: "People in Muar are friendly, and the food is cheap.",
      acceptableAnswers: [
        "麻坡的人都很友好,而且食物便宜",
        "麻坡的人都很友好 而且食物便宜",
      ],
    },
    {
      type: "WRITE_IN_ENGLISH",
      questionTarget: "我每个周末都和家人去河边走走。",
      answerTiles: [
        "Every",
        "weekend",
        "I",
        "go",
        "for",
        "a",
        "walk",
        "by",
        "the",
        "river",
        "with",
        "my",
        "family.",
      ],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
    {
      type: "FREE_WRITE_TARGET",
      questionEn: "Translate: Muar is a small town, but it has many delicious foods.",
      acceptableAnswers: [
        "麻坡是一个小镇,但是有很多好吃的",
        "麻坡是个小镇,但是有很多好吃的",
        "麻坡是一个小镇,但有很多好吃的",
      ],
    },
    {
      type: "SPEAK",
      questionEn: "Say: I grew up in Muar.",
      targetText: "我在麻坡长大。",
    },
  ],
};

export const u3Asking: Lesson = {
  title: "HSK 2 · 问路",
  problems: [
    {
      type: "WRITE_IN_TARGET",
      questionEn: "Excuse me, where is the bus station?",
      answerTiles: ["请问,", "巴士", "罗厘", "站", "在", "哪里?"],
      correctAnswer: [0, 1, 3, 4, 5],
    },
    {
      type: "LISTEN",
      tts: "你直走,然后向右转。",
      translationEn: "Go straight, then turn right.",
      acceptableAnswers: ["你直走,然后向右转", "你直走 然后向右转"],
    },
    {
      type: "WRITE_IN_ENGLISH",
      questionTarget: "从这里走过去,大概十分钟就到了。",
      answerTiles: [
        "Walking",
        "from",
        "here,",
        "you'll",
        "get",
        "there",
        "in",
        "about",
        "ten",
        "minutes.",
      ],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    },
    {
      type: "FREE_WRITE_TARGET",
      questionEn: "Translate: It's not far, just five minutes by car.",
      acceptableAnswers: [
        "不远,开车五分钟就到",
        "不远,开车五分钟就到了",
        "不远 开车五分钟就到",
      ],
    },
    {
      type: "SPEAK",
      questionEn: "Say: Excuse me, where is the train station?",
      targetText: "请问,火车站在哪里?",
    },
  ],
};

export const u3Review: Lesson = {
  title: "HSK 2 · Unit 3 review",
  problems: [
    {
      type: "FREE_WRITE_TARGET",
      questionEn: "Translate: I leave the house at eight every day.",
      acceptableAnswers: [
        "我每天八点出门",
        "我每天八点离开家",
      ],
    },
    {
      type: "LISTEN",
      tts: "下班以后,我常常和朋友去吃宵夜。",
      translationEn:
        "After work, I often go for late-night supper with friends.",
      acceptableAnswers: [
        "下班以后,我常常和朋友去吃宵夜",
        "下班以后 我常常和朋友去吃宵夜",
      ],
    },
    {
      type: "SPEAK",
      questionEn: "Say: It's already half past nine.",
      targetText: "已经九点半了。",
    },
    {
      type: "WRITE_IN_ENGLISH",
      questionTarget: "对不起,我不知道路。",
      answerTiles: ["Sorry,", "I", "don't", "know", "the", "way."],
      correctAnswer: [0, 1, 2, 3, 4, 5],
    },
  ],
};

export const u4XinNian: Lesson = {
  title: "HSK 2 · 新年回家",
  problems: [
    {
      type: "WRITE_IN_TARGET",
      questionEn: "Last year I went home to celebrate Chinese New Year.",
      answerTiles: [
        "去年",
        "今年",
        "我",
        "回家",
        "过",
        "新年。",
        "中秋节。",
      ],
      correctAnswer: [0, 2, 3, 4, 5],
    },
    {
      type: "LISTEN",
      tts: "我们家每年都吃团圆饭。",
      translationEn:
        "Every year our family has a reunion dinner.",
      acceptableAnswers: [
        "我们家每年都吃团圆饭",
        "我们家每年都吃团圆饭。",
      ],
    },
    {
      type: "WRITE_IN_ENGLISH",
      questionTarget: "今年我没回麻坡,因为我的工作很忙。",
      answerTiles: [
        "This",
        "year",
        "I",
        "didn't",
        "go",
        "back",
        "to",
        "Muar",
        "because",
        "I",
        "was",
        "busy",
        "with",
        "work.",
      ],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    },
    {
      type: "FREE_WRITE_TARGET",
      questionEn: "Translate: Happy Chinese New Year!",
      acceptableAnswers: [
        "新年快乐!",
        "新年快乐",
        "恭喜发财!",
        "恭喜发财",
      ],
      hint: "新年快乐 = generic happy new year. 恭喜发财 = wish for prosperity, very common during CNY.",
    },
    {
      type: "SPEAK",
      questionEn: "Say: I miss my mother's home cooking.",
      targetText: "我很想念妈妈做的菜。",
    },
  ],
};

export const u4Clothes: Lesson = {
  title: "HSK 2 · 买新衣服",
  problems: [
    {
      type: "WRITE_IN_TARGET",
      questionEn: "I want to buy a red shirt.",
      answerTiles: ["我", "要", "买", "一件", "红色", "黑色", "的", "衣服。"],
      correctAnswer: [0, 1, 2, 3, 4, 6, 7],
    },
    {
      type: "LISTEN",
      tts: "这件衬衫太大,有没有小一点的?",
      translationEn:
        "This shirt is too big — do you have a smaller one?",
      acceptableAnswers: [
        "这件衬衫太大,有没有小一点的?",
        "这件衬衫太大 有没有小一点的",
      ],
    },
    {
      type: "WRITE_IN_ENGLISH",
      questionTarget: "这件裙子很漂亮,但是有点贵。",
      answerTiles: [
        "This",
        "skirt",
        "is",
        "very",
        "pretty,",
        "but",
        "a",
        "little",
        "expensive.",
      ],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    },
    {
      type: "FREE_WRITE_TARGET",
      questionEn: "Translate: Can I try this on?",
      acceptableAnswers: [
        "我可以试穿吗?",
        "我可以试一下吗?",
        "我可以试穿吗",
      ],
    },
    {
      type: "SPEAK",
      questionEn: "Say: It fits me very well.",
      targetText: "我穿很合身。",
    },
  ],
};

export const u4Hotel: Lesson = {
  title: "HSK 2 · 订酒店",
  problems: [
    {
      type: "WRITE_IN_TARGET",
      questionEn: "I want to book a double room for two nights.",
      answerTiles: [
        "我",
        "要",
        "订",
        "一间",
        "双人房,",
        "单人房,",
        "住",
        "两天。",
      ],
      correctAnswer: [0, 1, 2, 3, 4, 6, 7],
    },
    {
      type: "LISTEN",
      tts: "请问,早餐包括在房费里吗?",
      translationEn:
        "Excuse me, is breakfast included in the room rate?",
      acceptableAnswers: [
        "请问,早餐包括在房费里吗?",
        "请问 早餐包括在房费里吗",
      ],
    },
    {
      type: "WRITE_IN_ENGLISH",
      questionTarget: "酒店有 Wi-Fi 吗?密码是什么?",
      answerTiles: [
        "Does",
        "the",
        "hotel",
        "have",
        "Wi-Fi?",
        "What's",
        "the",
        "password?",
      ],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7],
    },
    {
      type: "FREE_WRITE_TARGET",
      questionEn: "Translate: What time is check-out?",
      acceptableAnswers: [
        "几点退房?",
        "什么时候退房?",
        "什么时候退房",
      ],
    },
    {
      type: "SPEAK",
      questionEn: "Say: Please tell me your name.",
      targetText: "请告诉我你的名字。",
    },
  ],
};

export const u4LastYear: Lesson = {
  title: "HSK 2 · 去年我去了…",
  problems: [
    {
      type: "WRITE_IN_TARGET",
      questionEn: "Last summer, I went to Penang.",
      answerTiles: [
        "去年",
        "夏天",
        "冬天",
        ",",
        "我",
        "去",
        "了",
        "槟城。",
        "新加坡。",
      ],
      correctAnswer: [0, 1, 3, 4, 5, 6, 7],
    },
    {
      type: "LISTEN",
      tts: "我们在槟城吃了炒粿条,真的很好吃。",
      translationEn:
        "We ate char kway teow in Penang — it was really good.",
      acceptableAnswers: [
        "我们在槟城吃了炒粿条,真的很好吃",
        "我们在槟城吃了炒粿条 真的很好吃",
      ],
    },
    {
      type: "WRITE_IN_ENGLISH",
      questionTarget: "上个月我和家人一起去了云顶。",
      answerTiles: [
        "Last",
        "month",
        "I",
        "went",
        "to",
        "Genting",
        "with",
        "my",
        "family.",
      ],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    },
    {
      type: "FREE_WRITE_TARGET",
      questionEn: "Translate: It rained a lot, but we still had fun.",
      acceptableAnswers: [
        "下了很多雨,但是我们还是玩得很开心",
        "下了很多雨,但我们还是玩得很开心",
      ],
    },
    {
      type: "SPEAK",
      questionEn: "Say: I had never tried durian before.",
      targetText: "我以前从来没吃过榴莲。",
    },
  ],
};

export const u4Review: Lesson = {
  title: "HSK 2 · Unit 4 review",
  problems: [
    {
      type: "FREE_WRITE_TARGET",
      questionEn: "Translate: This year I want to go back to Muar to celebrate New Year.",
      acceptableAnswers: [
        "今年我想回麻坡过新年",
        "今年我想回麻坡过年",
      ],
    },
    {
      type: "LISTEN",
      tts: "上个星期我订了酒店,可是没有空房了。",
      translationEn:
        "Last week I tried to book a hotel, but there were no rooms left.",
      acceptableAnswers: [
        "上个星期我订了酒店,可是没有空房了",
        "上个星期我订了酒店 可是没有空房了",
      ],
    },
    {
      type: "SPEAK",
      questionEn: "Say: This shirt is too small for me.",
      targetText: "这件衣服我穿太小了。",
    },
    {
      type: "WRITE_IN_ENGLISH",
      questionTarget: "新年的时候,马路上很堵。",
      answerTiles: ["During", "Chinese", "New", "Year,", "the", "roads", "are", "very", "jammed."],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    },
  ],
};
