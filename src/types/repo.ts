// Define the expected type for the incoming data
export interface ExerciseSubmissionData {
  grade: string;
  exerciseId: number;
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

// Types for the API
export interface GetAnswersSuccessResponse {
  answers: Array<{
    id: number;
    userId: string;
    grade: string;
    createdAt: string;
  }>;
}

// Union type for POST API responses
export type PostApiResponse = SubmissionSuccess | SubmissionError;

// Union type for GET API responses
export type GetApiResponse = GetAnswersSuccessResponse | { ok: false; error: string };
