import type { StateCreator } from "zustand";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { GoalXpSlice } from "~/stores/createGoalXpStore";
import { createGoalXpSlice } from "~/stores/createGoalXpStore";
import type { LanguageSlice } from "~/stores/createLanguageStore";
import { createLanguageSlice } from "~/stores/createLanguageStore";
import type { LessonSlice } from "~/stores/createLessonStore";
import { createLessonSlice } from "~/stores/createLessonStore";
import type { LingotSlice } from "~/stores/createLingotStore";
import { createLingotSlice } from "~/stores/createLingotStore";
import type { SoundSettingsSlice } from "~/stores/createSoundSettingsStore";
import { createSoundSettingsSlice } from "~/stores/createSoundSettingsStore";
import type { StreakSlice } from "~/stores/createStreakStore";
import { createStreakSlice } from "~/stores/createStreakStore";
import type { UserSlice } from "~/stores/createUserStore";
import { createUserSlice } from "~/stores/createUserStore";
import type { XpSlice } from "~/stores/createXpStore";
import { createXpSlice } from "~/stores/createXpStore";

type BoundState = GoalXpSlice &
  LanguageSlice &
  LessonSlice &
  LingotSlice &
  SoundSettingsSlice &
  StreakSlice &
  UserSlice &
  XpSlice;

export type BoundStateCreator<SliceState> = StateCreator<
  BoundState,
  [],
  [],
  SliceState
>;

export const useBoundStore = create<BoundState>()(
  persist(
    (...args) => ({
      ...createGoalXpSlice(...args),
      ...createLanguageSlice(...args),
      ...createLessonSlice(...args),
      ...createLingotSlice(...args),
      ...createSoundSettingsSlice(...args),
      ...createStreakSlice(...args),
      ...createUserSlice(...args),
      ...createXpSlice(...args),
    }),
    {
      name: "que-dificil-store",
      storage: createJSONStorage(() => {
        if (typeof window === "undefined") {
          return {
            getItem: () => null,
            setItem: () => undefined,
            removeItem: () => undefined,
          };
        }
        return window.localStorage;
      }),
      // Persist only progress and choices, not function references.
      partialize: (state) => ({
        activeCourseId: state.activeCourseId,
        lessonsCompleted: state.lessonsCompleted,
        xpByDate: state.xpByDate,
        streak: state.streak,
        activeDays: Array.from(state.activeDays),
        lingots: state.lingots,
        goalXp: state.goalXp,
        soundEffects: state.soundEffects,
        speakingExercises: state.speakingExercises,
        listeningExercises: state.listeningExercises,
      }),
      // Don't auto-rehydrate during SSG render — _app.tsx triggers it after mount
      // so React's first paint matches the SSG markup (no hydration mismatch).
      skipHydration: true,
      // activeDays is a Set — re-hydrate from array.
      merge: (persisted, current) => {
        const p = (persisted ?? {}) as Partial<BoundState> & {
          activeDays?: readonly string[] | Set<string>;
        };
        const activeDaysRaw = p.activeDays;
        const activeDays = Array.isArray(activeDaysRaw)
          ? (new Set(activeDaysRaw) as BoundState["activeDays"])
          : activeDaysRaw instanceof Set
            ? (activeDaysRaw as BoundState["activeDays"])
            : current.activeDays;
        return { ...current, ...(p as Partial<BoundState>), activeDays };
      },
    },
  ),
);
