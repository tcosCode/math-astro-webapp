// Astro-related types - Diferentes contextos de parámetros
export interface GradeExerciseParams {
  grade: GradeOnlyParams;
  exercise: string;
}

export interface GradeOnlyParams {
  grade: "7mo" | "8vo" | "9no" | "10mo" | "11no" | "12mo";
}

export interface VideoParams {
  idVideo: string;
}
