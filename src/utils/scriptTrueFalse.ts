import NotyfSingleton from "@src/utils/helpers/notyfInstance";

import { retry } from "@utils/retryExercise";
import { validateAnswer } from "@utils/validateAnswer";
import {
  createProgressIndicator,
  updateProgress,
} from "@utils/scriptProgressIndicator";

/* Listener-wrap para cuando cargue la pagina*/
document.addEventListener("astro:page-load", () => {
  // Initialize Notyf for notifications
  const notyf = NotyfSingleton.getInstance();

  // Listener para todos los botones de opciones
  document.querySelectorAll(".option-btn").forEach((button) => {
    button.addEventListener("click", (event) => {
      const target = event.currentTarget as HTMLButtonElement;
      const dataContainer = target.closest(
        "[id^='grid-item']",
      ) as HTMLDivElement;

      if (!dataContainer) {
        notyf.error("Ha ocurrido un error: Refresca la página.");
        console.error("No se pudo encontrar el contenedor del ejercicio.");
        return;
      }

      // Verificar si ya está resuelto
      if (dataContainer.classList.contains("card-solved")) {
        notyf.error("Este ejercicio ya está resuelto");
        return;
      }

      const validation = target.getAttribute("data-validation");

      if (validation) {
        //TODO: SEND DATA TO LOCAL STORAGE
        validateAnswer(validation, target, dataContainer);
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

  // Inicializar al cargar la página
  setTimeout(() => {
    createProgressIndicator();
    updateProgress();
  }, 100);
});
