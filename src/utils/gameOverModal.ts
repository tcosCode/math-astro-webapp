import confetti from "canvas-confetti";

import { validateDataToSend } from "@utils/helpers/validateDataToSend";
import { sendData } from "@utils/helpers/sendData";

const confettiOptions = {
  particleCount: 150,
  spread: 60,
  origin: { x: 0.5, y: 0.3 },
};

function throwConfetti(options: typeof confettiOptions): void {
  try {
    // 1) Creamos y añadimos nuestro propio canvas al DOM
    const confettiCanvas = document.createElement("canvas");

    confettiCanvas.classList.add("confetti-canvas");
    confettiCanvas.style.position = "fixed";
    confettiCanvas.style.top = "0";
    confettiCanvas.style.left = "0";
    confettiCanvas.style.width = "100%";
    confettiCanvas.style.height = "100%";
    confettiCanvas.style.pointerEvents = "none";
    confettiCanvas.style.zIndex = "10000"; // Por encima del modal

    document.body.appendChild(confettiCanvas);

    // 2) Instanciamos el launcher usando ese canvas
    const myConfetti = confetti.create(confettiCanvas, {
      resize: true, // para que siempre ocupe la pantalla completa
      useWorker: true, // para que no bloquee el hilo principal
    });

    // 3) ¡EJECUTAMOS el confetti con las opciones!
    myConfetti(options);

    // 4) Removemos el canvas después de la animación (aprox 3 segundos)
    setTimeout(() => {
      if (confettiCanvas && confettiCanvas.parentNode) {
        confettiCanvas.parentNode.removeChild(confettiCanvas);
      }
    }, 3000);
  } catch (error) {
    console.warn("Error al crear confetti:", error);

    // Fallback: usar confetti por defecto si falla
    confetti(options);
  }
}

// Mostrar modal
function showModal(): void {
  const modalOverlay = document.getElementById("game-over-modal");
  if (modalOverlay) {
    // Mostrar modal
    setTimeout(() => {
      modalOverlay.classList.remove("modal-hidden");
      modalOverlay.classList.add("modal-visible");

      // Prevenir scroll del body
      document.body.style.overflow = "hidden";
    }, 100);
  }
}

// Ocultar modal
function hideModal(): void {
  const modalOverlay = document.getElementById("game-over-modal");
  if (modalOverlay) {
    modalOverlay.classList.remove("modal-visible");
    modalOverlay.classList.add("modal-hidden");

    // Restaurar scroll del body después de la animación
    setTimeout(() => {
      document.body.style.overflow = "";
    }, 300);
  }
}

// Función para mostrar el modal de finalización
export function showGameOverMessage(): void {
  // dispara el confetti con tus opciones:
  throwConfetti(confettiOptions);
  showModal();

  // Capturar datos
  const exercise = document
    .querySelector("#game-over-modal")
    ?.getAttribute("data-exercise");
  const grade = document
    .querySelector("#game-over-modal")
    ?.getAttribute("data-grade");

  //Enviar datos al Servidor
  const submissionData = validateDataToSend(exercise ?? "", grade ?? "");
  if (!submissionData) {
    console.error("Error al enviar datos al servidor");
    return;
  }
  sendData(submissionData);

  // Agregar event listeners a los botones
  const playAgainBtn = document.getElementById("play-again-btn");
  const closeModalBtn = document.getElementById("close-modal-btn");

  if (playAgainBtn) {
    playAgainBtn.addEventListener("click", () => {
      location.reload();
    });
  }

  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", () => {
      hideModal();
    });
  }
}
