import { courses } from "~/courses/registry";
import type { BoundStateCreator } from "~/hooks/useBoundStore";

export type LessonSlice = {
  lessonsCompleted: number;
  increaseLessonsCompleted: (by?: number) => void;
  jumpToUnit: (unitNumber: number) => void;
};

export const createLessonSlice: BoundStateCreator<LessonSlice> = (set) => ({
  lessonsCompleted: 0,
  increaseLessonsCompleted: (by = 1) =>
    set(({ lessonsCompleted }) => ({
      lessonsCompleted: lessonsCompleted + by,
    })),
  jumpToUnit: (unitNumber: number) =>
    set((state) => {
      const lessonsPerTile = 4;
      const units = courses[state.activeCourseId].units;
      const totalLessonsToJumpToUnit = units
        .filter((unit) => unit.unitNumber < unitNumber)
        .map((unit) => unit.tiles.length * lessonsPerTile)
        .reduce((a, b) => a + b, 0);
      return {
        lessonsCompleted: Math.max(
          state.lessonsCompleted,
          totalLessonsToJumpToUnit,
        ),
      };
    }),
});
