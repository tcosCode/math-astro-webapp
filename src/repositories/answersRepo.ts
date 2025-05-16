// Import the database instance and the 'answers' table definition
import { db, answers, eq } from "astro:db"; // Ensure 'eq' is imported if used in getAllAnswers

// Define the expected type for the incoming data
interface ExerciseSubmissionData {
  grade: string;
  exerciseId: number;
  sectionId: string; // (a, b, c, etc.)
  correct: boolean;
}

// Define a type for the user object you get from locals.currentUser()
interface AuthUser {
  id: string;
  // Add other user properties if your repository logic needs them
}

interface SubmissionSuccess {
  ok: true;
  message: string;
  insertedId?: number; // Keep this as we'll try to return the ID
}

interface SubmissionError {
  ok: false;
  error: string;
}

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
    typeof submissionData.exerciseId !== "number" ||
    typeof submissionData.sectionId !== "string" ||
    typeof submissionData.correct !== "boolean"
  ) {
    return {
      ok: false,
      error:
        "Invalid submission data format. Expected grade (string), exerciseId (number), sectionId(string), correct (boolean).",
    };
  }

  // --- Database Interaction using Astro DB ---
  try {
    // Use db.insert and CHAIN .returning() to get the 'id' column back
    const result = await db
      .insert(answers)
      .values({
        userId: user.id, // Get userId from the authenticated user
        grade: submissionData.grade,
        exerciseId: submissionData.exerciseId,
        sectionId: submissionData.sectionId,
        correct: submissionData.correct,
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
