import type { Lesson } from "../types";

export const c1u10Registro: Lesson = {
  title: "C1 · Registro formal vs. coloquial",
  problems: [
    {
      type: "WRITE_IN_ENGLISH",
      questionEs: "Le ruego que disculpe las molestias ocasionadas.",
      answerTiles: [
        "I",
        "kindly",
        "ask",
        "you",
        "to",
        "excuse",
        "the",
        "inconvenience",
        "caused.",
      ],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    },
    {
      type: "FREE_WRITE_ES",
      questionEn:
        "Translate (informal): Sorry for the hassle, mate.",
      acceptableAnswers: [
        "perdona el lío, tío",
        "perdona el follón, tío",
        "perdona las molestias, tío",
      ],
      hint: "C1: shift register to colloquial Madrid Spanish.",
    },
    {
      type: "LISTEN",
      tts: "En atención a su solicitud, le informamos de lo siguiente.",
      translationEn: "In response to your request, we inform you of the following.",
      acceptableAnswers: [
        "en atención a su solicitud, le informamos de lo siguiente",
        "en atención a su solicitud le informamos de lo siguiente",
      ],
    },
    {
      type: "WRITE_IN_SPANISH",
      questionEn: "(Formal) Could you please tell me your name?",
      answerTiles: [
        "¿Podría",
        "Puedes",
        "decirme",
        "su",
        "tu",
        "nombre,",
        "por",
        "favor?",
      ],
      correctAnswer: [0, 2, 3, 5, 6, 7],
    },
    {
      type: "SPEAK",
      questionEn: "(Informal) Say: Look, the thing is, I'm fed up.",
      targetEs: "Mira, es que estoy hasta las narices.",
    },
  ],
};

export const c1u10Modismos: Lesson = {
  title: "C1 · Modismos y refranes",
  problems: [
    {
      type: "WRITE_IN_ENGLISH",
      questionEs: "A buenas horas, mangas verdes.",
      answerTiles: ["Too", "little,", "too", "late."],
      correctAnswer: [0, 1, 2, 3],
    },
    {
      type: "FREE_WRITE_ES",
      questionEn: "Translate (idiomatic): It's better late than never.",
      acceptableAnswers: [
        "más vale tarde que nunca",
      ],
    },
    {
      type: "LISTEN",
      tts: "No tienes pelos en la lengua.",
      translationEn: "You don't mince your words.",
      acceptableAnswers: ["no tienes pelos en la lengua"],
    },
    {
      type: "WRITE_IN_SPANISH",
      questionEn: "She has a lot of nerve. (idiom)",
      answerTiles: ["Tiene", "Hace", "mucha", "cara,", "valor,", "dura."],
      correctAnswer: [0, 2, 3],
      // 'tener mucha cara' = to have a lot of nerve
    },
    {
      type: "SPEAK",
      questionEn: "Say (idiom): It cost an arm and a leg.",
      targetEs: "Costó un ojo de la cara.",
    },
  ],
};

export const c1u10Conectores: Lesson = {
  title: "C1 · Conectores avanzados",
  problems: [
    {
      type: "WRITE_IN_ENGLISH",
      questionEs:
        "No obstante, conviene matizar algunos puntos antes de concluir.",
      answerTiles: [
        "Nevertheless,",
        "it's",
        "advisable",
        "to",
        "qualify",
        "some",
        "points",
        "before",
        "concluding.",
      ],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    },
    {
      type: "FREE_WRITE_ES",
      questionEn: "Translate: Therefore, we cannot accept the proposal.",
      acceptableAnswers: [
        "por consiguiente, no podemos aceptar la propuesta",
        "por tanto, no podemos aceptar la propuesta",
        "por lo tanto, no podemos aceptar la propuesta",
      ],
    },
    {
      type: "LISTEN",
      tts: "Cabe señalar que los datos no son concluyentes.",
      translationEn: "It is worth noting that the data is not conclusive.",
      acceptableAnswers: ["cabe señalar que los datos no son concluyentes"],
    },
    {
      type: "WRITE_IN_SPANISH",
      questionEn: "On the other hand, we should consider the alternatives.",
      answerTiles: [
        "Por",
        "otra",
        "otro",
        "parte,",
        "lado,",
        "deberíamos",
        "considerar",
        "las",
        "alternativas.",
      ],
      correctAnswer: [0, 1, 3, 5, 6, 7, 8],
    },
    {
      type: "SPEAK",
      questionEn: "Say: To put it briefly, the result is not satisfactory.",
      targetEs: "En resumidas cuentas, el resultado no es satisfactorio.",
    },
  ],
};

