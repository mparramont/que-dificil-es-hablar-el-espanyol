import type { CourseContent, Lesson, Problem } from "./types";
import {
  a1u1Saludos,
  a1u1SoyDe,
  a1u1Numeros,
  a1u1Familia,
  a1u1Review,
  a1u2Pedir,
  a1u2Cuenta,
  a1u2Comida,
  a1u2Cuanto,
  a1u2Review,
} from "./levels/a1";
import {
  a2u3Rutina,
  a2u3Barrio,
  a2u3Hora,
  a2u3Indicaciones,
  a2u3Review,
  a2u4Tienda,
  a2u4Ropa,
  a2u4Hotel,
  a2u4Verano,
  a2u4Review,
} from "./levels/a2";
import {
  b2u8Defender,
  b2u8Aunque,
  b2u8Discrepar,
  b2u8Pluscuamp,
  b2u8Review,
  b2u9Regiones,
  b2u9Tradiciones,
  b2u9Sobremesa,
  b2u9Politica,
  b2u9Review,
} from "./levels/b2";
import {
  c1u10Registro,
  c1u10Modismos,
  c1u10Conectores,
  c1u10Ironia,
  c1u10Review,
  c1u11Entrevista,
  c1u11Reuniones,
  c1u11Negociar,
  c1u11Curriculum,
  c1u11Review,
} from "./levels/c1";
import {
  c2u12Literaria,
  c2u12Editorial,
  c2u12Academico,
  c2u12Filosofar,
  c2u12Review,
} from "./levels/c2";

const u1t0: Lesson = {
  title: "Saludos y presentaciones",
  problems: [
    {
      type: "WRITE_IN_ENGLISH",
      questionEs: "¿Qué tal, tío? ¿Cómo estás?",
      answerTiles: ["What's", "up,", "dude?", "How", "are", "you?"],
      correctAnswer: [0, 1, 2, 3, 4, 5],
    },
    {
      type: "WRITE_IN_SPANISH",
      questionEn: "Where are you (you all) from?",
      answerTiles: ["¿De", "dónde", "sois", "están", "vosotros?"],
      correctAnswer: [0, 1, 2, 4],
    },
    {
      type: "LISTEN",
      tts: "Encantado de conoceros.",
      translationEn: "Nice to meet you all.",
      acceptableAnswers: ["encantado de conoceros", "encantada de conoceros"],
    },
    {
      type: "SPEAK",
      questionEn: "Say: I'm from Malaysia, but I live in Spain.",
      targetEs: "Soy de Malasia, pero vivo en España.",
    },
    {
      type: "FREE_WRITE_ES",
      questionEn: "Translate: I have been here for two years.",
      acceptableAnswers: [
        "llevo aquí dos años",
        "llevo dos años aquí",
        "he estado aquí dos años",
      ],
      hint: 'Iberian Spanish often prefers "llevar + time + gerund/place".',
    },
    {
      type: "WRITE_IN_ENGLISH",
      questionEs: "Os presento a mi mujer, se llama Lin.",
      answerTiles: ["Let", "me", "introduce", "my", "wife,", "her", "name", "is", "Lin."],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    },
  ],
};

const u1t1: Lesson = {
  title: "Por la mañana",
  problems: [
    {
      type: "WRITE_IN_SPANISH",
      questionEn: "I get up early every day.",
      answerTiles: ["Me", "levanto", "pronto", "tarde", "todos", "los", "días."],
      correctAnswer: [0, 1, 2, 4, 5, 6],
    },
    {
      type: "LISTEN",
      tts: "He desayunado tostadas con tomate.",
      translationEn: "I have had toast with tomato for breakfast.",
      acceptableAnswers: ["he desayunado tostadas con tomate"],
    },
    {
      type: "WRITE_IN_ENGLISH",
      questionEs: "Mi mujer se ducha antes que yo.",
      answerTiles: ["My", "wife", "showers", "before", "I", "do."],
      correctAnswer: [0, 1, 2, 3, 4, 5],
    },
    {
      type: "SPEAK",
      questionEn: "Say: I brush my teeth after breakfast.",
      targetEs: "Me cepillo los dientes después de desayunar.",
    },
    {
      type: "FREE_WRITE_ES",
      questionEn: "Translate: We wake up at seven.",
      acceptableAnswers: [
        "nos despertamos a las siete",
        "nos despertamos a las 7",
      ],
    },
    {
      type: "WRITE_IN_SPANISH",
      questionEn: "I get dressed quickly.",
      answerTiles: ["Me", "visto", "rápido", "rápidamente", "muy"],
      correctAnswer: [0, 1, 2],
    },
  ],
};

