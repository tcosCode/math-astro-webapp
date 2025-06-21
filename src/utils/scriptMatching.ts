import { showGameOverMessage } from "@utils/gameOverModal";

// Interfaz para las cartas con tipado específico
interface CardElement extends HTMLElement {
  classList: DOMTokenList;
  getAttribute(name: string): string | null;
  addEventListener(type: string, listener: EventListener): void;
}

// Variables del juego
let firstCard: CardElement | null = null;
let secondCard: CardElement | null = null;
let matchedPairs: number = 0;
let lockBoard: boolean = false;
let totalPairsInGame: number = 0; // Calculamos esto una vez al inicio

// Función para calcular el número total de parejas únicas (solo las que tienen exactamente 2 cartas)
function calculateTotalPairs(): number {
  const cards = document.querySelectorAll<CardElement>(".card");
  const pairCounts = new Map<string, number>();

  // Contar cuántas cartas hay de cada data-validation
  cards.forEach((card: CardElement) => {
    const pairId = card.getAttribute("data-validation");
    if (pairId) {
      pairCounts.set(pairId, (pairCounts.get(pairId) || 0) + 1);
    }
  });

  // Solo contar como parejas válidas aquellas que tienen exactamente 2 cartas
  let validPairs = 0;
  pairCounts.forEach((count, pairId) => {
    if (count === 2) {
      validPairs++;
    } else {
      console.log(`Carta sobrante detectada: ${pairId} (${count} cartas)`);
    }
  });

  console.log(`Total de parejas válidas calculadas: ${validPairs}`);
  console.log(`Total de cartas: ${cards.length}`);
  return validPairs;
}

// Función para resetear el estado de las cartas
function resetCardSelection(): void {
  firstCard = null;
  secondCard = null;
  lockBoard = false;
}

// Función para animar y eliminar cartas correctas del DOM
function removeCorrectCards(card1: CardElement, card2: CardElement): void {
  // Encontrar los contenedores padre (grid-item)
  const container1 = card1.closest(".grid-item") || card1.parentElement;
  const container2 = card2.closest(".grid-item") || card2.parentElement;

  // Aplicar animación de salida a los contenedores
  const exitAnimation =
    "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.8s ease-out";

  if (container1) {
    (container1 as HTMLElement).style.transition = exitAnimation;
    (container1 as HTMLElement).style.transform = "scale(0) rotate(180deg)";
    (container1 as HTMLElement).style.opacity = "0";
  }

  if (container2) {
    (container2 as HTMLElement).style.transition = exitAnimation;
    (container2 as HTMLElement).style.transform = "scale(0) rotate(180deg)";
    (container2 as HTMLElement).style.opacity = "0";
  }

  // Eliminar completamente los contenedores del DOM
  setTimeout(() => {
    if (container1 && container1.parentNode) {
      container1.parentNode.removeChild(container1);
    }
    if (container2 && container2.parentNode) {
      container2.parentNode.removeChild(container2);
    }
    console.log("Contenedores de cartas eliminados del DOM");
  }, 800);
}

// Función para manejar parejas correctas
function handleCorrectMatch(): void {
  if (!firstCard || !secondCard) return;

  firstCard.classList.add("correct");
  secondCard.classList.add("correct");
  matchedPairs++;

  console.log(
    `Pareja encontrada! Total parejas: ${matchedPairs} de ${totalPairsInGame}`,
  );

  // Eliminar las cartas y sus contenedores del DOM
  removeCorrectCards(firstCard, secondCard);

  setTimeout(() => {
    checkGameCompletion();
    resetCardSelection();
  }, 1000);
}

// Función para manejar parejas incorrectas
function handleIncorrectMatch(): void {
  if (!firstCard || !secondCard) return;

  firstCard.classList.add("incorrect");
  secondCard.classList.add("incorrect");

  setTimeout(() => {
    firstCard?.classList.remove("selected", "incorrect");
    secondCard?.classList.remove("selected", "incorrect");
    resetCardSelection();
  }, 1000);
}

