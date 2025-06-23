import type {
  GetAnswersSuccessResponse,
  ExerciseSubmissionData,
  SubmissionSuccess,
  SubmissionError,
  PostApiResponse,
  GetApiResponse,
} from "@types";

/**
 * Send exercise answer data to the API.
 * @param data The data of the exercise's answer.
 * @returns A promise with the API answer (succes or error).
 * @throws Throws an error if fail the fetch or the server answer with a state diferent than OK
 */
export const postExerciseAnswer = async (
  data: ExerciseSubmissionData,
): Promise<PostApiResponse> => {
  console.log("postExerciseAnswer: Sending data to API:", data);

  try {
    const response = await fetch("/api/answers.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    // --- Improved Error Handling ---
    // Check for non-OK responses and read the error body
    if (!response.ok) {
      let errorDetails = `Error ${response.status}: ${response.statusText}`;
      try {
        // Attempt to read the response body as JSON if it's a 400 error
        if (
          response.headers.get("content-type")?.includes("application/json")
        ) {
          const errorJson: SubmissionError = await response.json();
          errorDetails = `Error ${response.status}: ${JSON.stringify(errorJson, null, 2)}`;
          // Si la API devuelve un objeto de error estructurado, puedes retornarlo directamente
          if (errorJson.ok === false && errorJson.error) {
            console.error(
              "API responded with structured error:",
              errorJson.error,
            );
            throw new Error(`API Error: ${errorJson.error}`);
          }
        } else {
          // Otherwise, read as text
          const errorText = await response.text();
          errorDetails = `Error ${response.status}: ${errorText}`;
        }
      } catch (parseError) {
        console.error("Failed to parse error response body:", parseError);
        errorDetails += " (Failed to parse response body)";
      }

      console.error("Error calling API:", errorDetails);
      // Throw a generic error to be caught below
      throw new Error(`Server responded with status ${response.status}`);
    }

    // If response is OK (e.g., 201 Created)
    const responseData: SubmissionSuccess = await response.json();
    return responseData;
  } catch (error: any) {
    // Catch fetch errors or errors thrown above
    throw new Error(
      `Failed to send data to API: ${error.message || "Unknown error"}`,
    );
  }
};

/**
 * Fetches all answers for the authenticated user from the API (GET).
 * @returns A promise that resolves with an object containing the array of answers or an error object.
 * @throws Throws an error if the fetch call fails or the server responds with a non-OK non-JSON status.
 */
export const getAnswers = async (): Promise<GetApiResponse> => {
  console.log("getAnswers: Fetching data from API...");

  try {
    const response = await fetch("/api/answers.json", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    // --- Improved error handling for GET ---
    if (!response.ok) {
      let errorDetails = `Error ${response.status}: ${response.statusText}`;
      try {
        if (
          response.headers.get("content-type")?.includes("application/json")
        ) {
          // Assume GET errors can also be structured JSON
          const errorJson: SubmissionError = await response.json();
          errorDetails = `Error ${response.status}: ${JSON.stringify(errorJson, null, 2)}`;
          if (errorJson.ok === false && errorJson.error) {
            console.error(
              "API responded with structured error:",
              errorJson.error,
            );
            return errorJson; // Return the API error object
          }
        } else {
          const errorText = await response.text();
          errorDetails = `Error ${response.status}: ${errorText}`;
        }
      } catch (parseError) {
        console.error("Failed to parse error response body:", parseError);
        errorDetails += " (Failed to parse response body)";
      }

      console.error("Error calling GET API:", errorDetails);
      // Throw a generic error if a structured error object was not returned
      throw new Error(`Server responded with status ${response.status}`);
    }

    // If the response is OK (2xx status), read and return the body as JSON
    const data: GetAnswersSuccessResponse = await response.json();
    return data; // Return the object with the array of answers
  } catch (error: any) {
    // Catch network errors or errors thrown in the try block
    throw new Error(
      `Failed to fetch data from API: ${error.message || "Unknown error"}`,
    );
  }
};
