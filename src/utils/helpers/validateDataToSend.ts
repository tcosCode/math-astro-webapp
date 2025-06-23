export function validateDataToSend(
  exercise: string,
  grade: string,
  //inciso?:string,
  //local?: boolean,
) {
  // --- Validation before sending ---
  if (!grade || !exercise) {
    console.error("Error: Missing required data attributes.");
    return;
  }

  // --- Correct the exerciseId type ---
  const exerciseId = parseInt(exercise, 10); // Parse exercise ID as a number
  if (isNaN(exerciseId)) {
    console.error("Invalid exercise ID attribute:", exercise);
    return;
  }

  // --- Prepare data for POST request ---
  return {
    grade: grade,
    exerciseId: exerciseId,
    //sectionId: inciso
  };
}
