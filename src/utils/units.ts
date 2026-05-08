export type Unit = {
  unitNumber: number;
  description: string;
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

export const units: readonly Unit[] = [
  {
    unitNumber: 1,
    description: "Cosas de cada día — daily life in Spain",
    backgroundColor: "bg-[#58cc02]",
    textColor: "text-[#58cc02]",
    borderColor: "border-[#46a302]",
    tiles: [
      { type: "star", description: "Saludos y presentaciones" },
      { type: "book", description: "Por la mañana" },
      { type: "star", description: "En casa" },
      { type: "treasure" },
      { type: "book", description: "El finde" },
      { type: "trophy", description: "Unit 1 review" },
    ],
  },
  {
    unitNumber: 2,
    description: "Recuerdos y experiencias — talking about the past",
    backgroundColor: "bg-[#ce82ff]",
    textColor: "text-[#ce82ff]",
    borderColor: "border-[#a568cc]",
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
      { type: "trophy", description: "Unit 2 review" },
    ],
  },
  {
    unitNumber: 3,
    description: "Opiniones y planes — opinions, hopes, plans",
    backgroundColor: "bg-[#00cd9c]",
    textColor: "text-[#00cd9c]",
    borderColor: "border-[#00a47d]",
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
      { type: "trophy", description: "Unit 3 review" },
    ],
  },
];
