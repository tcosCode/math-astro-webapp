import { topics } from "@src/data/index.js";

/**
 * Calcula el número total de ejercicios en un conjunto de grados.
 *
 * @param grades - Arreglo de objetos que representan un grado o nivel,
 * donde cada objeto posee una propiedad "exercises" (un arreglo de ejercicios).
 * @returns El número total de ejercicios en todos los grados.
 */
export function getTotalExercises(grades: typeof topics) {
  const totalExercises = grades.reduce(
    (total, grade) => total + grade.exercises.length,
    0,
  );
  return totalExercises;
}

export const totalExercises = getTotalExercises(topics);
