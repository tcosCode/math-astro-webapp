export type Exercise =
  | ExerciseChooseAnswer
  | ExerciseTrueFalse
  | ExerciseProblem
  | ExerciseMatching
  | ExerciseFillBlank;

// Define the props for each exercise type
interface ExercisePropsBase {
  inciso: string;
  exerciseText: string;
}

export interface ChooseAnswerProps extends ExercisePropsBase {
  answer: Array<Answer>;
}

export interface ProblemProps extends ExercisePropsBase {
  answer: string;
}

export interface TrueFalseProps extends ExercisePropsBase {
  validation: "true" | "false";
}

export interface FillBlankProps {
  inciso: string;
  sentence: Array<string>;
  options: Array<Options>; // Options for fill-in-the-blank exercises
}

// Define the structure of options for fill-in-the-blank exercises
interface Options {
  id: string;
  text: string;
  position: string;
}

export interface MatchingProps {
  text: string;
  pairId: number;
  length: number;
}

// Define the structure of an answer for exercises
export interface Answer {
  text: string;
  validation: "correct" | "incorrect";
}

// Define the structure of each exercise type
interface ExerciseBase {
  id: string;
  type: string;
  title: string;
  img?: string; // Optional image for the exercise
  texto: string; // Text description of the exercise
}

interface ExerciseChooseAnswer extends ExerciseBase {
  incisos?: Array<{
    id: string;
    exercise: string;
    answer: Array<Answer>; // <- Array of answers for the exercise
  }>;
}

interface ExerciseTrueFalse extends ExerciseBase {
  incisos?: Array<{
    id: string;
    exercise: string;
    validation: "correct" | "incorrect";
  }>;
}

interface ExerciseProblem extends ExerciseBase {
  incisos?: Array<{
    id: string;
    exercise: string;
    answer: string;
  }>;
}

interface ExerciseMatching extends ExerciseBase {
  incisos?: Array<{
    text: string;
    pairId: number;
  }>;
}

interface ExerciseFillBlank extends ExerciseBase {
  incisos: Array<{
    id: string;
    sentence: Array<string>;
    options: Array<{
      id: string;
      text: string;
      position: string;
    }>;
  }>;
}
