import type { CoursePlacement } from "../types";

const levels = ["A1", "A2", "B1", "B2", "C1", "C2"] as const;

export const spanishSpainPlacement: CoursePlacement = {
  levels,
  levelToStartUnit: {
    A1: 1,
    A2: 3,
    B1: 5,
    B2: 8,
    C1: 10,
    C2: 12,
  },
  questions: [
    {
      level: "A1",
      question: "Hola, ¿cómo te ___?",
      context: "— Me llamo Lin.",
      options: ["llamas", "llamo", "llama", "llaman"],
      correct: 0,
    },
    {
      level: "A1",
      question: "Soy ___ China.",
      options: ["en", "a", "de", "por"],
      correct: 2,
    },
    {
      level: "A2",
      question: "Todas las mañanas ___ a las siete.",
      options: ["me levanto", "me levantó", "se levantó", "te levantas"],
      correct: 0,
    },
    {
      level: "A2",
      question: "El verano pasado ___ a Galicia.",
      options: ["voy", "fui", "iba", "iré"],
      correct: 1,
    },
    {
      level: "B1",
      question: "Hoy ___ al médico, no he podido ir antes.",
      context: "Spain Spanish: 'today' actions use the present perfect.",
      options: ["fui", "iba", "he ido", "voy"],
      correct: 2,
    },
    {
      level: "B1",
      question: "Espero que ___ tiempo este finde.",
      options: ["tienes", "tengas", "tendrás", "tenías"],
      correct: 1,
    },
    {
      level: "B2",
      question: "Aunque ___, voy a salir igualmente.",
      options: ["llueve", "llueva", "llovía", "lloviera"],
      correct: 1,
    },
    {
      level: "B2",
      question: "Si lo ___, te habría llamado.",
      options: ["sé", "sabía", "hubiera sabido", "supe"],
      correct: 2,
    },
    {
      level: "C1",
      question:
        "El informe pone de ___ una tendencia preocupante en el sector.",
      options: ["manifiesto", "manifestar", "manifiesta", "manifestación"],
      correct: 0,
    },
    {
      level: "C1",
      question: "A buenas horas, ___ verdes.",
      context: "Idiom: 'too little, too late'.",
      options: ["botas", "mangas", "hojas", "ramas"],
      correct: 1,
    },
    {
      level: "C2",
      question:
        "No es de extrañar que el debate ___ tintes encendidos en los últimos días.",
      options: ["ha tomado", "haya tomado", "tomara", "toma"],
      correct: 1,
    },
    {
      level: "C2",
      question:
        "Conviene matizar que los datos no son ___ a otras poblaciones.",
      options: [
        "extrapolables",
        "extrapolados",
        "extrapolaciones",
        "extrapolando",
      ],
      correct: 0,
    },
  ],
};
