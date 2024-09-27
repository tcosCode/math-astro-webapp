// Funcion para validar la respuesta
export function validateAnswer(answer: string, button: HTMLButtonElement) {
  const parent = button.parentElement as HTMLDivElement;
  if (!parent) return;
  const options = parent.querySelectorAll(
    ".option-btn",
  ) as NodeListOf<HTMLButtonElement>;
  const retryButton = parent.querySelector("#retryButton") as HTMLButtonElement;
  const feedback = parent.querySelector("#feedback") as HTMLDivElement;

  // Deshabilitar todos los botones después de una respuesta
  options.forEach((opt) => (opt.disabled = true));

  if (answer === "correct") {
    button.classList.add("correct");
    const h3 = feedback.querySelector(".h3-correct") as HTMLHeadingElement;
    h3.style.display = "block";
  } else {
    const h3 = feedback.querySelector(".h3-incorrect") as HTMLHeadingElement;
    h3.style.display = "block";
    button.classList.add("incorrect");
    retryButton.style.display = "block"; // Muestra el botón de "Intentar de nuevo"
  }
}
