import type { Lesson } from "../types";

export const a1u1Saludos: Lesson = {
  title: "A1 · Saludos básicos",
  problems: [
    {
      type: "WRITE_IN_SPANISH",
      questionEn: "Hello, what's your name?",
      answerTiles: ["Hola,", "¿cómo", "te", "llamas?", "estás?", "se"],
      correctAnswer: [0, 1, 2, 3],
    },
    {
      type: "LISTEN",
      tts: "Me llamo Lin, mucho gusto.",
      translationEn: "My name is Lin, nice to meet you.",
      acceptableAnswers: ["me llamo lin mucho gusto", "me llamo lin, mucho gusto"],
    },
    {
      type: "WRITE_IN_ENGLISH",
      questionEs: "Buenos días, ¿qué tal?",
      answerTiles: ["Good", "morning,", "how", "are", "you?"],
      correctAnswer: [0, 1, 2, 3, 4],
    },
    {
      type: "FREE_WRITE_ES",
      questionEn: "Translate: Goodbye, see you tomorrow.",
      acceptableAnswers: ["adiós, hasta mañana", "adiós hasta mañana"],
    },
    {
      type: "SPEAK",
      questionEn: "Say: Hello, I'm Lin.",
      targetEs: "Hola, soy Lin.",
    },
  ],
};

export const a1u1SoyDe: Lesson = {
  title: "A1 · Soy de…",
  problems: [
    {
      type: "WRITE_IN_SPANISH",
      questionEn: "I'm from Malaysia.",
      answerTiles: ["Soy", "Estoy", "de", "Malasia.", "España."],
      correctAnswer: [0, 2, 3],
    },
    {
      type: "LISTEN",
      tts: "Soy de Madrid, ¿y tú?",
      translationEn: "I'm from Madrid, and you?",
      acceptableAnswers: ["soy de madrid y tú", "soy de madrid, ¿y tú?", "soy de madrid ¿y tú?"],
    },
    {
      type: "WRITE_IN_ENGLISH",
      questionEs: "¿De dónde eres?",
      answerTiles: ["Where", "are", "you", "from?"],
      correctAnswer: [0, 1, 2, 3],
    },
    {
      type: "FREE_WRITE_ES",
      questionEn: "Translate: I live in Spain.",
      acceptableAnswers: ["vivo en españa"],
    },
    {
      type: "SPEAK",
      questionEn: "Say: I'm Chinese, but I live in Madrid.",
      targetEs: "Soy china, pero vivo en Madrid.",
    },
  ],
};

export const a1u1Numeros: Lesson = {
  title: "A1 · Números y edad",
  problems: [
    {
      type: "WRITE_IN_SPANISH",
      questionEn: "I'm thirty years old.",
      answerTiles: ["Tengo", "Soy", "treinta", "años.", "veinte"],
      correctAnswer: [0, 2, 3],
    },
    {
      type: "LISTEN",
      tts: "Tengo veinticinco años.",
      translationEn: "I'm twenty-five years old.",
      acceptableAnswers: ["tengo veinticinco años", "tengo 25 años"],
    },
    {
      type: "WRITE_IN_ENGLISH",
      questionEs: "Mi número de teléfono es seis siete ocho.",
      answerTiles: ["My", "phone", "number", "is", "six", "seven", "eight."],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6],
    },
    {
      type: "FREE_WRITE_ES",
      questionEn: "Translate: How old are you?",
      acceptableAnswers: ["¿cuántos años tienes?", "cuántos años tienes"],
    },
    {
      type: "SPEAK",
      questionEn: "Say: I have two sisters.",
      targetEs: "Tengo dos hermanas.",
    },
  ],
};

