import { validateTrueFalse } from "./validateTrueFalse";

/* Listener-wrap para cuando cargue la pagina*/
document.addEventListener("astro:page-load", () => {
  // Listener para todos los botones de opciones
  document.querySelectorAll(".option-btn").forEach((button) => {
    button.addEventListener("click", (event) => {
      const target = event.currentTarget as HTMLButtonElement;
      const validation = target.getAttribute("data-validation");

      if (validation) {
        validateTrueFalse(validation, target);
      }
    });
  });
});
