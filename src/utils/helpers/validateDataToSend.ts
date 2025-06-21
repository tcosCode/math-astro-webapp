export function validateDataToSend(
  target: HTMLButtonElement,
  dataContainer: HTMLDivElement,
  validation: string,
) {
  const grade = dataContainer.getAttribute("data-grade");
  const exerciseAttr = dataContainer.getAttribute("data-exercise") || "";
  const inciso = dataContainer.getAttribute("data-inciso");

  // --- Validation before sending ---
  if (!validation || !grade || !exerciseAttr || !inciso) {
    console.error("Error: Missing required data attributes.");
    return;
  }

  // --- Correct the exerciseId type ---
  const exerciseId = parseInt(exerciseAttr, 10); // Parse exercise ID as a number
  if (isNaN(exerciseId)) {
    console.error("Invalid exercise ID attribute:", exerciseAttr);
    return;
  }

  // Determine 'correct' status based on validation attribute
  const isCorrect = validation === "correct";

  // --- Prepare data for POST request ---
  return {
    grade: grade,
    exerciseId: exerciseId,
    correct: isCorrect,
    sectionId: inciso,
  };
}
