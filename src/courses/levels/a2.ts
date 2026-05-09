import type { Lesson } from "../types";

export const a2u3Rutina: Lesson = {
  title: "A2 · Mi rutina diaria",
  problems: [
    {
      type: "WRITE_IN_TARGET",
      questionEn: "I get up at seven and have breakfast.",
      answerTiles: [
        "Me",
        "levanto",
        "a",
        "las",
        "siete",
        "y",
        "desayuno.",
        "ceno.",
      ],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6],
    },
    {
      type: "LISTEN",
      tts: "Por la tarde voy al gimnasio.",
      translationEn: "In the afternoon I go to the gym.",
      acceptableAnswers: ["por la tarde voy al gimnasio"],
    },
    {
      type: "WRITE_IN_ENGLISH",
      questionTarget: "Después de comer, echamos la siesta.",
      answerTiles: [
        "After",
        "lunch,",
        "we",
        "take",
        "a",
        "nap.",
      ],
      correctAnswer: [0, 1, 2, 3, 4, 5],
    },
    {
      type: "FREE_WRITE_TARGET",
      questionEn: "Translate: I work from home on Mondays.",
      acceptableAnswers: [
        "trabajo desde casa los lunes",
        "los lunes trabajo desde casa",
      ],
    },
    {
      type: "SPEAK",
      questionEn: "Say: I go to bed early.",
      targetText: "Me acuesto pronto.",
    },
  ],
};

export const a2u3Barrio: Lesson = {
  title: "A2 · El barrio",
  problems: [
    {
      type: "WRITE_IN_TARGET",
      questionEn: "There is a supermarket on my street.",
      answerTiles: [
        "Hay",
        "Es",
        "un",
        "supermercado",
        "en",
        "mi",
        "calle.",
        "casa.",
      ],
      correctAnswer: [0, 2, 3, 4, 5, 6],
    },
    {
      type: "LISTEN",
      tts: "Mi piso está cerca de la plaza mayor.",
      translationEn: "My flat is near the main square.",
      acceptableAnswers: ["mi piso está cerca de la plaza mayor"],
    },
    {
      type: "WRITE_IN_ENGLISH",
      questionTarget: "El bar de abajo siempre está lleno.",
      answerTiles: ["The", "bar", "downstairs", "is", "always", "full."],
      correctAnswer: [0, 1, 2, 3, 4, 5],
    },
    {
      type: "FREE_WRITE_TARGET",
      questionEn: "Translate: The pharmacy is on the corner.",
      acceptableAnswers: [
        "la farmacia está en la esquina",
      ],
    },
    {
      type: "SPEAK",
      questionEn: "Say: I love my neighborhood.",
      targetText: "Me encanta mi barrio.",
    },
  ],
};

export const a2u3Hora: Lesson = {
  title: "A2 · Hora y horarios",
  problems: [
    {
      type: "WRITE_IN_TARGET",
      questionEn: "What time is it?",
      answerTiles: ["¿Qué", "Cómo", "hora", "es?", "son?"],
      correctAnswer: [0, 2, 3],
    },
    {
      type: "LISTEN",
      tts: "Son las nueve y media de la mañana.",
      translationEn: "It's nine thirty in the morning.",
      acceptableAnswers: [
        "son las nueve y media de la mañana",
        "son las 9 y media de la mañana",
      ],
    },
    {
      type: "WRITE_IN_ENGLISH",
      questionTarget: "La tienda abre a las diez y cierra a las nueve.",
      answerTiles: [
        "The",
        "shop",
        "opens",
        "at",
        "ten",
        "and",
        "closes",
        "at",
        "nine.",
      ],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    },
    {
      type: "FREE_WRITE_TARGET",
      questionEn: "Translate: It's a quarter past three.",
      acceptableAnswers: [
        "son las tres y cuarto",
      ],
    },
    {
      type: "SPEAK",
      questionEn: "Say: The film starts at eight.",
      targetText: "La película empieza a las ocho.",
    },
  ],
};

