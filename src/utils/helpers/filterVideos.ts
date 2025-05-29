function setupVideoFilter() {
  // 1. Selecciona los elementos del DOM
  const filterTabs = document.querySelectorAll(
    '.radio-inputs input[name="radio"]',
  );
  const videoCards = document.querySelectorAll(
    ".video-container",
  ) as NodeListOf<HTMLElement>;

  // 2. Define la función que filtra las tarjetas
  function filterVideos(selectedGrade: string) {
    videoCards.forEach((card) => {
      const cardGrade = card.getAttribute("data-grade");

      // Si el grado seleccionado es "Todos" o coincide con el de la tarjeta, muéstrala.
      // Si no, ocúltala.
      if (selectedGrade === "Todos" || cardGrade?.includes(selectedGrade)) {
        card.style.display = "flex"; // Usa el display original del contenedor
      } else {
        card.style.display = "none";
      }
    });
  }

  // 3. Añade un "event listener" a cada tab
  filterTabs.forEach((tab) => {
    tab.addEventListener("change", (event) => {
      const selectedGrade = (event.target as HTMLInputElement).value;
      filterVideos(selectedGrade);
    });
  });

  // 4. (Opcional) Filtra inicialmente al cargar la página si un tab ya está seleccionado
  const initiallyChecked = document.querySelector(
    '.radio-inputs input[name="radio"]:checked',
  ) as HTMLInputElement;
  if (initiallyChecked) {
    filterVideos(initiallyChecked.value);
  }
}

// Ejecuta la función cuando la página cargue.
// 'astro:page-load' asegura que funcione con las transiciones de página de Astro.
document.addEventListener("astro:page-load", setupVideoFilter);
