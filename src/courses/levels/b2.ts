import type { Lesson } from "../types";

export const b2u8Defender: Lesson = {
  title: "B2 · Defender una opinión",
  problems: [
    {
      type: "WRITE_IN_ENGLISH",
      questionTarget: "Sostengo que es una decisión equivocada.",
      answerTiles: [
        "I",
        "maintain",
        "that",
        "it's",
        "a",
        "wrong",
        "decision.",
      ],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6],
    },
    {
      type: "FREE_WRITE_TARGET",
      questionEn: "Translate: From my point of view, the issue is more complex.",
      acceptableAnswers: [
        "desde mi punto de vista, el tema es más complejo",
        "desde mi punto de vista el tema es más complejo",
        "a mi modo de ver, el tema es más complejo",
      ],
    },
    {
      type: "LISTEN",
      tts: "No estoy de acuerdo del todo, pero entiendo tu argumento.",
      translationEn: "I don't fully agree, but I understand your argument.",
      acceptableAnswers: [
        "no estoy de acuerdo del todo, pero entiendo tu argumento",
        "no estoy de acuerdo del todo pero entiendo tu argumento",
      ],
    },
    {
      type: "WRITE_IN_TARGET",
      questionEn: "However, the data tells us something different.",
      answerTiles: [
        "Sin",
        "embargo,",
        "los",
        "datos",
        "nos",
        "dicen",
        "algo",
        "distinto.",
        "diferente.",
      ],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7],
    },
    {
      type: "SPEAK",
      questionEn: "Say: I'd like to add one more thing.",
      targetText: "Me gustaría añadir una cosa más.",
    },
  ],
};

export const b2u8Aunque: Lesson = {
  title: "B2 · Aunque… (concesión)",
  problems: [
    {
      type: "WRITE_IN_TARGET",
      questionEn: "Even though I'm tired, I'm going to keep working.",
      answerTiles: [
        "Aunque",
        "estoy",
        "esté",
        "cansado,",
        "voy",
        "a",
        "seguir",
        "trabajando.",
      ],
      correctAnswer: [0, 1, 3, 4, 5, 6, 7],
      // Indicative when the fact is real/known
    },
    {
      type: "FREE_WRITE_TARGET",
      questionEn: "Translate: Even if it rains tomorrow, we'll go anyway.",
      acceptableAnswers: [
        "aunque llueva mañana, iremos igualmente",
        "aunque llueva mañana iremos igualmente",
        "aunque llueva mañana, iremos igual",
      ],
      hint: "When the situation is hypothetical, 'aunque' takes the subjunctive.",
    },
    {
      type: "LISTEN",
      tts: "A pesar de ser caro, mereció la pena.",
      translationEn: "Despite being expensive, it was worth it.",
      acceptableAnswers: [
        "a pesar de ser caro, mereció la pena",
        "a pesar de ser caro mereció la pena",
      ],
    },
    {
      type: "WRITE_IN_ENGLISH",
      questionTarget: "Por mucho que se esfuerce, no llegará a tiempo.",
      answerTiles: [
        "However",
        "much",
        "he",
        "tries,",
        "he",
        "won't",
        "arrive",
        "on",
        "time.",
      ],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    },
    {
      type: "SPEAK",
      questionEn: "Say: Even though I don't agree, I respect your decision.",
      targetText: "Aunque no esté de acuerdo, respeto tu decisión.",
    },
  ],
};

