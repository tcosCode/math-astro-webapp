// Variables globales del modal
let modal: HTMLElement | null = null;
let modalContent: HTMLElement | null = null;
let playAgainBtn: HTMLElement | null = null;
let closeModalBtn: HTMLElement | null = null;
let isModalOpen = false;

// Función para inicializar el modal
function initializeModal(): void {
  // Obtener elementos del DOM
  modal = document.getElementById("game-over-modal");
  modalContent = modal?.querySelector(".modal-content") as HTMLElement;
  playAgainBtn = document.getElementById("play-again-btn");
  closeModalBtn = document.getElementById("close-modal-btn");

  if (!modal) {
    console.error('Modal con id "game-over-modal" no encontrado');
    return;
  }

  // Agregar event listeners
  setupEventListeners();

  console.log("Modal de juego completado inicializado correctamente");
}

// Configurar todos los event listeners
function setupEventListeners(): void {
  // Botón "Jugar de nuevo"
  playAgainBtn?.addEventListener("click", handlePlayAgain);

  // Botón "Cerrar"
  closeModalBtn?.addEventListener("click", closeModal);

  // Cerrar modal al hacer clic en el overlay
  modal?.addEventListener("click", handleOverlayClick);

  // Cerrar modal con tecla ESC
  document.addEventListener("keydown", handleKeydown);
}

// Mostrar el modal
function showModal(): void {
  if (!modal) {
    console.error("Modal no inicializado");
    return;
  }

  modal.style.display = "flex";
  isModalOpen = true;

  // Prevenir scroll del body
  document.body.style.overflow = "hidden";

  // Reiniciar animaciones
  if (modalContent) {
    modalContent.classList.remove("closing");
    modalContent.style.animation =
      "modalBounceIn 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards";
  }

  console.log("Modal mostrado");
}

// Cerrar el modal con animación
function closeModal(): void {
  if (!modal || !modalContent || !isModalOpen) return;

  // Agregar clase de cierre para animación
  modalContent.style.animation = "modalBounceOut 0.3s ease-out forwards";

  // Animar overlay
  modal.style.animation = "fadeOutOverlay 0.3s ease-out forwards";

  setTimeout(() => {
    if (modal) {
      modal.style.display = "none";
      modal.style.animation = "";
      isModalOpen = false;

      // Restaurar scroll del body
      document.body.style.overflow = "";

      console.log("Modal cerrado");
    }
  }, 300);
}

// Manejar el botón "Jugar de nuevo"
function handlePlayAgain(): void {
  console.log("Reiniciando juego...");
  closeModal();

  // Esperar a que el modal se cierre antes de recargar
  setTimeout(() => {
    window.location.reload();
  }, 400);
}

// Manejar click en el overlay
function handleOverlayClick(e: Event): void {
  if (e.target === modal) {
    closeModal();
  }
}

// Manejar teclas del teclado
function handleKeydown(e: KeyboardEvent): void {
  if (e.key === "Escape" && isModalOpen) {
    closeModal();
  }
}

// Limpiar event listeners
function cleanup(): void {
  if (playAgainBtn) playAgainBtn.removeEventListener("click", handlePlayAgain);
  if (closeModalBtn) closeModalBtn.removeEventListener("click", closeModal);
  if (modal) modal.removeEventListener("click", handleOverlayClick);
  document.removeEventListener("keydown", handleKeydown);
}

// Función principal para inicializar cuando el DOM esté listo
function initGameOverModal(): void {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeModal);
  } else {
    initializeModal();
  }
}

// Función para mostrar el modal desde fuera (API pública)
function displayGameOverModal(): void {
  if (!modal) {
    initializeModal();
  }
  showModal();
}

// Manejar navegación de Astro
document.addEventListener("astro:page-load", () => {
  // Limpiar listeners anteriores si existen
  cleanup();

  // Reinicializar el modal
  initializeModal();
});

// Limpiar al salir de la página
document.addEventListener("astro:before-preparation", () => {
  cleanup();
});

// Inicializar automáticamente
initGameOverModal();

// Hacer la función disponible globalmente para poder llamarla desde otros scripts
(window as any).displayGameOverModal = displayGameOverModal;
