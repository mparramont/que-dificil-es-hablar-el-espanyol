import languages, { type Language } from "~/utils/languages";
import type { BoundStateCreator } from "~/hooks/useBoundStore";

export type LanguageSlice = {
  language: Language;
  setLanguage: (newLanguage: Language) => void;
};

export const createLanguageSlice: BoundStateCreator<LanguageSlice> = (set) => ({
  language: languages[0],
  setLanguage: (newLanguage: Language) => set({ language: newLanguage }),
});