export const a1u1Familia: Lesson = {
  title: "A1 · La familia",
  problems: [
    {
      type: "WRITE_IN_SPANISH",
      questionEn: "My mother is from China.",
      answerTiles: ["Mi", "madre", "padre", "es", "está", "de", "China."],
      correctAnswer: [0, 1, 3, 5, 6],
    },
    {
      type: "LISTEN",
      tts: "Tengo un hermano y una hermana.",
      translationEn: "I have one brother and one sister.",
      acceptableAnswers: ["tengo un hermano y una hermana"],
    },
    {
      type: "WRITE_IN_ENGLISH",
      questionEs: "Mi marido se llama Marc.",
      answerTiles: ["My", "husband's", "name", "is", "Marc."],
      correctAnswer: [0, 1, 2, 3, 4],
    },
    {
      type: "FREE_WRITE_ES",
      questionEn: "Translate: My family is small.",
      acceptableAnswers: ["mi familia es pequeña"],
    },
    {
      type: "SPEAK",
      questionEn: "Say: My grandmother lives with us.",
      targetEs: "Mi abuela vive con nosotros.",
    },
  ],
};

export const a1u1Review: Lesson = {
  title: "A1 · Unit 1 review",
  problems: [
    {
      type: "FREE_WRITE_ES",
      questionEn: "Translate: Hi, I'm Lin and I'm from Malaysia.",
      acceptableAnswers: [
        "hola, soy lin y soy de malasia",
        "hola soy lin y soy de malasia",
      ],
    },
    {
      type: "LISTEN",
      tts: "Mi padre tiene cincuenta años.",
      translationEn: "My father is fifty years old.",
      acceptableAnswers: ["mi padre tiene cincuenta años", "mi padre tiene 50 años"],
    },
    {
      type: "SPEAK",
      questionEn: "Say: Nice to meet you.",
      targetEs: "Mucho gusto.",
    },
    {
      type: "WRITE_IN_ENGLISH",
      questionEs: "¿De dónde es tu marido?",
      answerTiles: ["Where", "is", "your", "husband", "from?"],
      correctAnswer: [0, 1, 2, 3, 4],
    },
  ],
};

export const a1u2Pedir: Lesson = {
  title: "A1 · Pedir en un bar",
  problems: [
    {
      type: "WRITE_IN_SPANISH",
      questionEn: "A coffee, please.",
      answerTiles: ["Un", "Una", "café,", "té,", "por", "favor."],
      correctAnswer: [0, 2, 4, 5],
    },
    {
      type: "LISTEN",
      tts: "¿Me pone una caña, por favor?",
      translationEn: "Can I have a small beer, please?",
      acceptableAnswers: [
        "¿me pone una caña, por favor?",
        "me pone una caña por favor",
        "me pone una caña, por favor",
      ],
    },
    {
      type: "WRITE_IN_ENGLISH",
      questionEs: "Quiero un agua sin gas.",
      answerTiles: ["I", "want", "a", "still", "water."],
      correctAnswer: [0, 1, 2, 3, 4],
    },
    {
      type: "FREE_WRITE_ES",
      questionEn: "Translate: Two beers, please.",
      acceptableAnswers: ["dos cervezas, por favor", "dos cervezas por favor", "dos cañas por favor"],
      hint: "In Spain, a small beer is a 'caña'.",
    },
    {
      type: "SPEAK",
      questionEn: "Say: A coffee with milk, please.",
      targetEs: "Un café con leche, por favor.",
    },
  ],
};

export const a1u2Cuenta: Lesson = {
  title: "A1 · La cuenta, por favor",
  problems: [
    {
      type: "WRITE_IN_SPANISH",
      questionEn: "The bill, please.",
      answerTiles: ["La", "El", "cuenta,", "menú,", "por", "favor."],
      correctAnswer: [0, 2, 4, 5],
    },
    {
      type: "LISTEN",
      tts: "¿Pago en efectivo o con tarjeta?",
      translationEn: "Do I pay cash or by card?",
      acceptableAnswers: [
        "¿pago en efectivo o con tarjeta?",
        "pago en efectivo o con tarjeta",
      ],
    },
    {
      type: "WRITE_IN_ENGLISH",
      questionEs: "Son doce euros con cincuenta.",
      answerTiles: ["It's", "twelve", "euros", "fifty."],
      correctAnswer: [0, 1, 2, 3],
    },
    {
      type: "FREE_WRITE_ES",
      questionEn: "Translate: Can I pay by card?",
      acceptableAnswers: [
        "¿puedo pagar con tarjeta?",
        "puedo pagar con tarjeta",
      ],
    },
    {
      type: "SPEAK",
      questionEn: "Say: Keep the change.",
      targetEs: "Quédate con el cambio.",
    },
  ],
};

