// Funcion para validar la respuesta
export function validateAnswer(answer: string, button: HTMLButtonElement) {
  const container = button.closest("#grid-item") as HTMLDivElement;
  if (!parent) return;
  const options = container.querySelectorAll(
    ".option-btn",
  ) as NodeListOf<HTMLButtonElement>;
  const retryButton = container.querySelector(
    "#retryButton",
  ) as HTMLButtonElement;
  const feedback = container.querySelector("#feedback") as HTMLDivElement;

  // Deshabilitar todos los botones después de una respuesta
  options.forEach((opt) => (opt.disabled = true));

  if (answer === "correct") {
    button.classList.add("correct");
    const h3 = feedback.querySelector("#h3-correct") as HTMLHeadingElement;
    h3.style.display = "block";
  } else {
    const h3 = feedback.querySelector("#h3-incorrect") as HTMLHeadingElement;
    h3.style.display = "block";
    button.classList.add("incorrect");
    retryButton.style.display = "block"; // Muestra el botón de "Intentar de nuevo"
  }
}