const u1t2: Lesson = {
  title: "En casa",
  problems: [
    {
      type: "WRITE_IN_SPANISH",
      questionEn: "The remote is on the fridge.",
      answerTiles: ["El", "mando", "está", "encima", "de", "la", "nevera.", "mesa."],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6],
    },
    {
      type: "FREE_WRITE_ES",
      questionEn: "Translate: I have lost my keys.",
      acceptableAnswers: ["he perdido las llaves", "he perdido mis llaves"],
      hint: "Use the present perfect (he + participle) — very common in Spain.",
    },
    {
      type: "LISTEN",
      tts: "El ordenador no funciona, está roto.",
      translationEn: "The computer doesn't work, it's broken.",
      acceptableAnswers: [
        "el ordenador no funciona está roto",
        "el ordenador no funciona, está roto",
      ],
    },
    {
      type: "WRITE_IN_ENGLISH",
      questionEs: "He dejado el móvil en el coche.",
      answerTiles: ["I", "have", "left", "my", "mobile", "in", "the", "car."],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7],
    },
    {
      type: "SPEAK",
      questionEn: "Say: My flat is small but cosy.",
      targetEs: "Mi piso es pequeño pero acogedor.",
    },
    {
      type: "FREE_WRITE_ES",
      questionEn: "Translate: There is no hot water.",
      acceptableAnswers: ["no hay agua caliente"],
    },
  ],
};

const u1t4: Lesson = {
  title: "El finde",
  problems: [
    {
      type: "WRITE_IN_ENGLISH",
      questionEs: "He quedado con unos amigos el sábado.",
      answerTiles: [
        "I'm",
        "meeting",
        "up",
        "with",
        "some",
        "friends",
        "on",
        "Saturday.",
      ],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7],
    },
    {
      type: "FREE_WRITE_ES",
      questionEn: "Translate: This is so cool!",
      acceptableAnswers: [
        "esto mola mucho",
        "esto mola un montón",
        "qué guay",
        "qué guay!",
        "esto es genial",
      ],
      hint: '"Molar" and "guay" are everyday Spain slang for "cool".',
    },
    {
      type: "LISTEN",
      tts: "El finde voy a ir a la sierra con mi pareja.",
      translationEn: "On the weekend I'm going to the mountains with my partner.",
      acceptableAnswers: [
        "el finde voy a ir a la sierra con mi pareja",
      ],
    },
    {
      type: "WRITE_IN_SPANISH",
      questionEn: "OK, see you tomorrow!",
      answerTiles: ["Vale,", "Hasta", "mañana!", "luego!", "Adiós,"],
      correctAnswer: [0, 1, 2],
    },
    {
      type: "SPEAK",
      questionEn: "Say: We're meeting at the square at eight.",
      targetEs: "Hemos quedado en la plaza a las ocho.",
    },
  ],
};

const u1t5: Lesson = {
  title: "Unit 1 review",
  problems: [
    {
      type: "FREE_WRITE_ES",
      questionEn: "Translate: How are you all?",
      acceptableAnswers: ["¿qué tal estáis?", "qué tal estáis", "¿cómo estáis?", "cómo estáis"],
    },
    {
      type: "LISTEN",
      tts: "Hoy he ido al super y he comprado fruta.",
      translationEn: "Today I went to the supermarket and bought fruit.",
      acceptableAnswers: [
        "hoy he ido al super y he comprado fruta",
        "hoy he ido al supermercado y he comprado fruta",
      ],
    },
    {
      type: "SPEAK",
      questionEn: "Say: I have lost my mobile.",
      targetEs: "He perdido el móvil.",
    },
    {
      type: "WRITE_IN_ENGLISH",
      questionEs: "Vale, nos vemos en el bar a las nueve.",
      answerTiles: ["OK,", "see", "you", "at", "the", "bar", "at", "nine."],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7],
    },
    {
      type: "FREE_WRITE_ES",
      questionEn: "Translate: I get up at seven every day.",
      acceptableAnswers: [
        "me levanto a las siete todos los días",
        "todos los días me levanto a las siete",
      ],
    },
  ],
};