export const a1u2Comida: Lesson = {
  title: "A1 · Comida básica",
  problems: [
    {
      type: "WRITE_IN_SPANISH",
      questionEn: "I would like a Spanish omelette.",
      answerTiles: ["Quiero", "Quería", "una", "un", "tortilla", "española."],
      correctAnswer: [1, 2, 4, 5],
      // 'quería' (imperfect of querer) = polite request, common in Spain
    },
    {
      type: "LISTEN",
      tts: "Para mí, una ración de jamón.",
      translationEn: "For me, a serving of cured ham.",
      acceptableAnswers: ["para mí, una ración de jamón", "para mí una ración de jamón"],
    },
    {
      type: "WRITE_IN_ENGLISH",
      questionEs: "El pan está rico.",
      answerTiles: ["The", "bread", "is", "delicious."],
      correctAnswer: [0, 1, 2, 3],
    },
    {
      type: "FREE_WRITE_ES",
      questionEn: "Translate: I don't eat meat.",
      acceptableAnswers: ["no como carne"],
    },
    {
      type: "SPEAK",
      questionEn: "Say: The paella is very tasty.",
      targetEs: "La paella está muy buena.",
    },
  ],
};

export const a1u2Cuanto: Lesson = {
  title: "A1 · ¿Cuánto cuesta?",
  problems: [
    {
      type: "WRITE_IN_SPANISH",
      questionEn: "How much does it cost?",
      answerTiles: ["¿Cuánto", "Cómo", "cuesta?", "cuestan?"],
      correctAnswer: [0, 2],
    },
    {
      type: "LISTEN",
      tts: "Cuesta cinco euros con setenta.",
      translationEn: "It costs five euros seventy.",
      acceptableAnswers: ["cuesta cinco euros con setenta", "cuesta 5 euros con 70"],
    },
    {
      type: "WRITE_IN_ENGLISH",
      questionEs: "Es caro, pero está rico.",
      answerTiles: ["It's", "expensive,", "but", "it's", "delicious."],
      correctAnswer: [0, 1, 2, 3, 4],
    },
    {
      type: "FREE_WRITE_ES",
      questionEn: "Translate: It's cheap.",
      acceptableAnswers: ["es barato", "está barato"],
    },
    {
      type: "SPEAK",
      questionEn: "Say: How much is the menu of the day?",
      targetEs: "¿Cuánto es el menú del día?",
    },
  ],
};

export const a1u2Review: Lesson = {
  title: "A1 · Unit 2 review",
  problems: [
    {
      type: "FREE_WRITE_ES",
      questionEn: "Translate: A small beer and a coffee, please.",
      acceptableAnswers: [
        "una caña y un café, por favor",
        "una caña y un café por favor",
      ],
    },
    {
      type: "LISTEN",
      tts: "La cuenta, por favor. ¿Cuánto es?",
      translationEn: "The bill, please. How much is it?",
      acceptableAnswers: [
        "la cuenta, por favor. ¿cuánto es?",
        "la cuenta por favor cuánto es",
      ],
    },
    {
      type: "SPEAK",
      questionEn: "Say: It's twelve euros.",
      targetEs: "Son doce euros.",
    },
    {
      type: "WRITE_IN_ENGLISH",
      questionEs: "Quería una ración de patatas bravas.",
      answerTiles: ["I'd", "like", "a", "serving", "of", "patatas", "bravas."],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6],
    },
  ],
};
