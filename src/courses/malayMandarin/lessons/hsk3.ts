import type { Lesson } from "../../types";

export const u5Opinions: Lesson = {
  title: "HSK 3 · 我觉得…",
  problems: [
    {
      type: "WRITE_IN_TARGET",
      questionEn: "I think this restaurant is very good.",
      answerTiles: [
        "我",
        "觉得",
        "认为",
        "这家",
        "餐厅",
        "很好。",
        "不好。",
      ],
      correctAnswer: [0, 1, 3, 4, 5],
    },
    {
      type: "LISTEN",
      tts: "我个人觉得,Muar 的风景比 KL 美。",
      translationEn:
        "Personally, I think Muar's scenery is more beautiful than KL's.",
      acceptableAnswers: [
        "我个人觉得,麻坡的风景比 kl 美",
        "我个人觉得 麻坡的风景比 kl 美",
        "我个人觉得,muar 的风景比 kl 美",
      ],
    },
    {
      type: "WRITE_IN_ENGLISH",
      questionTarget: "在我看来,学中文最重要的是练习。",
      answerTiles: [
        "In",
        "my",
        "view,",
        "the",
        "most",
        "important",
        "thing",
        "in",
        "learning",
        "Chinese",
        "is",
        "practice.",
      ],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    },
    {
      type: "FREE_WRITE_TARGET",
      questionEn: "Translate: I disagree, this is not a good idea.",
      acceptableAnswers: [
        "我不同意,这不是个好主意",
        "我不同意,这不是好主意",
      ],
    },
    {
      type: "SPEAK",
      questionEn: "Say: I think Muar's char kway teow is the best.",
      targetText: "我觉得麻坡的炒粿条最好吃。",
    },
  ],
};

export const u5Compare: Lesson = {
  title: "HSK 3 · 比较 (A 比 B…)",
  problems: [
    {
      type: "WRITE_IN_TARGET",
      questionEn: "KL is bigger than Muar.",
      answerTiles: ["吉隆坡", "比", "麻坡", "大", "小", "。"],
      correctAnswer: [0, 1, 2, 3, 5],
    },
    {
      type: "LISTEN",
      tts: "今天比昨天更冷一点。",
      translationEn: "Today is a bit colder than yesterday.",
      acceptableAnswers: ["今天比昨天更冷一点", "今天比昨天更冷一点。"],
    },
    {
      type: "WRITE_IN_ENGLISH",
      questionTarget: "我哥哥比我高十公分。",
      answerTiles: [
        "My",
        "older",
        "brother",
        "is",
        "ten",
        "centimeters",
        "taller",
        "than",
        "me.",
      ],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    },
    {
      type: "FREE_WRITE_TARGET",
      questionEn: "Translate: This dish is not as spicy as that one.",
      acceptableAnswers: [
        "这个菜没有那个那么辣",
        "这个菜没有那个辣",
      ],
    },
    {
      type: "SPEAK",
      questionEn: "Say: My Mandarin is better than my Hokkien.",
      targetText: "我的中文比福建话好。",
    },
  ],
};

export const u5Causal: Lesson = {
  title: "HSK 3 · 因为…所以…",
  problems: [
    {
      type: "WRITE_IN_TARGET",
      questionEn: "Because it's raining, I'm not going out.",
      answerTiles: [
        "因为",
        "下雨,",
        "下雪,",
        "所以",
        "我",
        "不",
        "出门。",
        "回家。",
      ],
      correctAnswer: [0, 1, 3, 4, 5, 6],
    },
    {
      type: "LISTEN",
      tts: "因为今天有空,所以我去看电影。",
      translationEn:
        "Because I'm free today, I'm going to watch a movie.",
      acceptableAnswers: [
        "因为今天有空,所以我去看电影",
        "因为今天有空 所以我去看电影",
      ],
    },
    {
      type: "WRITE_IN_ENGLISH",
      questionTarget: "他没来,因为他病了。",
      answerTiles: [
        "He",
        "didn't",
        "come",
        "because",
        "he",
        "was",
        "sick.",
      ],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6],
    },
    {
      type: "FREE_WRITE_TARGET",
      questionEn:
        "Translate: I learn Mandarin because my husband is Chinese.",
      acceptableAnswers: [
        "我学中文是因为我丈夫是华人",
        "我学中文,因为我先生是华人",
        "我学中文是因为我先生是华人",
      ],
    },
    {
      type: "SPEAK",
      questionEn: "Say: That's why I don't drink coffee.",
      targetText: "所以我不喝咖啡。",
    },
  ],
};