const u2t2: Lesson = {
  title: "Esta mañana (pretérito perfecto)",
  problems: [
    {
      type: "WRITE_IN_ENGLISH",
      questionEs: "Hoy he visto a María en el trabajo.",
      answerTiles: ["Today", "I", "saw", "María", "at", "work."],
      correctAnswer: [0, 1, 2, 3, 4, 5],
    },
    {
      type: "FREE_WRITE_ES",
      questionEn: "Translate: This week we have been to the beach.",
      acceptableAnswers: [
        "esta semana hemos ido a la playa",
        "esta semana hemos estado en la playa",
      ],
      hint: "Spain Spanish uses present perfect for events within today/this week.",
    },
    {
      type: "LISTEN",
      tts: "Esta mañana he desayunado con mi madre.",
      translationEn: "This morning I had breakfast with my mum.",
      acceptableAnswers: ["esta mañana he desayunado con mi madre"],
    },
    {
      type: "WRITE_IN_SPANISH",
      questionEn: "I have eaten too much today.",
      answerTiles: ["He", "comido", "demasiado", "comí", "hoy.", "ayer."],
      correctAnswer: [0, 1, 2, 4],
    },
    {
      type: "SPEAK",
      questionEn: "Say: Today has been a great day.",
      targetEs: "Hoy ha sido un día genial.",
    },
  ],
};

const u2t4: Lesson = {
  title: "El verano pasado",
  problems: [
    {
      type: "WRITE_IN_ENGLISH",
      questionEs: "El verano pasado viajé a Galicia con mi familia.",
      answerTiles: [
        "Last",
        "summer",
        "I",
        "travelled",
        "to",
        "Galicia",
        "with",
        "my",
        "family.",
      ],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    },
    {
      type: "FREE_WRITE_ES",
      questionEn: "Translate: We ate paella in Valencia.",
      acceptableAnswers: ["comimos paella en valencia"],
    },
    {
      type: "LISTEN",
      tts: "Cuando era pequeño, vivía en Sevilla.",
      translationEn: "When I was little, I lived in Seville.",
      acceptableAnswers: [
        "cuando era pequeño vivía en sevilla",
        "cuando era pequeña vivía en sevilla",
        "cuando era pequeño, vivía en sevilla",
      ],
    },
    {
      type: "WRITE_IN_SPANISH",
      questionEn: "I went to bed late.",
      answerTiles: ["Me", "acosté", "tarde.", "acuesto", "pronto."],
      correctAnswer: [0, 1, 2],
    },
    {
      type: "SPEAK",
      questionEn: "Say: We arrived at the beach at dawn.",
      targetEs: "Llegamos a la playa al amanecer.",
    },
  ],
};

const u2t5: Lesson = {
  title: "He estado en…",
  problems: [
    {
      type: "WRITE_IN_SPANISH",
      questionEn: "I have been to Barcelona twice.",
      answerTiles: ["He", "estado", "en", "Barcelona", "dos", "veces.", "una", "vez."],
      correctAnswer: [0, 1, 2, 3, 4, 5],
    },
    {
      type: "FREE_WRITE_ES",
      questionEn: "Translate: Have you all ever been to Madrid?",
      acceptableAnswers: [
        "¿habéis estado alguna vez en madrid?",
        "habéis estado alguna vez en madrid",
        "¿alguna vez habéis estado en madrid?",
        "alguna vez habéis estado en madrid",
      ],
    },
    {
      type: "LISTEN",
      tts: "Nunca he probado el pulpo.",
      translationEn: "I have never tried octopus.",
      acceptableAnswers: ["nunca he probado el pulpo"],
    },
    {
      type: "WRITE_IN_ENGLISH",
      questionEs: "Mi marido nunca ha estado en Asia.",
      answerTiles: ["My", "husband", "has", "never", "been", "to", "Asia."],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6],
    },
    {
      type: "SPEAK",
      questionEn: "Say: I have visited Granada three times.",
      targetEs: "He visitado Granada tres veces.",
    },
  ],
};

