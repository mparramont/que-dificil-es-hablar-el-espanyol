import { useBoundStore } from "~/hooks/useBoundStore";
import type { Course, CourseId, Lesson } from "./types";
import { spanishSpainCourse } from "./spanishSpain";
import { malayMandarinCourse } from "./malayMandarin";

export const courses: Record<CourseId, Course> = {
  spanishSpain: spanishSpainCourse,
  malayMandarin: malayMandarinCourse,
};

export const courseList: readonly Course[] = [
  spanishSpainCourse,
  malayMandarinCourse,
];

export function getCourse(id: CourseId): Course {
  return courses[id];
}

export function useActiveCourse(): Course {
  const id = useBoundStore((s) => s.activeCourseId);
  return courses[id];
}

export function useActiveLesson(unit: number, tile: number): Lesson {
  const course = useActiveCourse();
  return course.content[unit]?.[tile] ?? course.defaultLesson;
}
