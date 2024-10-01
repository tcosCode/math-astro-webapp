// Lógica del juego
let firstCard, secondCard;
let matchedPairs = 0; // Contador de parejas emparejadas
// Obtener la longitud desde el dataset
const length = document.querySelectorAll(".card").length;
const totalPairs = length / 2; // Número total de parejas
let lockBoard = false; // Bloqueo de interacción

document.addEventListener("astro:page-load", () => {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      // Si el tablero está bloqueado o la carta ya está volteada o correcta, no hacer nada
      if (
        lockBoard ||
        card.classList.contains("correct") ||
        card.classList.contains("selected")
      )
        return;

      card.classList.add("selected"); // Cambiar borde a azul

      if (!firstCard) {
        firstCard = card;
      } else {
        secondCard = card;
        lockBoard = true; // Bloquear la interacción

        if (
          firstCard.getAttribute("data-validation") ===
          secondCard.getAttribute("data-validation")
        ) {
          // Si son correctas, hacer zoom out y desvanecer
          firstCard.classList.add("correct");
          secondCard.classList.add("correct");
          matchedPairs++; // Aumentar contador de parejas emparejadas

          setTimeout(() => {
            firstCard = secondCard = null; // Resetear referencias
            lockBoard = false; // Desbloquear el tablero

            // Si se emparejan todas las cartas, mostrar el mensaje
            if (matchedPairs === totalPairs) {
              document.querySelector("#game-over-message").style.display =
                "block";
            }
          }, 1000);
        } else {
          // Si son incorrectas, hacer shake y quitar borde azul
          firstCard.classList.add("incorrect");
          secondCard.classList.add("incorrect");

          setTimeout(() => {
            firstCard.classList.remove("selected", "incorrect");
            secondCard.classList.remove("selected", "incorrect");
            firstCard = secondCard = null;
            lockBoard = false; // Desbloquear el tablero
          }, 1000);
        }
      }
    });
  });
});
