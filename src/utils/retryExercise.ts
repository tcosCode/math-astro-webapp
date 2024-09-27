//Funcion para reintentar el ejercicio
export function retry(button: HTMLButtonElement) {
  const parent = button.parentElement as HTMLDivElement;
  if (!parent) return;
  const feedback = parent.querySelector("#feedback") as HTMLDivElement;
  // Limpia el espacio de retroalimentación
  feedback.querySelectorAll("h3").forEach((h3) => {
    h3.style.display = "none";
  });
  const retryButton = parent.querySelector("#retryButton") as HTMLButtonElement;
  const options = parent.querySelectorAll(
    ".option-btn",
  ) as NodeListOf<HTMLButtonElement>;
  retryButton.style.display = "none"; // Oculta el botón de "Intentar de nuevo"
  options.forEach((opt) => {
    opt.disabled = false; // Habilita los botones
    opt.classList.remove("correct", "incorrect"); // Remueve las clases de estilo
  });
}
