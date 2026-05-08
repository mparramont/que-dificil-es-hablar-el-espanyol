export type Unit = {
  unitNumber: number;
  description: string;
  cefr: "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
  backgroundColor: `bg-${string}`;
  textColor: `text-${string}`;
  borderColor: `border-${string}`;
  tiles: Tile[];
};

export type Tile =
  | {
      type: "star" | "dumbbell" | "book" | "trophy" | "fast-forward";
      description: string;
    }
  | { type: "treasure" };

export type TileType = Tile["type"];

const a1Colors = {
  backgroundColor: "bg-[#7ee787]",
  textColor: "text-[#3aa64b]",
  borderColor: "border-[#3aa64b]",
} as const;

const a2Colors = {
  backgroundColor: "bg-[#3ec8ff]",
  textColor: "text-[#0a91c2]",
  borderColor: "border-[#0a91c2]",
} as const;

const b1Colors1 = {
  backgroundColor: "bg-[#58cc02]",
  textColor: "text-[#58cc02]",
  borderColor: "border-[#46a302]",
} as const;

const b1Colors2 = {
  backgroundColor: "bg-[#ce82ff]",
  textColor: "text-[#ce82ff]",
  borderColor: "border-[#a568cc]",
} as const;

const b1Colors3 = {
  backgroundColor: "bg-[#00cd9c]",
  textColor: "text-[#00cd9c]",
  borderColor: "border-[#00a47d]",
} as const;

const b2Colors = {
  backgroundColor: "bg-[#ff8c42]",
  textColor: "text-[#cc6f33]",
  borderColor: "border-[#cc6f33]",
} as const;

const c1Colors = {
  backgroundColor: "bg-[#ff5277]",
  textColor: "text-[#cc4060]",
  borderColor: "border-[#cc4060]",
} as const;

const c2Colors = {
  backgroundColor: "bg-[#a47ad6]",
  textColor: "text-[#7c5ba6]",
  borderColor: "border-[#7c5ba6]",
} as const;