export const u5Agree: Lesson = {
  title: "HSK 3 · 同意与不同意",
  problems: [
    {
      type: "WRITE_IN_TARGET",
      questionEn: "I agree with what you said.",
      answerTiles: ["我", "同意", "不同意", "你", "说的", "想的", "。"],
      correctAnswer: [0, 1, 3, 4, 6],
    },
    {
      type: "LISTEN",
      tts: "我不太同意你的看法。",
      translationEn: "I don't really agree with your view.",
      acceptableAnswers: ["我不太同意你的看法", "我不太同意你的看法。"],
    },
    {
      type: "WRITE_IN_ENGLISH",
      questionTarget: "你说得有道理,但是我有不同的意见。",
      answerTiles: [
        "What",
        "you",
        "said",
        "makes",
        "sense,",
        "but",
        "I",
        "have",
        "a",
        "different",
        "opinion.",
      ],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    {
      type: "FREE_WRITE_TARGET",
      questionEn: "Translate: That makes sense.",
      acceptableAnswers: ["有道理", "有道理。", "你说得有道理"],
    },
    {
      type: "SPEAK",
      questionEn: "Say: I have a slightly different view.",
      targetText: "我有一点不同的看法。",
    },
  ],
};

export const u5Review: Lesson = {
  title: "HSK 3 · Unit 5 review",
  problems: [
    {
      type: "FREE_WRITE_TARGET",
      questionEn:
        "Translate: I think Muar is more beautiful than KL because it's quieter.",
      acceptableAnswers: [
        "我觉得麻坡比吉隆坡漂亮,因为更安静",
        "我觉得麻坡比吉隆坡漂亮 因为更安静",
        "我觉得麻坡比吉隆坡美,因为更安静",
      ],
    },
    {
      type: "LISTEN",
      tts: "因为他没准备,所以面试没成功。",
      translationEn:
        "Because he wasn't prepared, the interview didn't go well.",
      acceptableAnswers: [
        "因为他没准备,所以面试没成功",
        "因为他没准备 所以面试没成功",
      ],
    },
    {
      type: "SPEAK",
      questionEn: "Say: I think you might be right.",
      targetText: "我觉得你可能是对的。",
    },
    {
      type: "WRITE_IN_ENGLISH",
      questionTarget: "我哥哥比我大三岁,但是我比他高。",
      answerTiles: [
        "My",
        "older",
        "brother",
        "is",
        "three",
        "years",
        "older",
        "than",
        "me,",
        "but",
        "I'm",
        "taller",
        "than",
        "him.",
      ],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    },
  ],
};

export const u6NewFriends: Lesson = {
  title: "HSK 3 · 认识新朋友",
  problems: [
    {
      type: "WRITE_IN_TARGET",
      questionEn: "Nice to meet you, my name is Lin.",
      answerTiles: ["很", "高兴", "见到", "你,", "我", "叫", "Lin。"],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6],
    },
    {
      type: "LISTEN",
      tts: "你做什么工作的?",
      translationEn: "What kind of work do you do?",
      acceptableAnswers: ["你做什么工作的?", "你做什么工作的", "你是做什么的?"],
    },
    {
      type: "WRITE_IN_ENGLISH",
      questionTarget: "我们以前在学校一起读过书。",
      answerTiles: [
        "We",
        "used",
        "to",
        "study",
        "together",
        "at",
        "school.",
      ],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6],
    },
    {
      type: "FREE_WRITE_TARGET",
      questionEn: "Translate: Let's exchange WhatsApp numbers.",
      acceptableAnswers: [
        "我们交换 whatsapp 吧",
        "我们交换 whatsapp 号码吧",
        "互相加 whatsapp 吧",
      ],
    },
    {
      type: "SPEAK",
      questionEn: "Say: Let's grab a meal together one day.",
      targetText: "改天一起吃饭吧。",
    },
  ],
};

export const u6Hangout: Lesson = {
  title: "HSK 3 · 约朋友吃饭",
  problems: [
    {
      type: "WRITE_IN_TARGET",
      questionEn: "Are you free this Saturday?",
      answerTiles: ["你", "这个", "上个", "星期六", "有", "没", "空吗?"],
      correctAnswer: [0, 1, 3, 4, 6],
    },
    {
      type: "LISTEN",
      tts: "我们晚上六点在新山见面,好不好?",
      translationEn:
        "Let's meet up in JB at six in the evening, is that okay?",
      acceptableAnswers: [
        "我们晚上六点在新山见面,好不好?",
        "我们晚上六点在新山见面 好不好",
      ],
    },
    {
      type: "WRITE_IN_ENGLISH",
      questionTarget: "对不起,我今天没办法去,改天吧。",
      answerTiles: [
        "Sorry,",
        "I",
        "can't",
        "make",
        "it",
        "today,",
        "another",
        "day",
        "lah.",
      ],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    },
    {
      type: "FREE_WRITE_TARGET",
      questionEn: "Translate: I'll be there at seven, see you later.",
      acceptableAnswers: [
        "我七点到,等下见",
        "我七点到 等下见",
        "我七点到,一会儿见",
      ],
    },
    {
      type: "SPEAK",
      questionEn: "Say: Tomorrow let's go yum-cha together!",
      targetText: "明天一起去喝茶吧!",
    },
  ],
};

