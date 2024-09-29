import { validateAnswer } from "@utils/validateAnswer";
import { retry } from "@utils/retryExercise";

/* Listener-wrap para cuando cargue la pagina*/
document.addEventListener("astro:page-load", () => {
  // Listener para todos los botones de opciones
  document.querySelectorAll(".option-btn").forEach((button) => {
    button.addEventListener("click", (event) => {
      const target = event.currentTarget as HTMLButtonElement;
      const validation = target.getAttribute("data-validation");

      if (validation) {
        validateAnswer(validation, target);
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
