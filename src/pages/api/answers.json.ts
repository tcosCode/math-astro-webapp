import type { APIRoute } from "astro";
import {
  getAllAnswers,
  handleExerciseSubmission,
} from "@repositories/answersRepo";

console.log("--- Request received at answers.json.ts ---");

// GET: Retrieve all answers
export const GET: APIRoute = async ({ locals }) => {
  const user = await locals.currentUser();

  // Ensure user is authenticated before proceeding
  if (!user) return new Response("Unauthorized", { status: 401 });

  try {
    const answers = await getAllAnswers(user.id);
    return new Response(JSON.stringify({ answers }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    console.error("Error fetching answers via API:", error);
    return new Response(
      JSON.stringify({
        ok: false,
        error: error.message || "Failed to fetch answers",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }
};

// POST: Handle incoming exercise submissions
export const POST: APIRoute = async ({ request, locals }) => {
  const user = await locals.currentUser();

  // Ensure user is authenticated before proceeding
  if (!user) return new Response("Unauthorized", { status: 401 });

  let submissionData;
  try {
    submissionData = await request.json();
  } catch (error) {
    // If the request body isn't valid JSON
    return new Response(
      JSON.stringify({ ok: false, error: "Invalid JSON body" }),
      { status: 400, headers: { "Content-Type": "application/json" } },
    );
  }

  try {
    // Call the repository function to handle validation and saving to DB
    // Pass the user object and the parsed data
    const result = await handleExerciseSubmission(user, submissionData);

    if (result.ok) {
      // If the repository function indicates success
      return new Response(JSON.stringify(result), {
        status: 201, // 201 Created is appropriate for saving a new submission
        headers: { "Content-Type": "application/json" },
      });
    } else {
      // If the repository function returned an error object (e.g., validation failed)
      // These are typically client-side issues, so 400 is appropriate
      return new Response(JSON.stringify(result), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }
  } catch (error: any) {
    // Catch any unexpected errors thrown by the repository function (less common if repo returns error objects)
    console.error("Unexpected error processing submission:", error);
    return new Response(
      JSON.stringify({
        ok: false,
        error: `Server error: ${error.message || "Unknown error"}`,
      }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }
};
