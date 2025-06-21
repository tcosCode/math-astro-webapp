import { Notyf } from "notyf";
import "notyf/notyf.min.css";
import notyfOptions from "@utils/helpers/notyfOptions";

import { showGameOverMessage } from "@utils/gameOverModal";

document.addEventListener("astro:page-load", () => {
  // Initialize Notyf for notifications
  const notyf = new Notyf(notyfOptions);

  document.querySelectorAll(".button-problem").forEach((button) => {
    button.addEventListener("click", (event) => {
      const target = event.currentTarget as HTMLButtonElement;
      const dataContainer = target.closest("#grid-item") as HTMLDivElement;

      if (!dataContainer) {
        notyf.error("Ha ocurrido un error: Refresca la página.");
        console.error("No se pudo encontrar el contenedor del ejercicio.");
        return;
      }

      // Agregar la clase para mostrar el icono
      dataContainer.classList.add("card-solved");

      // Cambiar el estado del botón
      target.textContent = "✓ Resuelto";
      target.disabled = true;
      target.style.opacity = "0.6";
    });
  });
});
