import { topics } from "@src/data/index.js";

const [grade7mo, grade8vo, grade9no, grade10mo, grade11no, grade12mo] = topics;

export function getTotalGradeExercises(grade) {
  const totalEx = grade.reduce(
    (total, currentGrade) => total + currentGrade.exercises.length,
    0,
  );
  return totalEx;
}

export const totalExercises = getTotalGradeExercises(topics);