export const c1u10Ironia: Lesson = {
  title: "C1 · Ironía y humor",
  problems: [
    {
      type: "WRITE_IN_ENGLISH",
      questionEs:
        "¡Qué bien, otra reunión más! Justo lo que necesitaba un lunes.",
      answerTiles: [
        "Great,",
        "another",
        "meeting!",
        "Just",
        "what",
        "I",
        "needed",
        "on",
        "a",
        "Monday.",
      ],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    },
    {
      type: "FREE_WRITE_ES",
      questionEn: "Translate (sarcastic): Oh sure, that's just brilliant.",
      acceptableAnswers: [
        "sí, claro, qué bien",
        "ah sí, qué maravilla",
        "vamos, qué maravilla",
      ],
    },
    {
      type: "LISTEN",
      tts: "Lo dices muy en serio, ¿no?",
      translationEn: "You're saying that very seriously, aren't you?",
      acceptableAnswers: ["lo dices muy en serio, ¿no?", "lo dices muy en serio no"],
    },
    {
      type: "WRITE_IN_SPANISH",
      questionEn: "Yeah right, like that's going to happen.",
      answerTiles: [
        "Sí,",
        "claro,",
        "como",
        "si",
        "eso",
        "fuera",
        "fue",
        "a",
        "pasar.",
      ],
      correctAnswer: [0, 1, 2, 3, 4, 5, 7, 8],
    },
    {
      type: "SPEAK",
      questionEn: "Say (with irony): Of course, you're always right.",
      targetEs: "Por supuesto, tú siempre tienes razón.",
    },
  ],
};

export const c1u10Review: Lesson = {
  title: "C1 · Unit 10 review",
  problems: [
    {
      type: "FREE_WRITE_ES",
      questionEn:
        "Translate: That said, there are nuances we shouldn't ignore.",
      acceptableAnswers: [
        "dicho esto, hay matices que no deberíamos ignorar",
        "dicho esto hay matices que no deberíamos ignorar",
      ],
    },
    {
      type: "LISTEN",
      tts: "Eso es harina de otro costal.",
      translationEn: "That's a different matter altogether.",
      acceptableAnswers: ["eso es harina de otro costal"],
    },
    {
      type: "SPEAK",
      questionEn: "Say (formal): I would appreciate a prompt response.",
      targetEs: "Le agradecería una respuesta a la mayor brevedad.",
    },
    {
      type: "WRITE_IN_ENGLISH",
      questionEs: "Estoy hasta el gorro de tantas excusas.",
      answerTiles: [
        "I'm",
        "fed",
        "up",
        "with",
        "so",
        "many",
        "excuses.",
      ],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6],
    },
  ],
};

export const c1u11Entrevista: Lesson = {
  title: "C1 · Una entrevista de trabajo",
  problems: [
    {
      type: "WRITE_IN_ENGLISH",
      questionEs:
        "Cuénteme un poco sobre su trayectoria profesional, por favor.",
      answerTiles: [
        "Tell",
        "me",
        "a",
        "bit",
        "about",
        "your",
        "professional",
        "background,",
        "please.",
      ],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    },
    {
      type: "FREE_WRITE_ES",
      questionEn:
        "Translate: My greatest strength is my ability to work in a team.",
      acceptableAnswers: [
        "mi mayor fortaleza es mi capacidad para trabajar en equipo",
        "mi mayor fortaleza es la capacidad de trabajar en equipo",
      ],
    },
    {
      type: "LISTEN",
      tts: "¿Por qué le interesa este puesto en concreto?",
      translationEn: "Why are you interested in this particular position?",
      acceptableAnswers: [
        "¿por qué le interesa este puesto en concreto?",
        "por qué le interesa este puesto en concreto",
      ],
    },
    {
      type: "WRITE_IN_SPANISH",
      questionEn: "I'm looking for a new challenge.",
      answerTiles: [
        "Estoy",
        "buscando",
        "busco",
        "un",
        "nuevo",
        "reto.",
        "desafío.",
      ],
      correctAnswer: [0, 1, 3, 4, 5],
    },
    {
      type: "SPEAK",
      questionEn: "Say: Thank you for the opportunity.",
      targetEs: "Le agradezco la oportunidad.",
    },
  ],
};

export const c1u11Reuniones: Lesson = {
  title: "C1 · Reuniones y correos",
  problems: [
    {
      type: "WRITE_IN_ENGLISH",
      questionEs:
        "Adjunto le envío el informe que me solicitó la semana pasada.",
      answerTiles: [
        "Attached,",
        "I'm",
        "sending",
        "you",
        "the",
        "report",
        "you",
        "requested",
        "last",
        "week.",
      ],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    },
    {
      type: "FREE_WRITE_ES",
      questionEn: "Translate: Looking forward to your reply, kind regards.",
      acceptableAnswers: [
        "a la espera de su respuesta, un cordial saludo",
        "a la espera de su respuesta un cordial saludo",
        "quedo a la espera de su respuesta. un cordial saludo",
      ],
    },
    {
      type: "LISTEN",
      tts: "Conviene dejar este punto para la próxima reunión.",
      translationEn: "We should leave this point for the next meeting.",
      acceptableAnswers: [
        "conviene dejar este punto para la próxima reunión",
      ],
    },
    {
      type: "WRITE_IN_SPANISH",
      questionEn: "Could we postpone the meeting until tomorrow?",
      answerTiles: [
        "¿Podríamos",
        "Pueden",
        "aplazar",
        "posponer",
        "la",
        "reunión",
        "hasta",
        "mañana?",
      ],
      correctAnswer: [0, 2, 4, 5, 6, 7],
    },
    {
      type: "SPEAK",
      questionEn: "Say: I think we should reach a consensus.",
      targetEs: "Creo que deberíamos llegar a un consenso.",
    },
  ],
};