const u2t6: Lesson = {
  title: "Una anécdota",
  problems: [
    {
      type: "FREE_WRITE_ES",
      questionEn: "Translate: Once when I was ten years old…",
      acceptableAnswers: [
        "una vez cuando tenía diez años",
        "una vez, cuando tenía diez años",
      ],
      hint: "Imperfect for background (tenía), preterit for the event.",
    },
    {
      type: "WRITE_IN_ENGLISH",
      questionEs: "Estaba lloviendo y de repente vi a mi amiga.",
      answerTiles: [
        "It",
        "was",
        "raining",
        "and",
        "suddenly",
        "I",
        "saw",
        "my",
        "friend.",
      ],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    },
    {
      type: "LISTEN",
      tts: "Aquel día perdí el tren y llegué tarde.",
      translationEn: "That day I missed the train and arrived late.",
      acceptableAnswers: [
        "aquel día perdí el tren y llegué tarde",
      ],
    },
    {
      type: "SPEAK",
      questionEn: "Say: I didn't know what to do.",
      targetEs: "No sabía qué hacer.",
    },
    {
      type: "WRITE_IN_SPANISH",
      questionEn: "We were at the bar when she called.",
      answerTiles: [
        "Estábamos",
        "en",
        "el",
        "bar",
        "cuando",
        "ella",
        "llamó.",
        "llama.",
      ],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6],
    },
  ],
};

const u2t7: Lesson = {
  title: "El cumpleaños",
  problems: [
    {
      type: "WRITE_IN_ENGLISH",
      questionEs: "El día de mi cumple lo pasé genial.",
      answerTiles: ["I", "had", "a", "great", "time", "on", "my", "birthday."],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7],
    },
    {
      type: "FREE_WRITE_ES",
      questionEn: "Translate: They sang me happy birthday.",
      acceptableAnswers: [
        "me cantaron cumpleaños feliz",
        "me cantaron feliz cumpleaños",
      ],
    },
    {
      type: "LISTEN",
      tts: "Mi madre me regaló un libro precioso.",
      translationEn: "My mum gave me a beautiful book.",
      acceptableAnswers: ["mi madre me regaló un libro precioso"],
    },
    {
      type: "SPEAK",
      questionEn: "Say: We had cake and we danced.",
      targetEs: "Comimos tarta y bailamos.",
    },
    {
      type: "WRITE_IN_SPANISH",
      questionEn: "I turned thirty this year.",
      answerTiles: ["He", "cumplido", "treinta", "años", "este", "año.", "ayer."],
      correctAnswer: [0, 1, 2, 3, 4, 5],
    },
  ],
};

const u2t10: Lesson = {
  title: "Unit 2 review",
  problems: [
    {
      type: "FREE_WRITE_ES",
      questionEn: "Translate: This morning I have been to the doctor.",
      acceptableAnswers: [
        "esta mañana he ido al médico",
        "esta mañana he estado en el médico",
      ],
    },
    {
      type: "LISTEN",
      tts: "El año pasado fuimos a Italia y nos encantó.",
      translationEn: "Last year we went to Italy and we loved it.",
      acceptableAnswers: ["el año pasado fuimos a italia y nos encantó"],
    },
    {
      type: "SPEAK",
      questionEn: "Say: I have never tried this dish.",
      targetEs: "Nunca he probado este plato.",
    },
    {
      type: "WRITE_IN_ENGLISH",
      questionEs: "Cuando era niña, jugaba en el patio.",
      answerTiles: ["When", "I", "was", "a", "kid,", "I", "played", "in", "the", "yard."],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    },
    {
      type: "WRITE_IN_SPANISH",
      questionEn: "We have already eaten today.",
      answerTiles: ["Ya", "hemos", "comido", "hoy.", "ayer.", "comemos"],
      correctAnswer: [0, 1, 2, 3],
    },
  ],
};

