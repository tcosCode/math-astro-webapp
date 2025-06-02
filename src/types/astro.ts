// Astro-related types - Diferentes contextos de parámetros
export interface GradeExerciseParams {
  grade: GradeOnlyParams;
  exercise: string;
}

export interface GradeOnlyParams {
  grade: string;
}

export interface VideoParams {
  idVideo: string;
}
