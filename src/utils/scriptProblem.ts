import { Notyf } from "notyf";
import "notyf/notyf.min.css";
import notyfOptions from "@utils/helpers/notyfOptions";

import {
  createProgressIndicator,
  updateProgress,
} from "@utils/scriptProgressIndicator";

document.addEventListener("astro:page-load", () => {
  // Initialize Notyf for notifications
  const notyf = new Notyf(notyfOptions);

  document.querySelectorAll(".button-problem").forEach((button) => {
    button.addEventListener("click", (event) => {
      const target = event.currentTarget as HTMLButtonElement;
      const dataContainer = target.closest("[id^='grid-item']") as HTMLDivElement;

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

      // Agregar la clase para mostrar el icono
      dataContainer.classList.add("card-solved");

      // Cambiar el estado del botón
      target.textContent = "✓ Resuelto";
      target.disabled = true;
      target.style.opacity = "0.6";

      // Actualizar progreso y verificar completado
      createProgressIndicator();
      setTimeout(updateProgress, 100); // Pequeño delay para que se actualice el DOM
    });
  });

  // Inicializar al cargar la página
  setTimeout(() => {
    createProgressIndicator();
    updateProgress();
  }, 100);
});