const u3t1: Lesson = {
  title: "¿Qué piensas?",
  problems: [
    {
      type: "WRITE_IN_ENGLISH",
      questionEs: "Me parece que es una buena idea.",
      answerTiles: ["I", "think", "(it", "seems)", "it's", "a", "good", "idea."],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7],
    },
    {
      type: "FREE_WRITE_ES",
      questionEn: "Translate: I don't think it's a good idea.",
      acceptableAnswers: [
        "no creo que sea buena idea",
        "no creo que sea una buena idea",
        "no me parece buena idea",
      ],
      hint: '"No creo que" triggers the subjunctive (sea).',
    },
    {
      type: "LISTEN",
      tts: "En mi opinión, deberíamos viajar más.",
      translationEn: "In my opinion, we should travel more.",
      acceptableAnswers: ["en mi opinión, deberíamos viajar más", "en mi opinión deberíamos viajar más"],
    },
    {
      type: "SPEAK",
      questionEn: "Say: I think Spain is wonderful.",
      targetEs: "Creo que España es maravillosa.",
    },
    {
      type: "WRITE_IN_SPANISH",
      questionEn: "What do you think about it?",
      answerTiles: ["¿Qué", "piensas", "opinas", "sobre", "eso?", "esto?"],
      correctAnswer: [0, 1, 3, 4],
    },
  ],
};

const u3t2: Lesson = {
  title: "Espero que… (subjuntivo)",
  problems: [
    {
      type: "WRITE_IN_SPANISH",
      questionEn: "I hope you (sg.) come tomorrow.",
      answerTiles: ["Espero", "que", "vengas", "vienes", "mañana.", "ayer."],
      correctAnswer: [0, 1, 2, 4],
    },
    {
      type: "FREE_WRITE_ES",
      questionEn: "Translate: I want him to listen.",
      acceptableAnswers: ["quiero que escuche", "quiero que él escuche"],
      hint: "Verbs of will (querer) take subjunctive when subjects differ.",
    },
    {
      type: "LISTEN",
      tts: "Es importante que estudies cada día.",
      translationEn: "It's important that you study every day.",
      acceptableAnswers: ["es importante que estudies cada día", "es importante que estudies todos los días"],
    },
    {
      type: "WRITE_IN_ENGLISH",
      questionEs: "Ojalá llueva mañana.",
      answerTiles: ["I", "hope", "it", "rains", "tomorrow."],
      correctAnswer: [0, 1, 2, 3, 4],
    },
    {
      type: "SPEAK",
      questionEn: "Say: I hope you all have a good time.",
      targetEs: "Espero que lo paséis bien.",
    },
  ],
};

const u3t4: Lesson = {
  title: "Si tuviera tiempo… (condicional)",
  problems: [
    {
      type: "FREE_WRITE_ES",
      questionEn: "Translate: If I had time, I would travel more.",
      acceptableAnswers: [
        "si tuviera tiempo, viajaría más",
        "si tuviera tiempo viajaría más",
        "si tuviese tiempo, viajaría más",
        "si tuviese tiempo viajaría más",
      ],
    },
    {
      type: "WRITE_IN_SPANISH",
      questionEn: "If I were rich, I would buy a house in Madrid.",
      answerTiles: [
        "Si",
        "fuera",
        "rico,",
        "compraría",
        "una",
        "casa",
        "en",
        "Madrid.",
        "compro",
      ],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7],
    },
    {
      type: "LISTEN",
      tts: "Yo, en tu lugar, hablaría con él.",
      translationEn: "If I were you, I would talk to him.",
      acceptableAnswers: [
        "yo en tu lugar hablaría con él",
        "yo, en tu lugar, hablaría con él",
      ],
    },
    {
      type: "WRITE_IN_ENGLISH",
      questionEs: "Si pudiera, viviría en la playa.",
      answerTiles: ["If", "I", "could,", "I", "would", "live", "at", "the", "beach."],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    },
    {
      type: "SPEAK",
      questionEn: "Say: I would like a coffee, please.",
      targetEs: "Me gustaría un café, por favor.",
    },
  ],
};

