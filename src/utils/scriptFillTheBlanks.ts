// Definición de la interfaz Options que describe cada opción
interface Options {
  id: string; // Identificador único de la opción
  text: string; // Texto de la opción que el usuario arrastrará
  position: string; // Identificador de la posición de destino correcta en el ejercicio
}

// Espera a que la página de Astro se cargue completamente
document.addEventListener("astro:page-load", () => {
  // Itera sobre cada ejercicio representado por elementos con la clase .grid-item
  document.querySelectorAll(".grid-item").forEach((exercise) => {
    // Almacena todas las opciones dentro del ejercicio actual
    const options: Options[] = Array.from(
      exercise.querySelectorAll(".option"),
    ).map((optionEl) => ({
      id: optionEl.getAttribute("data-id") || "", // Identificador único de cada opción
      text: optionEl.textContent || "", // Texto visible en la opción
      position: optionEl.getAttribute("data-position") || "", // Posición objetivo correcta para la opción
    }));

    let isChecked = false; // Controla si las respuestas ya han sido verificadas

    // Configura todos los eventos necesarios para el ejercicio actual
    setupEventListeners(exercise);

    // Configura eventos de clic y arrastre
    function setupEventListeners(exercise: Element) {
      // Botón para verificar respuestas
      exercise
        .querySelector("#checkAnswers")
        ?.addEventListener("click", checkAnswers);

      // Eventos para cada opción arrastrable
      exercise.querySelectorAll(".option").forEach((optionEl) => {
        optionEl.addEventListener(
          "dragstart",
          handleDragStart as EventListener,
        );
      });

      // Eventos para cada espacio en blanco
      exercise.querySelectorAll(".blank").forEach((blank) => {
        blank.addEventListener("dragover", handleDragOver as EventListener); // Permite el drop
        blank.addEventListener("drop", handleDrop as EventListener); // Acción de soltar
        blank.addEventListener("click", handleBlankClick); // Limpia el contenido al hacer clic
      });
    }

    // Guarda el id de la opción arrastrada en el evento de transferencia de datos
    function handleDragStart(e: DragEvent) {
      e.dataTransfer?.setData(
        "text",
        (e.target as HTMLElement).getAttribute("data-id") || "",
      );
    }

    // Permite que el espacio en blanco acepte el elemento arrastrado
    function handleDragOver(e: DragEvent) {
      e.preventDefault();
    }

    // Al soltar una opción en un espacio en blanco, coloca el texto de la opción en el espacio
    function handleDrop(e: DragEvent) {
      e.preventDefault();
      const optionId = e.dataTransfer?.getData("text"); // Obtiene el id de la opción
      const option = options.find((opt) => opt.id === optionId); // Encuentra la opción en la lista
      const blankEl = e.target as HTMLElement;

      if (option && blankEl) {
        swapText(blankEl, option); // Coloca el texto de la opción en el espacio en blanco
        isChecked = false; // Marca el ejercicio como no verificado
        updateResult("", exercise); // Resetea el resultado visual
      }
    }

    // Al hacer clic en un espacio en blanco, lo vacía para permitir nueva entrada
    function handleBlankClick(e: Event) {
      const blankEl = e.target as HTMLElement;
      blankEl.textContent = ""; // Limpia el texto
      blankEl.classList.remove("correct", "incorrect"); // Elimina estilos previos
      isChecked = false; // Marca el ejercicio como no verificado
      updateResult("", exercise); // Resetea el mensaje de resultado
    }

    // Coloca el texto de una opción en un espacio en blanco y elimina estilos previos
    function swapText(blankEl: HTMLElement, option: Options) {
      blankEl.textContent = option.text; // Coloca el texto de la opción en el espacio en blanco
      blankEl.classList.remove("correct", "incorrect"); // Elimina estilos
      isChecked = false; // Marca el ejercicio como no verificado
      updateResult("", exercise); // Resetea el resultado visual
    }

    // Verifica si las respuestas en los espacios en blanco son correctas
    function checkAnswers() {
      const blanks = exercise.querySelectorAll(".blank"); // Obtiene todos los espacios en blanco
      let allCorrect = true; // Marca global para verificar si todas las respuestas son correctas

      blanks.forEach((blank) => {
        const id = blank.getAttribute("data-id"); // Obtiene el id de posición del espacio en blanco
        const answer = blank.textContent?.trim(); // Limpia el texto en el espacio en blanco

        // Busca la opción correcta en función de su posición
        const correctOption = options.find(
          (opt) => opt.position === id && opt.position,
        );
        const isCorrect = correctOption
          ? answer === correctOption.text.trim()
          : false; // Compara el texto con el de la opción correcta

        if (!isCorrect) allCorrect = false; // Si alguna respuesta es incorrecta, marca como falso
        updateBlankStatus(blank, isCorrect); // Actualiza el estado visual del espacio en blanco
      });

      isChecked = true; // Marca el ejercicio como verificado
      updateResult(
        allCorrect
          ? "¡Felicidades! ¡Todas las respuestas son correctas!"
          : "Algunas respuestas son incorrectas. ¡Inténtalo de nuevo!",
        exercise,
        allCorrect,
      ); // Muestra el resultado general del ejercicio
    }

    // Actualiza el estado visual de cada espacio en blanco según si la respuesta es correcta o no
    function updateBlankStatus(blank: Element, isCorrect: boolean) {
      const existingIcon = blank.querySelector(".icon"); // Busca íconos de estado previos
      if (existingIcon) existingIcon.remove(); // Remueve el ícono si existe
      blank.classList.remove("correct", "incorrect"); // Elimina clases de estado previas
      blank.classList.add(isCorrect ? "correct" : "incorrect"); // Añade clase según el estado

      const icon = document.createElement("span"); // Crea un nuevo ícono de estado
      icon.className = "icon"; // Asigna clase para estilizar el ícono
      icon.innerHTML = isCorrect
        ? '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4caf50" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>'
        : '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f44336" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>';
      blank.appendChild(icon); // Añade el ícono al espacio en blanco
    }

    // Actualiza el mensaje de resultado global para cada ejercicio
    function updateResult(
      message: string,
      parentExercise: Element,
      allCorrect?: boolean,
    ) {
      const resultEl = parentExercise.querySelector("#result"); // Selecciona el elemento de resultado global
      if (resultEl) {
        resultEl.textContent = message; // Actualiza el mensaje de texto
        if (allCorrect !== undefined)
          resultEl.className = `result ${allCorrect ? "correct" : "incorrect"}`; // Aplica estilo según el resultado general
        else resultEl.className = "result"; // Restaura el estilo básico si no hay resultado
      }
    }
  });
});
