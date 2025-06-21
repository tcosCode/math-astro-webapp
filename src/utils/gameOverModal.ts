import confetti from "canvas-confetti";

// 1) Creamos y añadimos nuestro propio canvas al DOM
const confettiCanvas = document.createElement("canvas");
confettiCanvas.classList.add("confetti-canvas");
document.body.appendChild(confettiCanvas);

// 2) Instanciamos el launcher usando ese canvas
const myConfetti = confetti.create(confettiCanvas, {
  resize: true, // para que siempre ocupe la pantalla completa
  useWorker: true, // para que no bloquee el hilo principal
});

// Función para mostrar el modal de finalización
export function showGameOverMessage(): void {
  // dispara el confetti con tus opciones:
  myConfetti({
    particleCount: 150,
    spread: 60,
    origin: { x: 0.5, y: 0.3 },
  });

  // Crear el overlay del modal
  const modalOverlay = document.createElement("div");
  modalOverlay.id = "game-over-modal";
  modalOverlay.innerHTML = `
    <div class="modal-overlay" style="
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      backdrop-filter: blur(5px);
      z-index: 1000;
      display: flex;
      align-items: center;
      justify-content: center;
      animation: fadeInOverlay 0.3s ease-out;
    ">
      <div class="modal-content" style="
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 40px;
        border-radius: 20px;
        text-align: center;
        box-shadow: 0 20px 60px rgba(0,0,0,0.4);
        max-width: 400px;
        width: 90%;
        transform: scale(0.7);
        animation: modalBounceIn 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
      ">
        <div style="font-size: 60px; margin-bottom: 20px;">🎉</div>
        <h2 style="
          margin: 0 0 15px 0; 
          font-size: 28px; 
          font-weight: bold; 
          text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        ">¡Felicitaciones!</h2>
        <p style="
          margin: 0 0 30px 0; 
          font-size: 18px; 
          opacity: 0.9;
          line-height: 1.4;
        ">Has completado el juego exitosamente.<br>¡Todas las parejas encontradas!</p>
        <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
          <button id="play-again-btn" style="
            background: white;
            color: #667eea;
            border: none;
            padding: 12px 24px;
            border-radius: 30px;
            cursor: pointer;
            font-weight: bold;
            font-size: 16px;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(255,255,255,0.3);
          " onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(255,255,255,0.4)'"
             onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(255,255,255,0.3)'">
            🔄 Jugar de nuevo
          </button>
          <button id="close-modal-btn" style="
            background: transparent;
            color: white;
            border: 2px solid white;
            padding: 12px 24px;
            border-radius: 30px;
            cursor: pointer;
            font-weight: bold;
            font-size: 16px;
            transition: all 0.3s ease;
          " onmouseover="this.style.background='white'; this.style.color='#667eea'"
             onmouseout="this.style.background='transparent'; this.style.color='white'">
            ✨ Cerrar
          </button>
        </div>
      </div>
    </div>
    <style>
      @keyframes fadeInOverlay {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      @keyframes modalBounceIn {
        0% { 
          transform: scale(0.7); 
          opacity: 0; 
        }
        50% { 
          transform: scale(1.05); 
        }
        100% { 
          transform: scale(1); 
          opacity: 1; 
        }
      }
      @keyframes modalBounceOut {
        0% { 
          transform: scale(1); 
          opacity: 1; 
        }
        100% { 
          transform: scale(0.7); 
          opacity: 0; 
        }
      }
    </style>
  `;

  // Agregar el modal al DOM
  document.body.appendChild(modalOverlay);

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
      closeModalOld();
    });
  }

  // Cerrar modal al hacer clic en el overlay
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      closeModalOld();
    }
  });

  // Cerrar modal con tecla ESC
  document.addEventListener("keydown", handleEscKey);

  console.log("Modal de completado mostrado");
}

// Función para cerrar el modal con animación
function closeModalOld(): void {
  const modal = document.getElementById("game-over-modal");
  if (modal) {
    const modalContent = modal.querySelector(".modal-content") as HTMLElement;
    if (modalContent) {
      modalContent.style.animation = "modalBounceOut 0.3s ease-out forwards";
    }
    modal.style.animation = "fadeInOverlay 0.3s ease-out reverse";

    setTimeout(() => {
      modal.remove();
      document.removeEventListener("keydown", handleEscKey);
    }, 300);
  }
}

// Función para manejar la tecla ESC
function handleEscKey(e: KeyboardEvent): void {
  if (e.key === "Escape") {
    closeModalOld();
  }
}
