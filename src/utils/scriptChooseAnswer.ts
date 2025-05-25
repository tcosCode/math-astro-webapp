import { Notyf } from "notyf";
import "notyf/notyf.min.css";
import notyfOptions from "@utils/helpers/notyfOptions";

import { validateAnswer } from "@utils/validateAnswer";
import { postExerciseAnswer } from "@utils/api";
import { retry } from "@utils/retryExercise";

/* Listener-wrap para cuando cargue la pagina*/
document.addEventListener("astro:page-load", () => {
  // Initialize Notyf for notifications
  const notyf = new Notyf(notyfOptions);
  // Listener para todos los botones de opciones
  document.querySelectorAll(".option-btn").forEach((button) => {
    button.addEventListener("click", async (event) => {
      const target = event.currentTarget as HTMLButtonElement;
      const dataContainer = target.closest("#grid-item") as HTMLDivElement;

      if (!dataContainer) {
        notyf.error("Error: No se pudo encontrar el contenedor del ejercicio.");
        return;
      }

      const validation = target.getAttribute("data-validation");
      const grade = dataContainer.getAttribute("data-grade");
      const exerciseAttr = dataContainer.getAttribute("data-exercise") || "";
      const inciso = dataContainer.getAttribute("data-inciso");

      // --- Validation before sending ---
      if (!validation || !grade || !exerciseAttr || !inciso) {
        notyf.error("Error: Missing required data attributes.");
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
      const submissionData = {
        grade: grade,
        exerciseId: exerciseId,
        correct: isCorrect,
        sectionId: inciso,
      };

      if (validation) {
        validateAnswer(validation, target);

        // --- Send data to the server ---
        try {
          const result = await postExerciseAnswer(submissionData);
          if (result.ok) {
            // Handle success (e.g., show a success message)
            console.log("Data sent successfully:", result);
            notyf.success("Respuesta enviada correctamente.");
          } else {
            // Handle error (e.g., show an error message)
            console.error("Error from API:", result.error);
            notyf.error("Error: No se pudo enviar la respuesta.");
          }
        } catch (error) {
          console.error("Error sending data to API:", error);
          notyf.error("Error: No se pudo enviar la respuesta.");
        }
      }
    });
  });

  // Listener para todos los Botones de Retry
  document.querySelectorAll("#retryButton").forEach((button) => {
    button.addEventListener("click", (event) => {
      const target = event.currentTarget as HTMLButtonElement;
      retry(target);
    });
  });
});