export const u6Love: Lesson = {
  title: "HSK 3 · 谈谈感情",
  problems: [
    {
      type: "WRITE_IN_TARGET",
      questionEn: "We have been dating for three years.",
      answerTiles: ["我们", "在", "已经", "交往", "三年", "了。", "而已。"],
      correctAnswer: [0, 2, 3, 4, 5],
    },
    {
      type: "LISTEN",
      tts: "我们认识不久而已,但是聊得很好。",
      translationEn:
        "We've only known each other a short time, but we get on really well.",
      acceptableAnswers: [
        "我们认识不久而已,但是聊得很好",
        "我们认识不久而已 但是聊得很好",
      ],
      // 而已 (éryǐ) = 'only that' — heavy Malaysian Mandarin usage
    },
    {
      type: "WRITE_IN_ENGLISH",
      questionTarget: "他对我很好,我也很喜欢他。",
      answerTiles: [
        "He",
        "treats",
        "me",
        "really",
        "well,",
        "and",
        "I",
        "like",
        "him",
        "a",
        "lot",
        "too.",
      ],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    },
    {
      type: "FREE_WRITE_TARGET",
      questionEn: "Translate: We just want to be good friends, that's all.",
      acceptableAnswers: [
        "我们只是想做好朋友而已",
        "我们只是想当好朋友而已",
      ],
    },
    {
      type: "SPEAK",
      questionEn: "Say: I miss you a lot.",
      targetText: "我很想你。",
    },
  ],
};

export const u6Single: Lesson = {
  title: "HSK 3 · 结婚或单身",
  problems: [
    {
      type: "WRITE_IN_TARGET",
      questionEn: "I'm not married yet.",
      answerTiles: ["我", "还", "没", "结婚。", "回家。"],
      correctAnswer: [0, 1, 2, 3],
    },
    {
      type: "LISTEN",
      tts: "我现在单身,可是不着急。",
      translationEn:
        "I'm single now, but I'm not in a rush.",
      acceptableAnswers: [
        "我现在单身,可是不着急",
        "我现在单身 可是不着急",
      ],
    },
    {
      type: "WRITE_IN_ENGLISH",
      questionTarget: "我们去年结婚的,在 Muar 办的婚礼。",
      answerTiles: [
        "We",
        "got",
        "married",
        "last",
        "year",
        "and",
        "had",
        "the",
        "wedding",
        "in",
        "Muar.",
      ],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    {
      type: "FREE_WRITE_TARGET",
      questionEn: "Translate: My parents always ask me when I'll get married.",
      acceptableAnswers: [
        "我父母总是问我什么时候结婚",
        "我爸妈总是问我什么时候结婚",
      ],
    },
    {
      type: "SPEAK",
      questionEn: "Say: My husband and I have known each other for ten years.",
      targetText: "我和我先生认识十年了。",
    },
  ],
};

export const u6Review: Lesson = {
  title: "HSK 3 · Unit 6 review",
  problems: [
    {
      type: "FREE_WRITE_TARGET",
      questionEn: "Translate: We met three years ago through a friend.",
      acceptableAnswers: [
        "我们三年前通过朋友认识的",
        "我们三年前是通过朋友认识的",
      ],
    },
    {
      type: "LISTEN",
      tts: "我们刚搬到 KL,还在适应这里的生活。",
      translationEn:
        "We just moved to KL and are still adjusting to life here.",
      acceptableAnswers: [
        "我们刚搬到 kl,还在适应这里的生活",
        "我们刚搬到 kl 还在适应这里的生活",
      ],
    },
    {
      type: "SPEAK",
      questionEn: "Say: Saturday let's go to the movies, OK?",
      targetText: "星期六一起去看电影,好不好?",
    },
    {
      type: "WRITE_IN_ENGLISH",
      questionTarget: "他比我大五岁,但是我们很合得来。",
      answerTiles: [
        "He's",
        "five",
        "years",
        "older",
        "than",
        "me,",
        "but",
        "we",
        "get",
        "along",
        "very",
        "well.",
      ],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    },
  ],
};