export const c1u11Negociar: Lesson = {
  title: "C1 · Negociar y persuadir",
  problems: [
    {
      type: "WRITE_IN_ENGLISH",
      questionEs:
        "Si nos hicieran una rebaja, podríamos cerrar el acuerdo hoy mismo.",
      answerTiles: [
        "If",
        "you",
        "gave",
        "us",
        "a",
        "discount,",
        "we",
        "could",
        "close",
        "the",
        "deal",
        "today.",
      ],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    },
    {
      type: "FREE_WRITE_ES",
      questionEn: "Translate: We are open to a counterproposal.",
      acceptableAnswers: [
        "estamos abiertos a una contrapropuesta",
        "estamos abiertos a recibir una contrapropuesta",
      ],
    },
    {
      type: "LISTEN",
      tts: "Permítame hacerle una contraoferta.",
      translationEn: "Allow me to make you a counteroffer.",
      acceptableAnswers: ["permítame hacerle una contraoferta"],
    },
    {
      type: "WRITE_IN_SPANISH",
      questionEn: "I think we can find a middle ground.",
      answerTiles: [
        "Creo",
        "que",
        "podemos",
        "encontrar",
        "un",
        "punto",
        "intermedio.",
        "medio.",
      ],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6],
    },
    {
      type: "SPEAK",
      questionEn: "Say: That's our best offer.",
      targetEs: "Esa es nuestra mejor oferta.",
    },
  ],
};

export const c1u11Curriculum: Lesson = {
  title: "C1 · Currículum y portfolio",
  problems: [
    {
      type: "WRITE_IN_ENGLISH",
      questionEs: "Llevo cinco años desarrollando software en el sector financiero.",
      answerTiles: [
        "I've",
        "been",
        "developing",
        "software",
        "in",
        "the",
        "financial",
        "sector",
        "for",
        "five",
        "years.",
      ],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    {
      type: "FREE_WRITE_ES",
      questionEn:
        "Translate: I have a master's degree in computer engineering.",
      acceptableAnswers: [
        "tengo un máster en ingeniería informática",
      ],
    },
    {
      type: "LISTEN",
      tts: "Mi portfolio está disponible en mi página web personal.",
      translationEn: "My portfolio is available on my personal website.",
      acceptableAnswers: [
        "mi portfolio está disponible en mi página web personal",
      ],
    },
    {
      type: "WRITE_IN_SPANISH",
      questionEn: "I'm fluent in English and conversational in Spanish.",
      answerTiles: [
        "Hablo",
        "inglés",
        "con",
        "fluidez",
        "y",
        "tengo",
        "un",
        "nivel",
        "de",
        "español",
        "conversacional.",
      ],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    {
      type: "SPEAK",
      questionEn: "Say: My biggest project was a payment platform.",
      targetEs: "Mi proyecto más grande fue una plataforma de pagos.",
    },
  ],
};

export const c1u11Review: Lesson = {
  title: "C1 · Unit 11 review",
  problems: [
    {
      type: "FREE_WRITE_ES",
      questionEn:
        "Translate: I would like to schedule a call this week to discuss it.",
      acceptableAnswers: [
        "me gustaría agendar una llamada esta semana para tratarlo",
        "me gustaría programar una llamada esta semana para tratarlo",
        "me gustaría concertar una llamada esta semana para tratarlo",
      ],
    },
    {
      type: "LISTEN",
      tts: "Quedamos a la espera de sus comentarios al respecto.",
      translationEn: "We remain awaiting your comments on the matter.",
      acceptableAnswers: ["quedamos a la espera de sus comentarios al respecto"],
    },
    {
      type: "SPEAK",
      questionEn: "Say: I'd be open to discussing terms.",
      targetEs: "Estaría abierto a discutir las condiciones.",
    },
    {
      type: "WRITE_IN_ENGLISH",
      questionEs: "Le envío adjunto el contrato firmado.",
      answerTiles: [
        "I'm",
        "sending",
        "you",
        "the",
        "signed",
        "contract",
        "attached.",
      ],
      correctAnswer: [0, 1, 2, 3, 4, 5, 6],
    },
  ],
};
