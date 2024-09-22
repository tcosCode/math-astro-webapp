let currentExercise: number = 0; // Índice del ejercicio actual
const totalExercises: number = 8; // Total de ejercicios
let mistakes: number[] = Array(totalExercises).fill(0); // Array para contar errores por ejercicio

// Función para validar la respuesta del usuario
function validateAnswer(
  exerciseIndex: number,
  answer: string,
  button: HTMLButtonElement,
): void {
  const feedback: HTMLElement | null = document.getElementById("feedback");
  const options: NodeListOf<HTMLButtonElement> =
    document.querySelectorAll(".option-btn");

  // Deshabilitar todos los botones después de una respuesta
  options.forEach((opt) => (opt.disabled = true));

  if (answer === "correct") {
    if (feedback) {
      feedback.innerHTML =
        '<h1 class="correct"><svg class="svg" id="icon-face-smile" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm177.6 62.1C192.8 334.5 218.8 352 256 352s63.2-17.5 78.4-33.9c9-9.7 24.2-10.4 33.9-1.4s10.4 24.2 1.4 33.9c-22 23.8-60 49.4-113.6 49.4s-91.7-25.5-113.6-49.4c-9-9.7-8.4-24.9 1.4-33.9s24.9-8.4 33.9 1.4zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg> ¡Felicidades! Lo ha logrado.</h1>';
    }
    button.classList.add("correct");
    if (currentExercise < totalExercises - 1) {
      const continueButton: HTMLElement | null =
        document.getElementById("continueButton");
      if (continueButton) {
        continueButton.style.display = "block"; // Muestra el botón de "Continuar"
      }
    } else {
      displayFinalMessage(); // Muestra el mensaje final si es el último ejercicio
    }
  } else {
    mistakes[exerciseIndex]++; // Aumenta el contador de errores
    if (feedback) {
      feedback.innerHTML =
        '<h1 class="incorrect"><svg  class="svg" id="icon-face-frown" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM174.6 384.1c-4.5 12.5-18.2 18.9-30.7 14.4s-18.9-18.2-14.4-30.7C146.9 319.4 198.9 288 256 288s109.1 31.4 126.6 79.9c4.5 12.5-2 26.2-14.4 30.7s-26.2-2-30.7-14.4C328.2 358.5 297.2 336 256 336s-72.2 22.5-81.4 48.1zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg> Lo sentimos. Su selección no es correcta.</h1>';
    }
    button.classList.add("incorrect");
    const retryButton: HTMLElement | null =
      document.getElementById("retryButton");
    if (retryButton) {
      retryButton.style.display = "block"; // Muestra el botón de "Intentar de nuevo"
    }
  }
}

function continueExercise(): void {
  currentExercise++;
  const feedback: HTMLElement | null = document.getElementById("feedback");
  if (feedback) {
    feedback.innerHTML = "";
  }
  const continueButton: HTMLElement | null =
    document.getElementById("continueButton");
  if (continueButton) {
    continueButton.style.display = "none"; // Oculta el botón de "Continuar"
  }

  // Habilitar los botones de opciones y restablecer estilos para el nuevo ejercicio
  const options: NodeListOf<HTMLButtonElement> =
    document.querySelectorAll(".option-btn");
  options.forEach((opt) => {
    opt.disabled = false; // Habilita los botones
    opt.classList.remove("correct", "incorrect"); // Elimina las clases de estilo anteriores
  });

  showExercise(currentExercise); // Muestra el nuevo ejercicio
}

function showExercise(exerciseIndex: number): void {
  const exercises: NodeListOf<HTMLElement> =
    document.querySelectorAll(".grid-item");
  exercises.forEach((exercise, index) => {
    exercise.style.display = index === exerciseIndex ? "block" : "none";
  });
}

function displayFinalMessage(): void {
  // Inicia el contenido de feedback
  let feedback: string =
    '<h1 class="correct"><svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm177.6 62.1C192.8 334.5 218.8 352 256 352s63.2-17.5 78.4-33.9c9-9.7 24.2-10.4 33.9-1.4s10.4 24.2 1.4 33.9c-22 23.8-60 49.4-113.6 49.4s-91.7-25.5-113.6-49.4c-9-9.7-8.4-24.9 1.4-33.9s24.9-8.4 33.9 1.4zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg> ¡Felicidades! Ha completado todos los ejercicios.</h1>';
  feedback += "<h3 class='statistics'>Estadísticas de errores:</h3><ul>";
  // Agrega los errores por ejercicio
  mistakes.forEach((mistake, index) => {
    feedback += `<li>Ejercicio ${index + 1}: ${mistake} error(es)</li>`;
  });
  feedback += "</ul>";
  feedback +=
    '<button id="resetall-btn" onclick="resetAll()"><div> <svg class="redo-right svg"><use href="iconos/rotate-right-solid.svg#icon-redo-right"></use></svg><span>Volver a intentarlo</span></div></button>';
  // Actualiza el contenido del contenedor feedback
  const feedbackContainer: HTMLElement | null =
    document.getElementById("feedback");
  if (feedbackContainer) {
    feedbackContainer.innerHTML = feedback;
  }
}

function retry(): void {
  // Restablecer la retroalimentación y el temporizador
  const feedback: HTMLElement | null = document.getElementById("feedback");
  if (feedback) {
    feedback.innerHTML = "";
  }
  const retryButton: HTMLElement | null =
    document.getElementById("retryButton");
  if (retryButton) {
    retryButton.style.display = "none"; // Oculta el botón de "Intentar de nuevo"
  }

  // Habilitar los botones de opciones y restablecer estilos
  const options: NodeListOf<HTMLButtonElement> =
    document.querySelectorAll(".option-btn");
  options.forEach((opt) => {
    opt.disabled = false; // Habilita los botones
    opt.classList.remove("correct", "incorrect"); // Remueve las clases de estilo
  });
}

function resetAll(): void {
  currentExercise = 0;
  mistakes = Array(totalExercises).fill(0); // Resetea errores a cero
  const feedback: HTMLElement | null = document.getElementById("feedback");
  if (feedback) {
    feedback.innerHTML = "";
  }
  const retryButton: HTMLElement | null =
    document.getElementById("retryButton");
  if (retryButton) {
    retryButton.style.display = "none";
  }
  const continueButton: HTMLElement | null =
    document.getElementById("continueButton");
  if (continueButton) {
    continueButton.style.display = "none";
  }

  // Habilitar los botones de opciones y restablecer estilos
  const options: NodeListOf<HTMLButtonElement> =
    document.querySelectorAll(".option-btn");
  options.forEach((opt) => {
    opt.disabled = false; // Habilita los botones
    opt.classList.remove("correct", "incorrect"); // Remueve las clases de estilo
  });
  showExercise(currentExercise); // Muestra el primer ejercicio
}
