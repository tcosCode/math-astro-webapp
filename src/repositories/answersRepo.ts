//import types
import type {
  AuthUser,
  ExerciseSubmissionData,
  SubmissionSuccess,
  SubmissionError,
} from "@types";

// Import the database instance and the 'answers' table definition
import { db, answers, eq, and } from "astro:db";

// Function to handle the submission logic using Astro DB
export const handleExerciseSubmission = async (
  user: AuthUser,
  submissionData: ExerciseSubmissionData,
): Promise<SubmissionSuccess | SubmissionError> => {
  console.log("handleExerciseSubmission called");
  console.log("User ID:", user.id);
  console.log("Data received:", submissionData);

  // --- Validation Logic ---
  if (
    typeof submissionData.grade !== "string" ||
    typeof submissionData.exerciseId !== "number"
  ) {
    return {
      ok: false,
      error:
        "Invalid submission data format. Expected grade (string), exerciseId (number).",
    };
  }

  // --- Database Interaction using Astro DB ---

  // --- Check for existing answer ---
  try {
    const existingAnswer = await db
      .select()
      .from(answers)
      .where(
        and(
          eq(answers.userId, user.id),
          eq(answers.grade, submissionData.grade),
          eq(answers.exerciseId, submissionData.exerciseId),
        ),
      )
      .get(); // Usamos .get() para obtener solo un resultado

    if (existingAnswer) {
      console.log("Answer already exists for this exercise");
      return {
        ok: true,
        message: "Answer already exists, no action taken",
      };
    }

    // --- Insert new answer if none exists ---

    // Use db.insert and CHAIN .returning() to get the 'id' column back
    const result = await db
      .insert(answers)
      .values({
        userId: user.id, // Get userId from the authenticated user
        grade: submissionData.grade,
        exerciseId: submissionData.exerciseId,
        // createdAt will be set automatically by NOW default
      })
      .returning({
        // Use .returning() to specify the columns to return
        insertedId: answers.id, // Specify that you want the 'id' column, aliased as 'insertedId'
      });

    console.log("Astro DB Insert Result (with returning):", result);

    // When using .returning(), the result is an array of objects,
    // where each object has the columns you specified.
    // For a single insert, the inserted ID will be in the first element.
    const insertedId = result?.[0]?.insertedId;

    // --- Check if insertion was successful and ID was returned ---
    if (insertedId === undefined) {
      // This might happen if the insert failed in a way that didn't throw an error
      // or if the database adapter doesn't fully support returning() in this context
      console.warn("Insert successful but no insertedId returned.");
      return {
        ok: true,
        message: "Submission saved successfully, but ID not returned.",
      };
    }

    // If save is successful and ID was returned
    return {
      ok: true,
      message: "Submission saved successfully",
      insertedId: insertedId, // Include the inserted ID
    };
  } catch (dbError: any) {
    console.error("Astro DB save failed:", dbError);
    // Return a specific error if the database operation fails
    return {
      ok: false,
      error: `Database error: ${dbError.message || "Unknown error"}`,
    };
  }
};

// Keep or adapt your getAllAnswers function using the imported 'db' and 'answers'
export const getAllAnswers = async (userId?: string): Promise<any[]> => {
  console.log("getAllAnswers called for user:", userId);
  if (!userId) {
    console.warn("getAllAnswers called without a user ID");
    return []; // Or throw an error if user ID is required
  }
  try {
    // Example: Fetch answers from DB for the given user ID
    const userAnswers = await db
      .select()
      .from(answers)
      .where(eq(answers.userId, userId))
      .all();
    console.log("Fetched user answers:", userAnswers);
    return userAnswers;
  } catch (error: any) {
    console.error("Error fetching answers from DB:", error);
    // Decide how to handle fetch errors - return empty array or re-throw
    throw new Error(
      `Failed to fetch answers: ${error.message || "Unknown error"}`,
    );
  }
};
