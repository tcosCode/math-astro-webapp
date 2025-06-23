import {
  createProgressIndicator,
  updateProgress,
} from "@utils/scriptProgressIndicator";
import NotyfSingleton from "@utils/helpers/notyfInstance";

// Función para limpiar event listeners existentes
function cleanupEventListeners() {
  document.querySelectorAll(".button-problem").forEach((button) => {
    // Clonar el botón para remover todos los event listeners
    const newButton = button.cloneNode(true);
    button.parentNode?.replaceChild(newButton, button);
  });
}

// Función para inicializar los event listeners
function initializeEventListeners() {
  const notyf = NotyfSingleton.getInstance();

  document.querySelectorAll(".button-problem").forEach((button) => {
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

      // Agregar la clase para mostrar el icono
      dataContainer.classList.add("card-solved");

      // Cambiar el estado del botón
      target.textContent = "✓ Resuelto";
      target.disabled = true;
      target.style.opacity = "0.6";

      //TODO: GUARDAR EN LOCAL STORAGE

      // Actualizar progreso y verificar completado
      createProgressIndicator();
      setTimeout(updateProgress, 100);
    });
  });
}

// Event listener para astro:page-load
document.addEventListener("astro:page-load", () => {
  console.log("🔄 Página cargada - Inicializando scriptProblem");

  // Limpiar listeners existentes para evitar duplicados
  cleanupEventListeners();

  // Inicializar nuevos listeners
  initializeEventListeners();

  // Inicializar progreso con delay
  setTimeout(() => {
    createProgressIndicator();
    updateProgress();
  }, 100);
});

// Event listener para limpiar antes de cambiar de página
document.addEventListener("astro:before-preparation", () => {
  console.log("🧹 Limpiando antes de cambiar de página");
  cleanupEventListeners();
});
