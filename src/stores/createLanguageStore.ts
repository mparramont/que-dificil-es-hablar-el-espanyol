import languages, { type Language } from "~/utils/languages";
import type { BoundStateCreator } from "~/hooks/useBoundStore";
import type { CourseId } from "~/courses/types";

export type LanguageSlice = {
  language: Language;
  setLanguage: (newLanguage: Language) => void;
  activeCourseId: CourseId;
  setActiveCourseId: (id: CourseId) => void;
};

export const createLanguageSlice: BoundStateCreator<LanguageSlice> = (set) => ({
  language: languages[0],
  setLanguage: (newLanguage: Language) => set({ language: newLanguage }),
  activeCourseId: "spanishSpain",
  setActiveCourseId: (id: CourseId) => set({ activeCourseId: id }),
});