export const b2u8Discrepar: Lesson = {
  title: "B2 · Discrepar con elegancia",
  problems: [
    {
      type: "WRITE_IN_ENGLISH",
      questionTarget: "Entiendo lo que dices, pero no termina de convencerme.",
      answerTiles: [
        "I",
        "understand",
        "what",
        "you're",
        "saying,",
        "but",
        "it",
        "doesn't",
        "quite",
        "convince",
        "me.",
      ],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    {
      type: "FREE_WRITE_TARGET",
      questionEn: "Translate: With all due respect, I see it differently.",
      acceptableAnswers: [
        "con todos mis respetos, lo veo de otra manera",
        "con todos mis respetos lo veo de otra manera",
        "con el debido respeto, lo veo de otra manera",
      ],
    },
    {
      type: "LISTEN",
      tts: "Me temo que tengo que discrepar en ese punto.",
      translationEn: "I'm afraid I have to disagree on that point.",
      acceptableAnswers: [
        "me temo que tengo que discrepar en ese punto",
      ],
    },
    {
      type: "WRITE_IN_TARGET",
      questionEn: "Maybe you're right, but I'm not so sure.",
      answerTiles: [
        "Quizá",
        "tengas",
        "tienes",
        "razón,",
        "pero",
        "no",
        "estoy",
        "tan",
        "seguro.",
      ],
      correctAnswer: [0, 1, 3, 4, 5, 6, 7, 8],
      // 'quizá' + subjunctive = doubt
    },
    {
      type: "SPEAK",
      questionEn: "Say: That's a fair point, but consider this.",
      targetText: "Es un buen argumento, pero considera esto.",
    },
  ],
};

export const b2u8Pluscuamp: Lesson = {
  title: "B2 · Si lo hubiera sabido…",
  problems: [
    {
      type: "FREE_WRITE_TARGET",
      questionEn: "Translate: If I had known, I would have called you.",
      acceptableAnswers: [
        "si lo hubiera sabido, te habría llamado",
        "si lo hubiera sabido te habría llamado",
        "si lo hubiese sabido, te habría llamado",
        "si lo hubiese sabido te habría llamado",
      ],
    },
    {
      type: "WRITE_IN_TARGET",
      questionEn: "If we had left earlier, we wouldn't have missed the train.",
      answerTiles: [
        "Si",
        "hubiéramos",
        "habíamos",
        "salido",
        "antes,",
        "no",
        "habríamos",
        "perdido",
        "el",
        "tren.",
      ],
      correctAnswer: [0, 1, 3, 4, 5, 6, 7, 8, 9],
    },
    {
      type: "LISTEN",
      tts: "Habría preferido que me lo dijeras antes.",
      translationEn: "I would have preferred that you told me earlier.",
      acceptableAnswers: [
        "habría preferido que me lo dijeras antes",
      ],
    },
    {
      type: "WRITE_IN_ENGLISH",
      questionTarget: "De haberlo sabido, no habría venido.",
      answerTiles: [
        "Had",
        "I",
        "known,",
        "I",
        "wouldn't",
        "have",
        "come.",
      ],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6],
    },
    {
      type: "SPEAK",
      questionEn: "Say: If I were you, I would have refused.",
      targetText: "Yo en tu lugar, me habría negado.",
    },
  ],
};

export const b2u8Review: Lesson = {
  title: "B2 · Unit 8 review",
  problems: [
    {
      type: "FREE_WRITE_TARGET",
      questionEn: "Translate: I respect your opinion, but I think you're wrong.",
      acceptableAnswers: [
        "respeto tu opinión, pero creo que te equivocas",
        "respeto tu opinión pero creo que te equivocas",
      ],
    },
    {
      type: "LISTEN",
      tts: "Por más que lo intente, no consigo entenderlo.",
      translationEn: "However hard I try, I can't manage to understand it.",
      acceptableAnswers: [
        "por más que lo intente, no consigo entenderlo",
        "por más que lo intente no consigo entenderlo",
      ],
    },
    {
      type: "SPEAK",
      questionEn: "Say: If you had told me, I would have come.",
      targetText: "Si me lo hubieras dicho, habría venido.",
    },
    {
      type: "WRITE_IN_ENGLISH",
      questionTarget: "Por un lado, tienes razón; por otro, hay matices.",
      answerTiles: [
        "On",
        "one",
        "hand,",
        "you're",
        "right;",
        "on",
        "the",
        "other,",
        "there",
        "are",
        "nuances.",
      ],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
  ],
};

export const b2u9Regiones: Lesson = {
  title: "B2 · Las regiones de España",
  problems: [
    {
      type: "WRITE_IN_ENGLISH",
      questionTarget: "En el norte se habla gallego, vasco y catalán.",
      answerTiles: [
        "In",
        "the",
        "north,",
        "Galician,",
        "Basque,",
        "and",
        "Catalan",
        "are",
        "spoken.",
      ],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    },
    {
      type: "FREE_WRITE_TARGET",
      questionEn: "Translate: Andalusia is famous for its flamenco and tapas.",
      acceptableAnswers: [
        "andalucía es famosa por su flamenco y sus tapas",
        "andalucía es famosa por el flamenco y las tapas",
      ],
    },
    {
      type: "LISTEN",
      tts: "Cada comunidad autónoma tiene sus propias costumbres.",
      translationEn: "Each autonomous community has its own customs.",
      acceptableAnswers: [
        "cada comunidad autónoma tiene sus propias costumbres",
      ],
    },
    {
      type: "WRITE_IN_TARGET",
      questionEn: "Galicia is in the northwest of the peninsula.",
      answerTiles: [
        "Galicia",
        "está",
        "es",
        "en",
        "el",
        "noroeste",
        "de",
        "la",
        "península.",
      ],
      correctAnswer: [0, 1, 3, 4, 5, 6, 7, 8],
    },
    {
      type: "SPEAK",
      questionEn: "Say: I'd love to visit the Basque Country.",
      targetText: "Me encantaría visitar el País Vasco.",
    },
  ],
};

export const b2u9Tradiciones: Lesson = {
  title: "B2 · Tradiciones y fiestas",
  problems: [
    {
      type: "WRITE_IN_ENGLISH",
      questionTarget: "La Tomatina se celebra en Buñol todos los años en agosto.",
      answerTiles: [
        "La",
        "Tomatina",
        "is",
        "celebrated",
        "in",
        "Buñol",
        "every",
        "year",
        "in",
        "August.",
      ],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    },
    {
      type: "FREE_WRITE_TARGET",
      questionEn: "Translate: During Holy Week there are processions everywhere.",
      acceptableAnswers: [
        "durante la semana santa hay procesiones por todas partes",
        "en semana santa hay procesiones por todas partes",
      ],
    },
    {
      type: "LISTEN",
      tts: "Las Fallas de Valencia son espectaculares.",
      translationEn: "The Fallas of Valencia are spectacular.",
      acceptableAnswers: ["las fallas de valencia son espectaculares"],
    },
    {
      type: "WRITE_IN_TARGET",
      questionEn: "We have dinner late and we go out at midnight.",
      answerTiles: [
        "Cenamos",
        "tarde",
        "y",
        "salimos",
        "vamos",
        "a",
        "las",
        "doce",
        "de",
        "la",
        "noche.",
      ],
      correctAnswer: [0, 1, 2, 3, 6, 7, 8, 9, 10],
    },
    {
      type: "SPEAK",
      questionEn: "Say: It's a tradition we maintain at home.",
      targetText: "Es una tradición que mantenemos en casa.",
    },
  ],
};

export const b2u9Sobremesa: Lesson = {
  title: "B2 · La sobremesa",
  problems: [
    {
      type: "WRITE_IN_ENGLISH",
      questionTarget: "La sobremesa es el momento sagrado después de comer.",
      answerTiles: [
        "The",
        "sobremesa",
        "is",
        "the",
        "sacred",
        "moment",
        "after",
        "lunch.",
      ],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7],
    },
    {
      type: "FREE_WRITE_TARGET",
      questionEn:
        "Translate: We spent two hours chatting at the table after dessert.",
      acceptableAnswers: [
        "estuvimos dos horas charlando en la mesa después del postre",
        "pasamos dos horas charlando en la mesa después del postre",
      ],
    },
    {
      type: "LISTEN",
      tts: "Después del café, siempre cae una copita de orujo.",
      translationEn: "After coffee, there's always a little glass of orujo.",
      acceptableAnswers: [
        "después del café, siempre cae una copita de orujo",
        "después del café siempre cae una copita de orujo",
      ],
    },
    {
      type: "WRITE_IN_TARGET",
      questionEn: "Lunch ends, but the conversation goes on.",
      answerTiles: [
        "La",
        "comida",
        "acaba",
        "se",
        "termina,",
        "pero",
        "la",
        "conversación",
        "sigue.",
        "continúa.",
      ],
      correctAnswer: [0, 1, 3, 4, 5, 6, 7, 8],
    },
    {
      type: "SPEAK",
      questionEn: "Say: There's nothing better than a good sobremesa.",
      targetText: "No hay nada mejor que una buena sobremesa.",
    },
  ],
};