const u3t5: Lesson = {
  title: "Cuando viaje a España",
  problems: [
    {
      type: "WRITE_IN_SPANISH",
      questionEn: "When I go to Spain, I will visit Granada.",
      answerTiles: [
        "Cuando",
        "viaje",
        "viajo",
        "a",
        "España,",
        "visitaré",
        "Granada.",
      ],
      correctAnswer: [0, 1, 3, 4, 5, 6],
    },
    {
      type: "FREE_WRITE_ES",
      questionEn: "Translate: When you (sg.) arrive, call me.",
      acceptableAnswers: [
        "cuando llegues, llámame",
        "cuando llegues llámame",
      ],
      hint: '"Cuando" + future event uses subjunctive.',
    },
    {
      type: "LISTEN",
      tts: "En cuanto termine el trabajo, te llamo.",
      translationEn: "As soon as I finish work, I'll call you.",
      acceptableAnswers: [
        "en cuanto termine el trabajo te llamo",
        "en cuanto termine el trabajo, te llamo",
      ],
    },
    {
      type: "SPEAK",
      questionEn: "Say: When I have time, I will study more.",
      targetEs: "Cuando tenga tiempo, estudiaré más.",
    },
    {
      type: "WRITE_IN_ENGLISH",
      questionEs: "Hasta que no llueva, no podemos ir al campo.",
      answerTiles: ["Until", "it", "rains,", "we", "can't", "go", "to", "the", "countryside."],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    },
  ],
};

const u3t8: Lesson = {
  title: "Planes de futuro",
  problems: [
    {
      type: "WRITE_IN_SPANISH",
      questionEn: "Next year I'm going to study Spanish.",
      answerTiles: [
        "El",
        "año",
        "que",
        "viene",
        "voy",
        "a",
        "estudiar",
        "español.",
        "estudio",
      ],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7],
    },
    {
      type: "FREE_WRITE_ES",
      questionEn: "Translate: I'm planning to move to Spain.",
      acceptableAnswers: [
        "tengo pensado mudarme a españa",
        "pienso mudarme a españa",
        "planeo mudarme a españa",
      ],
    },
    {
      type: "LISTEN",
      tts: "El sábado vamos a quedar con amigos.",
      translationEn: "On Saturday we're going to meet up with friends.",
      acceptableAnswers: ["el sábado vamos a quedar con amigos"],
    },
    {
      type: "SPEAK",
      questionEn: "Say: We'll see each other tomorrow.",
      targetEs: "Nos vemos mañana.",
    },
    {
      type: "WRITE_IN_ENGLISH",
      questionEs: "Algún día compraré una casa en la sierra.",
      answerTiles: ["Some", "day", "I'll", "buy", "a", "house", "in", "the", "mountains."],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    },
  ],
};

const u3t9: Lesson = {
  title: "Unit 3 review",
  problems: [
    {
      type: "FREE_WRITE_ES",
      questionEn: "Translate: I hope you (sg.) come to the party.",
      acceptableAnswers: [
        "espero que vengas a la fiesta",
      ],
    },
    {
      type: "LISTEN",
      tts: "Si tuviera más tiempo, aprendería chino.",
      translationEn: "If I had more time, I would learn Chinese.",
      acceptableAnswers: [
        "si tuviera más tiempo, aprendería chino",
        "si tuviera más tiempo aprendería chino",
      ],
    },
    {
      type: "WRITE_IN_SPANISH",
      questionEn: "When I see her, I'll tell her.",
      answerTiles: ["Cuando", "la", "vea,", "veo,", "se", "lo", "diré.", "digo."],
      correctAnswer: [0, 1, 2, 4, 5, 6],
    },
    {
      type: "SPEAK",
      questionEn: "Say: I'm thinking about visiting Madrid this summer.",
      targetEs: "Estoy pensando en visitar Madrid este verano.",
    },
    {
      type: "WRITE_IN_ENGLISH",
      questionEs: "No creo que sea tan difícil hablar español.",
      answerTiles: ["I", "don't", "think", "it's", "so", "hard", "to", "speak", "Spanish."],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    },
  ],
};

