export type Language = (typeof languages)[number];

const languages = [
  {
    name: "Spanish (Spain)",
    nativeName: "Español de España",
    viewBox: "0 66 82 66",
    code: "es",
  },
] as const;

export default languages;