export const a2u3Indicaciones: Lesson = {
  title: "A2 · Pedir indicaciones",
  problems: [
    {
      type: "WRITE_IN_TARGET",
      questionEn: "Where is the metro station?",
      answerTiles: [
        "¿Dónde",
        "Cómo",
        "está",
        "es",
        "la",
        "estación",
        "de",
        "metro?",
      ],
      correctAnswer: [0, 2, 4, 5, 6, 7],
    },
    {
      type: "LISTEN",
      tts: "Sigue todo recto y luego gira a la derecha.",
      translationEn: "Go straight ahead and then turn right.",
      acceptableAnswers: [
        "sigue todo recto y luego gira a la derecha",
      ],
    },
    {
      type: "WRITE_IN_ENGLISH",
      questionTarget: "Está a cinco minutos andando.",
      answerTiles: ["It's", "five", "minutes", "on", "foot."],
      correctAnswer: [0, 1, 2, 3, 4],
    },
    {
      type: "FREE_WRITE_TARGET",
      questionEn: "Translate: It's far from here.",
      acceptableAnswers: ["está lejos de aquí"],
    },
    {
      type: "SPEAK",
      questionEn: "Say: Excuse me, where is the train station?",
      targetText: "Perdone, ¿dónde está la estación de tren?",
    },
  ],
};

export const a2u3Review: Lesson = {
  title: "A2 · Unit 3 review",
  problems: [
    {
      type: "FREE_WRITE_TARGET",
      questionEn: "Translate: I take the metro every morning.",
      acceptableAnswers: [
        "cojo el metro todas las mañanas",
        "tomo el metro todas las mañanas",
        "todas las mañanas cojo el metro",
      ],
      hint: "In Spain, 'coger' (to take) is everyday — not vulgar like in some Latin-American countries.",
    },
    {
      type: "LISTEN",
      tts: "Mi barrio es muy tranquilo por la noche.",
      translationEn: "My neighborhood is very quiet at night.",
      acceptableAnswers: ["mi barrio es muy tranquilo por la noche"],
    },
    {
      type: "SPEAK",
      questionEn: "Say: Turn left at the traffic light.",
      targetText: "Gira a la izquierda en el semáforo.",
    },
    {
      type: "WRITE_IN_ENGLISH",
      questionTarget: "Antes de ir al trabajo, paseo al perro.",
      answerTiles: [
        "Before",
        "going",
        "to",
        "work,",
        "I",
        "walk",
        "the",
        "dog.",
      ],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7],
    },
  ],
};

export const a2u4Tienda: Lesson = {
  title: "A2 · En la tienda",
  problems: [
    {
      type: "WRITE_IN_TARGET",
      questionEn: "Can I try this on?",
      answerTiles: [
        "¿Puedo",
        "probarme",
        "probar",
        "esto?",
        "estos?",
      ],
      correctAnswer: [0, 1, 3],
    },
    {
      type: "LISTEN",
      tts: "Lo siento, este modelo está agotado.",
      translationEn: "Sorry, this model is sold out.",
      acceptableAnswers: ["lo siento, este modelo está agotado", "lo siento este modelo está agotado"],
    },
    {
      type: "WRITE_IN_ENGLISH",
      questionTarget: "Quería devolver esto, no me funciona.",
      answerTiles: [
        "I'd",
        "like",
        "to",
        "return",
        "this,",
        "it",
        "doesn't",
        "work",
        "for",
        "me.",
      ],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    },
    {
      type: "FREE_WRITE_TARGET",
      questionEn: "Translate: Do you accept card?",
      acceptableAnswers: ["¿aceptan tarjeta?", "aceptan tarjeta", "¿se puede pagar con tarjeta?"],
    },
    {
      type: "SPEAK",
      questionEn: "Say: I'm just looking, thanks.",
      targetText: "Solo estoy mirando, gracias.",
    },
  ],
};

export const a2u4Ropa: Lesson = {
  title: "A2 · Ropa y tallas",
  problems: [
    {
      type: "WRITE_IN_TARGET",
      questionEn: "What size are you?",
      answerTiles: [
        "¿Qué",
        "Cómo",
        "talla",
        "tienes?",
        "usas?",
      ],
      correctAnswer: [0, 2, 4],
    },
    {
      type: "LISTEN",
      tts: "Esta camiseta me queda grande.",
      translationEn: "This T-shirt is too big on me.",
      acceptableAnswers: ["esta camiseta me queda grande"],
    },
    {
      type: "WRITE_IN_ENGLISH",
      questionTarget: "Te queda muy bien ese vestido.",
      answerTiles: [
        "That",
        "dress",
        "looks",
        "really",
        "good",
        "on",
        "you.",
      ],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6],
    },
    {
      type: "FREE_WRITE_TARGET",
      questionEn: "Translate: Do you have it in black?",
      acceptableAnswers: ["¿lo tienes en negro?", "lo tienes en negro", "¿lo tenéis en negro?"],
    },
    {
      type: "SPEAK",
      questionEn: "Say: I take a medium.",
      targetText: "Uso la talla mediana.",
    },
  ],
};

