import type { Lesson } from "../../types";

export const u1NiHao: Lesson = {
  title: "HSK 1 · 你好,我是 Lin",
  problems: [
    {
      type: "WRITE_IN_TARGET",
      questionEn: "Hello, my name is Lin.",
      answerTiles: ["你好,", "我", "叫", "Lin。", "他", "的"],
      correctAnswer: [0, 1, 2, 3],
    },
    {
      type: "LISTEN",
      tts: "你好啦,很高兴认识你。",
      translationEn: "Hi (la), nice to meet you.",
      acceptableAnswers: [
        "你好啦,很高兴认识你",
        "你好啦,很高兴认识你。",
        "你好啦 很高兴认识你",
      ],
    },
    {
      type: "WRITE_IN_ENGLISH",
      questionTarget: "他叫 Marc,我叫 Lin。",
      answerTiles: ["His", "name", "is", "Marc,", "my", "name", "is", "Lin."],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7],
    },
    {
      type: "FREE_WRITE_TARGET",
      questionEn: "Translate: Have you eaten? (everyday Malaysian greeting)",
      acceptableAnswers: ["吃饱了没?", "吃饱了没", "你吃饱了没?", "你吃饱了没"],
      hint: "In Malaysia, '吃饱了没?' is a common greeting like 'how are you?'",
    },
    {
      type: "SPEAK",
      questionEn: "Say: Hello, I'm from Malaysia.",
      targetText: "你好,我来自马来西亚。",
    },
  ],
};

export const u1LaiZi: Lesson = {
  title: "HSK 1 · 你来自哪里?",
  problems: [
    {
      type: "WRITE_IN_TARGET",
      questionEn: "Where are you from?",
      answerTiles: ["你", "来自", "哪里?", "什么?", "去"],
      correctAnswer: [0, 1, 2],
    },
    {
      type: "LISTEN",
      tts: "我来自麻坡,你呢?",
      translationEn: "I'm from Muar, and you?",
      acceptableAnswers: ["我来自麻坡,你呢?", "我来自麻坡 你呢", "我来自麻坡你呢"],
      // 麻坡 is the Mandarin name for Muar
    },
    {
      type: "WRITE_IN_ENGLISH",
      questionTarget: "我住在新加坡,但是我是马来西亚人。",
      answerTiles: [
        "I",
        "live",
        "in",
        "Singapore,",
        "but",
        "I'm",
        "Malaysian.",
      ],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6],
    },
    {
      type: "FREE_WRITE_TARGET",
      questionEn: "Translate: I am Chinese (a Chinese person).",
      acceptableAnswers: ["我是华人", "我是中国人"],
      hint: "In Malaysia, 华人 (huárén) means ethnic Chinese; 中国人 specifically means a citizen of China.",
    },
    {
      type: "SPEAK",
      questionEn: "Say: I live in Muar.",
      targetText: "我住在麻坡。",
    },
  ],
};

export const u1ShuZi: Lesson = {
  title: "HSK 1 · 数字与年龄",
  problems: [
    {
      type: "WRITE_IN_TARGET",
      questionEn: "I am thirty years old.",
      answerTiles: ["我", "三十岁。", "二十", "岁。", "今年"],
      correctAnswer: [0, 4, 1],
      // 我 今年 三十岁。
    },
    {
      type: "LISTEN",
      tts: "我有两个姐姐,一个弟弟。",
      translationEn: "I have two older sisters and one younger brother.",
      acceptableAnswers: [
        "我有两个姐姐,一个弟弟",
        "我有两个姐姐,一个弟弟。",
        "我有两个姐姐 一个弟弟",
      ],
    },
    {
      type: "WRITE_IN_ENGLISH",
      questionTarget: "我的电话号码是 012-345-6789。",
      answerTiles: [
        "My",
        "phone",
        "number",
        "is",
        "012-345-6789.",
      ],
      correctAnswer: [0, 1, 2, 3, 4],
    },
    {
      type: "FREE_WRITE_TARGET",
      questionEn: "Translate: How old are you?",
      acceptableAnswers: ["你几岁?", "你几岁", "你多大?", "你多大"],
      hint: "几岁 (jǐ suì) is for kids/casual; 多大 (duō dà) is for adults — both common in Malaysia.",
    },
    {
      type: "SPEAK",
      questionEn: "Say: My birthday is March 15th.",
      targetText: "我的生日是三月十五号。",
    },
  ],
};