const defaultPractice: Lesson = {
  title: "Personalized practice",
  problems: [
    {
      type: "FREE_WRITE_ES",
      questionEn: "Translate: I have already eaten.",
      acceptableAnswers: ["ya he comido"],
    },
    {
      type: "LISTEN",
      tts: "Esta tarde voy a salir con mi pareja.",
      translationEn: "This afternoon I'm going out with my partner.",
      acceptableAnswers: ["esta tarde voy a salir con mi pareja"],
    },
    {
      type: "SPEAK",
      questionEn: "Say: How are you all doing?",
      targetEs: "¿Qué tal estáis?",
    },
    {
      type: "WRITE_IN_ENGLISH",
      questionEs: "He perdido el móvil otra vez.",
      answerTiles: ["I've", "lost", "my", "phone", "again."],
      correctAnswer: [0, 1, 2, 3, 4],
    },
    {
      type: "WRITE_IN_SPANISH",
      questionEn: "OK, see you later.",
      answerTiles: ["Vale,", "Hasta", "luego.", "mañana.", "Adiós,"],
      correctAnswer: [0, 1, 2],
    },
  ],
};

export const defaultLesson: Lesson = defaultPractice;

export const courseContent: CourseContent = {
  1: {
    0: a1u1Saludos,
    1: a1u1SoyDe,
    2: a1u1Numeros,
    4: a1u1Familia,
    5: a1u1Review,
  },
  2: {
    0: a1u2Pedir,
    1: a1u2Cuenta,
    2: a1u2Comida,
    4: a1u2Cuanto,
    5: a1u2Review,
  },
  3: {
    0: a2u3Rutina, // fast-forward
    1: a2u3Rutina,
    2: a2u3Barrio,
    4: a2u3Hora,
    5: a2u3Indicaciones,
    6: a2u3Review,
  },
  4: {
    0: a2u4Tienda,
    1: a2u4Tienda,
    2: a2u4Ropa,
    4: a2u4Hotel,
    5: a2u4Verano,
    6: a2u4Review,
  },
  5: {
    0: u1t0, // fast-forward — uses lesson content for the test
    1: u1t0,
    2: u1t1,
    3: u1t2,
    5: u1t4,
    6: u1t5,
  },
  6: {
    0: u2t2, // fast-forward
    1: defaultPractice,
    2: u2t2,
    4: u2t4,
    5: u2t5,
    6: u2t6,
    7: u2t7,
    9: defaultPractice,
    10: u2t10,
  },
  7: {
    0: u3t1,
    1: u3t1,
    2: u3t2,
    4: u3t4,
    5: u3t5,
    7: defaultPractice,
    8: u3t8,
    9: u3t9,
  },
  8: {
    0: b2u8Defender,
    1: b2u8Defender,
    2: b2u8Aunque,
    4: b2u8Discrepar,
    5: b2u8Pluscuamp,
    6: b2u8Review,
  },
  9: {
    0: b2u9Regiones,
    1: b2u9Regiones,
    2: b2u9Tradiciones,
    4: b2u9Sobremesa,
    5: b2u9Politica,
    6: b2u9Review,
  },
  10: {
    0: c1u10Registro,
    1: c1u10Registro,
    2: c1u10Modismos,
    4: c1u10Conectores,
    5: c1u10Ironia,
    6: c1u10Review,
  },
  11: {
    0: c1u11Entrevista,
    1: c1u11Entrevista,
    2: c1u11Reuniones,
    4: c1u11Negociar,
    5: c1u11Curriculum,
    6: c1u11Review,
  },
  12: {
    0: c2u12Literaria,
    1: c2u12Literaria,
    2: c2u12Editorial,
    4: c2u12Academico,
    5: c2u12Filosofar,
    6: c2u12Review,
  },
};

export function getLesson(unit: number, tile: number): Lesson {
  return courseContent[unit]?.[tile] ?? defaultLesson;
}

export type { Problem, Lesson };
