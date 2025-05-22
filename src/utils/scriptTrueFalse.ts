import { Notyf } from "notyf";
import "notyf/notyf.min.css";

import { validateTrueFalse } from "@utils/validateTrueFalse";
import { postExerciseAnswer } from "@utils/api";

/* Listener-wrap para cuando cargue la pagina*/
document.addEventListener("astro:page-load", () => {
  // Initialize Notyf for notifications
  const notyf = new Notyf({
    duration: 3000,
    position: { x: "right", y: "top" },
  });
  // Listener para todos los botones de opciones
  document.querySelectorAll(".option-btn").forEach((button) => {
    button.addEventListener("click", async (event) => {
      const target = event.currentTarget as HTMLButtonElement;
      const parent = target.parentElement as HTMLDivElement;
      if (!parent) return;
      const validation = target.getAttribute("data-validation");
      const grade = parent.getAttribute("data-grade");
      const exerciseAttr = parent.getAttribute("data-exercise") || "";
      const inciso = parent.getAttribute("data-inciso");

      // --- Validation before sending ---
      if (!validation || !grade || !exerciseAttr || !inciso) {
        console.error("Missing required data attributes on button or parent.");
        notyf.error("Se qrequieren todos los datos.");
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
        validateTrueFalse(validation, target);

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
            notyf.error("No se pudo enviar la respuesta.");
          }
        } catch (error) {
          console.error("Error sending data to API:", error);
          notyf.error("No se pudo enviar la respuesta.");
        }
      }
    });
  });
});
