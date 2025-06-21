import {
  createProgressIndicator,
  updateProgress,
} from "@utils/scriptProgressIndicator";

// Funcion para validar la respuesta
export function validateAnswer(
  answer: string,
  button: HTMLButtonElement,
  container: HTMLDivElement,
) {
  const options = container.querySelectorAll(
    ".option-btn",
  ) as NodeListOf<HTMLButtonElement>;
  const feedback = container.querySelector("#feedback") as HTMLDivElement;
  const retryButton = container.querySelector(
    "#retryButton",
  ) as HTMLButtonElement | null;

  // Deshabilitar todos los botones después de una respuesta
  options.forEach((opt) => (opt.disabled = true));

  if (answer === "correct") {
    button.classList.add("correct");
    const h3 = feedback.querySelector("#h3-correct") as HTMLHeadingElement;
    h3.style.display = "block";
    // Agregar la clase para mostrar el icono
    container.classList.add("card-solved");
    // Actualizar progreso y verificar completado
    createProgressIndicator();
    setTimeout(updateProgress, 100); // Pequeño delay para que se actualice el DOM
  } else {
    button.classList.add("incorrect");
    const h3 = feedback.querySelector("#h3-incorrect") as HTMLHeadingElement;
    h3.style.display = "block";
    retryButton ? (retryButton.style.display = "block") : null; // Muestra el botón de "Intentar de nuevo"
  }
}
