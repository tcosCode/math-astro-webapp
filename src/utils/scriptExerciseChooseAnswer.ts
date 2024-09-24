/* Listener-wrap para cuando cargue la pagina*/
document.addEventListener("astro:page-load", () => {
  // Listener para todos los botones de opciones
  document.querySelectorAll(".option-btn").forEach((button) => {
    button.addEventListener("click", (event) => {
      const target = event.currentTarget as HTMLButtonElement;
      const validation = target.getAttribute("data-validation");

      if (validation) {
        validateAnswer(validation, target);
      }
    });
  });

  // Listener para todos los Botones de Retry
  document.querySelectorAll("#retryButton").forEach((button) => {
    button.addEventListener("click", (event) => {
      const target = event.currentTarget as HTMLButtonElement;
      retry(target);
    });
  });

  // Funcion para validar la respuesta
  function validateAnswer(answer: string, button: HTMLButtonElement) {
    const parent = button.parentElement as HTMLDivElement;
    if (!parent) return;
    const options = parent.querySelectorAll(
      ".option-btn",
    ) as NodeListOf<HTMLButtonElement>;
    const retryButton = parent.querySelector(
      "#retryButton",
    ) as HTMLButtonElement;
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
});

//Funcion para reintentar el ejercicio
function retry(button: HTMLButtonElement) {
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