export const a2u4Hotel: Lesson = {
  title: "A2 · Reservar un hotel",
  problems: [
    {
      type: "WRITE_IN_TARGET",
      questionEn: "I'd like a double room for two nights.",
      answerTiles: [
        "Quería",
        "Quiero",
        "una",
        "habitación",
        "doble",
        "para",
        "dos",
        "noches.",
      ],
      correctAnswer: [0, 2, 3, 4, 5, 6, 7],
    },
    {
      type: "LISTEN",
      tts: "El desayuno está incluido en el precio.",
      translationEn: "Breakfast is included in the price.",
      acceptableAnswers: ["el desayuno está incluido en el precio"],
    },
    {
      type: "WRITE_IN_ENGLISH",
      questionTarget: "¿A qué hora es el check-out?",
      answerTiles: ["What", "time", "is", "check-out?"],
      correctAnswer: [0, 1, 2, 3],
    },
    {
      type: "FREE_WRITE_TARGET",
      questionEn: "Translate: Is there Wi-Fi in the room?",
      acceptableAnswers: [
        "¿hay wifi en la habitación?",
        "hay wifi en la habitación",
      ],
    },
    {
      type: "SPEAK",
      questionEn: "Say: Tell me your name, please.",
      targetText: "Dígame su nombre, por favor.",
    },
  ],
};

export const a2u4Verano: Lesson = {
  title: "A2 · El verano pasado (intro)",
  problems: [
    {
      type: "WRITE_IN_TARGET",
      questionEn: "Last summer I went to the beach.",
      answerTiles: [
        "El",
        "verano",
        "pasado",
        "fui",
        "voy",
        "a",
        "la",
        "playa.",
      ],
      correctAnswer: [0, 1, 2, 3, 5, 6, 7],
    },
    {
      type: "LISTEN",
      tts: "Visité Barcelona y me encantó.",
      translationEn: "I visited Barcelona and I loved it.",
      acceptableAnswers: ["visité barcelona y me encantó"],
    },
    {
      type: "WRITE_IN_ENGLISH",
      questionTarget: "Comimos en un restaurante muy bueno.",
      answerTiles: ["We", "ate", "at", "a", "very", "good", "restaurant."],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6],
    },
    {
      type: "FREE_WRITE_TARGET",
      questionEn: "Translate: I traveled with my husband.",
      acceptableAnswers: ["viajé con mi marido"],
    },
    {
      type: "SPEAK",
      questionEn: "Say: It rained a lot.",
      targetText: "Llovió mucho.",
    },
  ],
};

export const a2u4Review: Lesson = {
  title: "A2 · Unit 4 review",
  problems: [
    {
      type: "FREE_WRITE_TARGET",
      questionEn: "Translate: How much is this dress in size M?",
      acceptableAnswers: [
        "¿cuánto cuesta este vestido en talla mediana?",
        "cuánto cuesta este vestido en la talla m",
        "¿cuánto cuesta este vestido en la talla m?",
      ],
    },
    {
      type: "LISTEN",
      tts: "El año pasado pasé las vacaciones en Galicia.",
      translationEn: "Last year I spent my holidays in Galicia.",
      acceptableAnswers: ["el año pasado pasé las vacaciones en galicia"],
    },
    {
      type: "SPEAK",
      questionEn: "Say: I'd like to book a single room.",
      targetText: "Quería reservar una habitación individual.",
    },
    {
      type: "WRITE_IN_ENGLISH",
      questionTarget: "No me queda bien, ¿lo tienes en otra talla?",
      answerTiles: [
        "It",
        "doesn't",
        "fit",
        "me",
        "well,",
        "do",
        "you",
        "have",
        "it",
        "in",
        "another",
        "size?",
      ],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    },
  ],
};
