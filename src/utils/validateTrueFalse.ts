// Funcion para validar la respuesta
export function validateTrueFalse(
  validation: string,
  button: HTMLButtonElement,
) {
  const parent = button.parentElement as HTMLDivElement;
  if (!parent) return;
  const options = parent.querySelectorAll(
    ".option-btn",
  ) as NodeListOf<HTMLButtonElement>;

  // Deshabilitar todos los botones después de una respuesta
  options.forEach((opt) => (opt.disabled = true));

  if (validation === "correct") {
    button.classList.add("correct");
  } else {
    button.classList.add("incorrect");
  }
}