// Función para verificar si el juego ha terminado
function checkGameCompletion(): void {
  console.log(`Verificando completado: ${matchedPairs} de ${totalPairsInGame}`);

  if (matchedPairs === totalPairsInGame) {
    console.log("¡Juego completado!");
    setTimeout(() => {
      removeAllRemainingCards(); // Eliminar cartas sobrantes si las hay
      showGameOverMessage();
    }, 500);
  }
}

// Función para eliminar todas las cartas restantes del DOM al final del juego
function removeAllRemainingCards(): void {
  const remainingCards = document.querySelectorAll<CardElement>(".card");
  console.log(`Eliminando ${remainingCards.length} cartas restantes del DOM`);

  remainingCards.forEach((card: CardElement, index) => {
    const container = card.closest(".grid-item") || card.parentElement;

    setTimeout(() => {
      if (container && container.parentNode) {
        container.parentNode.removeChild(container);
      }
    }, index * 100); // Eliminación escalonada para mejor efecto visual
  });
}

// Función para verificar si las cartas coinciden (solo cartas que forman parejas válidas)
function cardsMatch(card1: CardElement, card2: CardElement): boolean {
  const pairId1 = card1.getAttribute("data-validation");
  const pairId2 = card2.getAttribute("data-validation");

  // Verificar que ambas cartas tienen el mismo data-validation
  if (pairId1 !== pairId2 || pairId1 === null) {
    console.log(`Cartas no coinciden: ${pairId1} vs ${pairId2}`);
    return false;
  }

  // Verificar que realmente forman una pareja válida (exactamente 2 cartas con este ID)
  const cardsWithSameId = document.querySelectorAll<CardElement>(
    `[data-validation="${pairId1}"]`,
  );
  if (cardsWithSameId.length !== 2) {
    console.log(
      `No es una pareja válida: ${pairId1} tiene ${cardsWithSameId.length} cartas`,
    );
    return false;
  }

  console.log(`¡Pareja válida encontrada!: ${pairId1}`);
  return true;
}

// Función para manejar el clic en una carta
function handleCardClick(card: CardElement): void {
  // Verificar si la interacción está bloqueada o la carta ya está procesada
  if (
    lockBoard ||
    card.classList.contains("correct") ||
    card.classList.contains("selected")
  ) {
    return;
  }

  // Marcar la carta como seleccionada
  card.classList.add("selected");

  if (!firstCard) {
    // Primera carta seleccionada
    firstCard = card;
    console.log("Primera carta seleccionada");
  } else {
    // Segunda carta seleccionada
    secondCard = card;
    lockBoard = true;
    console.log("Segunda carta seleccionada");

    // Verificar si las cartas coinciden
    if (cardsMatch(firstCard, secondCard)) {
      handleCorrectMatch();
    } else {
      handleIncorrectMatch();
    }
  }
}

// Función para inicializar el juego
function initializeGame(): void {
  console.log("Inicializando juego...");

  // Resetear variables del juego
  matchedPairs = 0;
  resetCardSelection();

  // Calcular el total de parejas UNA VEZ al inicio
  totalPairsInGame = calculateTotalPairs();

  // Remover modal anterior si existe
  const existingModal = document.querySelector("#game-over-modal");
  if (existingModal) {
    existingModal.remove();
  }

  // Resetear todas las cartas
  const cards = document.querySelectorAll<CardElement>(".card");
  cards.forEach((card: CardElement) => {
    card.style.display = "";
    card.style.opacity = "";
    card.style.transition = "";
    card.style.transform = "";
    card.classList.remove("correct", "selected", "incorrect");
  });

  // Agregar event listeners a todas las cartas
  cards.forEach((card: CardElement) => {
    // Remover listeners anteriores (si los hay)
    card.replaceWith(card.cloneNode(true));
  });

  // Volver a obtener las cartas después del clonado y agregar listeners
  const freshCards = document.querySelectorAll<CardElement>(".card");
  freshCards.forEach((card: CardElement) => {
    card.addEventListener("click", () => handleCardClick(card));
  });

  console.log(
    `Juego inicializado con ${totalPairsInGame} parejas y ${freshCards.length} cartas`,
  );
}

// Inicializar cuando la página esté cargada
document.addEventListener("astro:page-load", initializeGame);
document.addEventListener("DOMContentLoaded", initializeGame);