export const u1JiaTing: Lesson = {
  title: "HSK 1 · 我的家庭",
  problems: [
    {
      type: "WRITE_IN_TARGET",
      questionEn: "This is my grandfather (paternal).",
      answerTiles: ["这", "是", "我的", "阿公。", "阿嫲。", "妈妈。"],
      correctAnswer: [0, 1, 2, 3],
      // 阿公 (a-gōng) — Hokkien-derived for paternal grandpa
    },
    {
      type: "LISTEN",
      tts: "我的阿嫲八十岁了,身体还很好。",
      translationEn: "My grandmother is eighty, and she's still very healthy.",
      acceptableAnswers: [
        "我的阿嫲八十岁了,身体还很好",
        "我的阿嫲八十岁了 身体还很好",
      ],
    },
    {
      type: "WRITE_IN_ENGLISH",
      questionTarget: "我家有四个人:爸爸、妈妈、姐姐和我。",
      answerTiles: [
        "There",
        "are",
        "four",
        "people",
        "in",
        "my",
        "family:",
        "dad,",
        "mom,",
        "older",
        "sister,",
        "and",
        "me.",
      ],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
    {
      type: "FREE_WRITE_TARGET",
      questionEn: "Translate: My father works in Johor Bahru.",
      acceptableAnswers: [
        "我爸爸在新山工作",
        "我的爸爸在新山工作",
      ],
      hint: "新山 (Xīnshān) is the Mandarin name for Johor Bahru.",
    },
    {
      type: "SPEAK",
      questionEn: "Say: I have one younger brother.",
      targetText: "我有一个弟弟。",
    },
  ],
};

export const u1Review: Lesson = {
  title: "HSK 1 · Unit 1 review",
  problems: [
    {
      type: "FREE_WRITE_TARGET",
      questionEn: "Translate: Hi, I'm Lin and I come from Malaysia.",
      acceptableAnswers: [
        "你好,我叫 lin,我来自马来西亚",
        "你好,我叫 lin,我来自马来西亚。",
        "你好我叫 lin 我来自马来西亚",
      ],
    },
    {
      type: "LISTEN",
      tts: "我家有阿公、阿嫲、爸爸和妈妈。",
      translationEn:
        "There are grandpa, grandma, dad, and mom in my family.",
      acceptableAnswers: [
        "我家有阿公、阿嫲、爸爸和妈妈",
        "我家有阿公阿嫲爸爸和妈妈",
        "我家有阿公,阿嫲,爸爸和妈妈",
      ],
    },
    {
      type: "SPEAK",
      questionEn: "Say: Nice to meet you.",
      targetText: "很高兴认识你。",
    },
    {
      type: "WRITE_IN_ENGLISH",
      questionTarget: "你今年几岁?",
      answerTiles: ["How", "old", "are", "you", "this", "year?"],
      correctAnswer: [0, 1, 2, 3, 4, 5],
    },
  ],
};

export const u2Pasar: Lesson = {
  title: "HSK 1 · 去巴刹买菜",
  problems: [
    {
      type: "WRITE_IN_TARGET",
      questionEn: "I go to the market in the morning.",
      answerTiles: ["我", "早上", "晚上", "去", "巴刹。", "学校。"],
      correctAnswer: [0, 1, 3, 4],
    },
    {
      type: "LISTEN",
      tts: "巴刹的菜很新鲜。",
      translationEn: "The vegetables at the market are very fresh.",
      acceptableAnswers: ["巴刹的菜很新鲜", "巴刹的菜很新鲜。"],
    },
    {
      type: "WRITE_IN_ENGLISH",
      questionTarget: "我要买一公斤鱼,谢谢。",
      answerTiles: ["I", "want", "to", "buy", "one", "kilo", "of", "fish,", "thanks."],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    },
    {
      type: "FREE_WRITE_TARGET",
      questionEn: "Translate: I want to buy two chickens.",
      acceptableAnswers: ["我要买两只鸡", "我要买两只鸡。"],
      hint: "只 (zhī) is the measure word for chickens / many animals.",
    },
    {
      type: "SPEAK",
      questionEn: "Say: This pasar is very famous in Muar.",
      targetText: "这个巴刹在麻坡很有名。",
    },
  ],
};

export const u2KopiTiam: Lesson = {
  title: "HSK 1 · 在咖啡店点东西",
  problems: [
    {
      type: "WRITE_IN_TARGET",
      questionEn: "One kopi-O, please.",
      answerTiles: ["一杯", "两杯", "咖啡乌,", "茶,", "谢谢。"],
      correctAnswer: [0, 2, 4],
      // 咖啡乌 = kopi-O = black coffee in Malaysian Hokkien
    },
    {
      type: "LISTEN",
      tts: "你要冷的还是热的?",
      translationEn: "Do you want it cold or hot?",
      acceptableAnswers: ["你要冷的还是热的?", "你要冷的还是热的", "你要冷的还是热的。"],
    },
    {
      type: "WRITE_IN_ENGLISH",
      questionTarget: "我要一份炒粿条,不要辣。",
      answerTiles: [
        "I",
        "want",
        "one",
        "plate",
        "of",
        "char",
        "kway",
        "teow,",
        "not",
        "spicy.",
      ],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    },
    {
      type: "FREE_WRITE_TARGET",
      questionEn: "Translate: One Hainanese chicken rice.",
      acceptableAnswers: [
        "一份海南鸡饭",
        "一盘海南鸡饭",
        "我要一份海南鸡饭",
      ],
    },
    {
      type: "SPEAK",
      questionEn: "Say: The kopi here is very tasty.",
      targetText: "这里的咖啡乌很好喝。",
    },
  ],
};

export const u2MuarFood: Lesson = {
  title: "HSK 1 · Muar 美食",
  problems: [
    {
      type: "WRITE_IN_TARGET",
      questionEn: "Muar's oyster omelette is very delicious.",
      answerTiles: ["麻坡", "的", "蚝煎", "炒饭", "很好吃。", "不好吃。"],
      correctAnswer: [0, 1, 2, 4],
    },
    {
      type: "LISTEN",
      tts: "我喜欢吃榴莲,也喜欢吃 oh-chien。",
      translationEn: "I like eating durian, and I also like oh-chien.",
      acceptableAnswers: [
        "我喜欢吃榴莲,也喜欢吃 oh-chien",
        "我喜欢吃榴莲也喜欢吃 oh-chien",
      ],
    },
    {
      type: "WRITE_IN_ENGLISH",
      questionTarget: "你吃过 oh-chien 吗?",
      answerTiles: ["Have", "you", "eaten", "oh-chien", "before?"],
      correctAnswer: [0, 1, 2, 3, 4],
    },
    {
      type: "FREE_WRITE_TARGET",
      questionEn: "Translate: I like Hokkien mee.",
      acceptableAnswers: ["我喜欢福建面", "我喜欢吃福建面"],
    },
    {
      type: "SPEAK",
      questionEn: "Say: Today let's eat at the food court!",
      targetText: "今天我们去美食中心吃饭吧!",
    },
  ],
};

export const u2DuoShao: Lesson = {
  title: "HSK 1 · 多少钱?",
  problems: [
    {
      type: "WRITE_IN_TARGET",
      questionEn: "How much is this?",
      answerTiles: ["这个", "那个", "多少", "几", "钱?"],
      correctAnswer: [0, 2, 4],
    },
    {
      type: "LISTEN",
      tts: "一共十块半。",
      translationEn: "Ten ringgit fifty in total.",
      acceptableAnswers: [
        "一共十块半",
        "一共十块半。",
        "一共十块五毛",
      ],
      // 块 (kuài) is colloquial for currency unit (ringgit/yuan)
    },
    {
      type: "WRITE_IN_ENGLISH",
      questionTarget: "可以刷卡吗?还是只收现金?",
      answerTiles: [
        "Can",
        "I",
        "pay",
        "by",
        "card?",
        "Or",
        "do",
        "you",
        "only",
        "take",
        "cash?",
      ],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    {
      type: "FREE_WRITE_TARGET",
      questionEn: "Translate: It's too expensive, can it be cheaper?",
      acceptableAnswers: [
        "太贵了,可以便宜一点吗?",
        "太贵了 可以便宜一点吗",
        "太贵了,便宜一点可以吗?",
      ],
    },
    {
      type: "SPEAK",
      questionEn: "Say: I'll pay by card.",
      targetText: "我刷卡。",
    },
  ],
};

export const u2Review: Lesson = {
  title: "HSK 1 · Unit 2 review",
  problems: [
    {
      type: "FREE_WRITE_TARGET",
      questionEn: "Translate: One kopi-O and one char kway teow, please.",
      acceptableAnswers: [
        "一杯咖啡乌和一份炒粿条,谢谢",
        "一杯咖啡乌和一份炒粿条,谢谢。",
        "一杯咖啡乌,一份炒粿条,谢谢",
      ],
    },
    {
      type: "LISTEN",
      tts: "请问,这里有 ATM 吗?",
      translationEn: "Excuse me, is there an ATM here?",
      acceptableAnswers: ["请问,这里有 atm 吗?", "请问,这里有 atm 吗", "请问这里有 atm 吗"],
    },
    {
      type: "SPEAK",
      questionEn: "Say: How much does it cost?",
      targetText: "多少钱?",
    },
    {
      type: "WRITE_IN_ENGLISH",
      questionTarget: "我要一份海南鸡饭,加一杯 teh-tarik。",
      answerTiles: [
        "I",
        "want",
        "one",
        "Hainanese",
        "chicken",
        "rice",
        "and",
        "one",
        "teh",
        "tarik.",
      ],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    },
  ],
};
