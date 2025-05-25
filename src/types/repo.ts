// Define the expected type for the incoming data
export interface ExerciseSubmissionData {
  grade: string;
  exerciseId: number;
  sectionId: string; // (a, b, c, etc.)
  correct: boolean;
}

// Define a type for the user object you get from locals.currentUser()
export type AuthUser = { id: string };

export interface SubmissionSuccess {
  ok: true;
  message: string;
  insertedId?: number; // Keep this as we'll try to return the ID
}

export interface SubmissionError {
  ok: false;
  error: string;
}