export const units: readonly Unit[] = [
  {
    unitNumber: 1,
    cefr: "A1",
    description: "A1 · Hola y mucho gusto",
    ...a1Colors,
    tiles: [
      { type: "star", description: "Saludos básicos" },
      { type: "book", description: "Soy de…" },
      { type: "star", description: "Números y edad" },
      { type: "treasure" },
      { type: "book", description: "La familia" },
      { type: "trophy", description: "Unit 1 review" },
    ],
  },
  {
    unitNumber: 2,
    cefr: "A1",
    description: "A1 · En la cafetería",
    ...a1Colors,
    tiles: [
      { type: "star", description: "Pedir en un bar" },
      { type: "book", description: "La cuenta, por favor" },
      { type: "star", description: "Comida básica" },
      { type: "treasure" },
      { type: "book", description: "¿Cuánto cuesta?" },
      { type: "trophy", description: "Unit 2 review" },
    ],
  },
  {
    unitNumber: 3,
    cefr: "A2",
    description: "A2 · La rutina y el barrio",
    ...a2Colors,
    tiles: [
      { type: "fast-forward", description: "La rutina y el barrio" },
      { type: "star", description: "Mi rutina diaria" },
      { type: "book", description: "El barrio" },
      { type: "treasure" },
      { type: "book", description: "Hora y horarios" },
      { type: "star", description: "Pedir indicaciones" },
      { type: "trophy", description: "Unit 3 review" },
    ],
  },
  {
    unitNumber: 4,
    cefr: "A2",
    description: "A2 · De compras y de viaje",
    ...a2Colors,
    tiles: [
      { type: "fast-forward", description: "De compras y de viaje" },
      { type: "star", description: "En la tienda" },
      { type: "book", description: "Ropa y tallas" },
      { type: "treasure" },
      { type: "book", description: "Reservar un hotel" },
      { type: "star", description: "El verano pasado (intro)" },
      { type: "trophy", description: "Unit 4 review" },
    ],
  },
  {
    unitNumber: 5,
    cefr: "B1",
    description: "B1 · Cosas de cada día",
    ...b1Colors1,
    tiles: [
      { type: "fast-forward", description: "Cosas de cada día" },
      { type: "star", description: "Saludos y presentaciones" },
      { type: "book", description: "Por la mañana" },
      { type: "star", description: "En casa" },
      { type: "treasure" },
      { type: "book", description: "El finde" },
      { type: "trophy", description: "Unit 5 review" },
    ],
  },
  {
    unitNumber: 6,
    cefr: "B1",
    description: "B1 · Recuerdos y experiencias",
    ...b1Colors2,
    tiles: [
      { type: "fast-forward", description: "Recuerdos y experiencias" },
      { type: "dumbbell", description: "Personalized practice" },
      { type: "book", description: "Esta mañana (pretérito perfecto)" },
      { type: "treasure" },
      { type: "star", description: "El verano pasado" },
      { type: "book", description: "He estado en…" },
      { type: "star", description: "Una anécdota" },
      { type: "book", description: "El cumpleaños" },
      { type: "treasure" },
      { type: "dumbbell", description: "Personalized practice" },
      { type: "trophy", description: "Unit 6 review" },
    ],
  },
  {
    unitNumber: 7,
    cefr: "B1",
    description: "B1 · Opiniones y planes",
    ...b1Colors3,
    tiles: [
      { type: "fast-forward", description: "Opiniones y planes" },
      { type: "book", description: "¿Qué piensas?" },
      { type: "star", description: "Espero que… (subjuntivo)" },
      { type: "treasure" },
      { type: "book", description: "Si tuviera tiempo… (condicional)" },
      { type: "star", description: "Cuando viaje a España" },
      { type: "treasure" },
      { type: "dumbbell", description: "Personalized practice" },
      { type: "book", description: "Planes de futuro" },
      { type: "trophy", description: "Unit 7 review" },
    ],
  },
  {
    unitNumber: 8,
    cefr: "B2",
    description: "B2 · Argumentar y debatir",
    ...b2Colors,
    tiles: [
      { type: "fast-forward", description: "Argumentar y debatir" },
      { type: "book", description: "Defender una opinión" },
      { type: "star", description: "Aunque… (concesión)" },
      { type: "treasure" },
      { type: "book", description: "Discrepar con elegancia" },
      { type: "star", description: "Si lo hubiera sabido… (pluscuamp. subj.)" },
      { type: "trophy", description: "Unit 8 review" },
    ],
  },
  {
    unitNumber: 9,
    cefr: "B2",
    description: "B2 · Cultura y sociedad",
    ...b2Colors,
    tiles: [
      { type: "fast-forward", description: "Cultura y sociedad" },
      { type: "book", description: "Las regiones de España" },
      { type: "star", description: "Tradiciones y fiestas" },
      { type: "treasure" },
      { type: "book", description: "La sobremesa" },
      { type: "star", description: "Política y sociedad" },
      { type: "trophy", description: "Unit 9 review" },
    ],
  },
  {
    unitNumber: 10,
    cefr: "C1",
    description: "C1 · Matices y registro",
    ...c1Colors,
    tiles: [
      { type: "fast-forward", description: "Matices y registro" },
      { type: "book", description: "Registro formal vs. coloquial" },
      { type: "star", description: "Modismos y refranes" },
      { type: "treasure" },
      { type: "book", description: "Conectores avanzados" },
      { type: "star", description: "Ironía y humor" },
      { type: "trophy", description: "Unit 10 review" },
    ],
  },
  {
    unitNumber: 11,
    cefr: "C1",
    description: "C1 · El mundo del trabajo",
    ...c1Colors,
    tiles: [
      { type: "fast-forward", description: "El mundo del trabajo" },
      { type: "book", description: "Una entrevista de trabajo" },
      { type: "star", description: "Reuniones y correos" },
      { type: "treasure" },
      { type: "book", description: "Negociar y persuadir" },
      { type: "star", description: "Currículum y portfolio" },
      { type: "trophy", description: "Unit 11 review" },
    ],
  },
  {
    unitNumber: 12,
    cefr: "C2",
    description: "C2 · Registro elevado y debate",
    ...c2Colors,
    tiles: [
      { type: "fast-forward", description: "Registro elevado" },
      { type: "book", description: "Lengua literaria" },
      { type: "star", description: "Editoriales y opinión" },
      { type: "treasure" },
      { type: "book", description: "Discurso académico" },
      { type: "star", description: "Filosofar en español" },
      { type: "trophy", description: "Unit 12 review" },
    ],
  },
];