export const b2u9Politica: Lesson = {
  title: "B2 · Política y sociedad",
  problems: [
    {
      type: "WRITE_IN_ENGLISH",
      questionTarget: "El gobierno ha aprobado una nueva ley sobre vivienda.",
      answerTiles: [
        "The",
        "government",
        "has",
        "approved",
        "a",
        "new",
        "housing",
        "law.",
      ],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7],
    },
    {
      type: "FREE_WRITE_TARGET",
      questionEn: "Translate: There were protests in the main square.",
      acceptableAnswers: [
        "hubo protestas en la plaza mayor",
        "hubo manifestaciones en la plaza mayor",
      ],
    },
    {
      type: "LISTEN",
      tts: "Habrá elecciones generales el año que viene.",
      translationEn: "There will be general elections next year.",
      acceptableAnswers: ["habrá elecciones generales el año que viene"],
    },
    {
      type: "WRITE_IN_TARGET",
      questionEn: "Many young people leave the country to work abroad.",
      answerTiles: [
        "Muchos",
        "jóvenes",
        "se",
        "van",
        "del",
        "país",
        "para",
        "trabajar",
        "fuera.",
      ],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    },
    {
      type: "SPEAK",
      questionEn: "Say: It's a problem that affects the whole society.",
      targetText: "Es un problema que afecta a toda la sociedad.",
    },
  ],
};

export const b2u9Review: Lesson = {
  title: "B2 · Unit 9 review",
  problems: [
    {
      type: "FREE_WRITE_TARGET",
      questionEn: "Translate: Each region has its own dishes and traditions.",
      acceptableAnswers: [
        "cada región tiene sus propios platos y tradiciones",
      ],
    },
    {
      type: "LISTEN",
      tts: "El debate político en España es bastante intenso.",
      translationEn: "Political debate in Spain is quite intense.",
      acceptableAnswers: ["el debate político en españa es bastante intenso"],
    },
    {
      type: "SPEAK",
      questionEn: "Say: We finished lunch at four in the afternoon.",
      targetText: "Acabamos de comer a las cuatro de la tarde.",
    },
    {
      type: "WRITE_IN_ENGLISH",
      questionTarget: "El flamenco no es solo música, es una forma de vida.",
      answerTiles: [
        "Flamenco",
        "isn't",
        "just",
        "music,",
        "it's",
        "a",
        "way",
        "of",
        "life.",
      ],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    },
  ],
};
