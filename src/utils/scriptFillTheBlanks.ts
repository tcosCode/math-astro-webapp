import NotyfSingleton from "@src/utils/helpers/notyfInstance";

import { postExerciseAnswer } from "@utils/api";

interface Options {
  id: string;
  text: string;
  position: string;
}

// Wait until the Astro page is fully loaded
document.addEventListener("astro:page-load", async () => {
  const notyf = NotyfSingleton.getInstance();

  document.querySelectorAll("[id^='grid-item']").forEach((exercise) => {
    const grade = exercise.getAttribute("data-grade");
    const exerciseAttr = exercise.getAttribute("data-exercise");
    const inciso = exercise.getAttribute("data-inciso");

    const options: Options[] = Array.from(
      exercise.querySelectorAll(".option"),
    ).map((optionEl) => ({
      id: optionEl.getAttribute("data-id") || "",
      text: optionEl.textContent?.trim() || "",
      position: optionEl.getAttribute("data-position") || "",
    }));

    let isChecked = false;
    let draggedOptionId: string | null = null;

    // Initialize all event listeners for the current exercise
    initializeEventListeners();

    function initializeEventListeners() {
      setupCheckAnswersButton();
      setupDraggableOptions();
      setupDropTargets();
    }

    function setupCheckAnswersButton() {
      const checkButton = exercise.querySelector("#checkAnswers");
      checkButton?.addEventListener("click", checkAnswers);
    }

    function setupDraggableOptions() {
      exercise.querySelectorAll(".option").forEach((optionEl) => {
        optionEl.addEventListener(
          "dragstart",
          handleDragStart as EventListener,
        );
        optionEl.addEventListener(
          "touchstart",
          handleTouchStart as EventListener,
        );
      });
    }

    function setupDropTargets() {
      exercise.querySelectorAll(".blank").forEach((blank) => {
        blank.addEventListener("dragover", handleDragOver as EventListener);
        blank.addEventListener("drop", handleDrop as EventListener);
        blank.addEventListener("click", handleBlankClick);
        blank.addEventListener("touchmove", handleTouchMove as EventListener);
        blank.addEventListener("touchend", handleTouchEnd as EventListener);
      });
    }

    // Hide feedback when user interacts after checking answers
    function hideFeedbackIfNeeded() {
      if (isChecked) {
        hideFeedback();
        isChecked = false;
      }
    }

    function hideFeedback() {
      const feedback = exercise.querySelector("#feedback") as HTMLDivElement;
      if (feedback) {
        const correctH3 = feedback.querySelector(
          "#h3-correct",
        ) as HTMLHeadingElement;
        const incorrectH3 = feedback.querySelector(
          "#h3-incorrect",
        ) as HTMLHeadingElement;

        if (correctH3) correctH3.style.display = "none";
        if (incorrectH3) incorrectH3.style.display = "none";
      }
    }

    // Touch event handlers
    function handleTouchStart(e: TouchEvent) {
      const target = e.target as HTMLElement;
      draggedOptionId = target.getAttribute("data-id");
      hideFeedbackIfNeeded();
    }

    function handleTouchMove(e: TouchEvent) {
      e.preventDefault();
    }

    function handleTouchEnd(e: TouchEvent) {
      const touch = e.changedTouches[0];
      const target = document.elementFromPoint(touch.clientX, touch.clientY);
      // FIX: Buscar el blank más cercano, incluso si tocaste el icono
      const blankEl = target?.closest(".blank") as HTMLElement;

      if (blankEl && draggedOptionId) {
        const option = options.find((opt) => opt.id === draggedOptionId);
        if (option) {
          placeOptionInBlank(blankEl, option);
        }
      }
      draggedOptionId = null;
    }

    // Drag and drop event handlers
    function handleDragStart(e: DragEvent) {
      const target = e.target as HTMLElement;
      const optionId = target.getAttribute("data-id") || "";
      e.dataTransfer?.setData("text", optionId);
      hideFeedbackIfNeeded();
    }

    function handleDragOver(e: DragEvent) {
      e.preventDefault();
    }

    function handleDrop(e: DragEvent) {
      e.preventDefault();

      const optionId = e.dataTransfer?.getData("text");
      const option = options.find((opt) => opt.id === optionId);

      // FIX: Buscar el elemento .blank más cercano, incluso si el drop fue en el icono
      const targetElement = e.target as HTMLElement;
      const blankEl =
        (targetElement.closest(".blank") as HTMLElement) || targetElement;

      // Verificar que realmente sea un blank válido
      if (option && blankEl && blankEl.classList.contains("blank")) {
        placeOptionInBlank(blankEl, option);
      }
    }

    // Blank click handler
    function handleBlankClick(e: Event) {
      const targetElement = e.target as HTMLElement;

      // Si el clic fue en el icono, obtener el blank padre
      const targetBlank =
        (targetElement.closest(".blank") as HTMLElement) || targetElement;

      // Verificar que sea realmente un blank
      if (targetBlank.classList.contains("blank")) {
        clearBlank(targetBlank);
        hideFeedbackIfNeeded();
        updateResult();
      }
    }

    // Utility functions for blank manipulation
    function clearBlank(blankEl: HTMLElement) {
      blankEl.textContent = "";
      removeBlankStyles(blankEl);
    }

    function placeOptionInBlank(blankEl: HTMLElement, option: Options) {
      // FIX: Limpiar completamente el blank antes de agregar el nuevo contenido
      clearBlank(blankEl);
      blankEl.textContent = option.text;
      removeBlankStyles(blankEl);
    }

    function removeBlankStyles(blankEl: HTMLElement) {
      blankEl.classList.remove("correct", "incorrect");
      // FIX: Usar querySelector para eliminar iconos anidados
      const icon = blankEl.querySelector(".fill-the-blanks-icon");
      if (icon) {
        icon.remove();
      }
    }

    // Answer checking logic
    function checkAnswers() {
      const blanks = exercise.querySelectorAll(".blank");

      // Check if there are any answers at all
      const hasAnyAnswers = Array.from(blanks).some(
        (blank) => blank.textContent?.trim() !== "",
      );

      if (!hasAnyAnswers) {
        notyf.error(
          "Por favor, arrastra algunas respuestas antes de comprobar.",
        );
        return;
      }

      // Check if ALL blanks are filled
      const allBlanksFilled = Array.from(blanks).every(
        (blank) => blank.textContent?.trim() !== "",
      );

      if (!allBlanksFilled) {
        notyf.error(
          "Por favor, completa todas las respuestas antes de comprobar.",
        );
        return;
      }

      let allCorrect = true;

      blanks.forEach((blank) => {
        const isCorrect = validateBlankAnswer(blank);
        if (!isCorrect) allCorrect = false;
        updateBlankStatus(blank, isCorrect);
      });

      isChecked = true;
      updateResult(allCorrect);
    }

    function validateBlankAnswer(blank: Element): boolean {
      const blankId = blank.getAttribute("data-id");
      const userAnswer = blank.textContent?.trim();
      const correctOption = options.find((opt) => opt.position === blankId);

      return correctOption ? userAnswer === correctOption.text.trim() : false;
    }

    function updateBlankStatus(blank: Element, isCorrect: boolean) {
      // FIX: Eliminar iconos existentes antes de agregar nuevos
      const existingIcon = blank.querySelector(".fill-the-blanks-icon");
      if (existingIcon) existingIcon.remove();

      blank.classList.remove("correct", "incorrect");
      blank.classList.add(isCorrect ? "correct" : "incorrect");

      const icon = createStatusIcon(isCorrect);
      blank.appendChild(icon);
    }

    function createStatusIcon(isCorrect: boolean): HTMLSpanElement {
      const icon = document.createElement("span");
      icon.className = "fill-the-blanks-icon";

      const correctSvg =
        '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4caf50" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>';

      const incorrectSvg =
        '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f44336" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>';

      icon.innerHTML = isCorrect ? correctSvg : incorrectSvg;
      return icon;
    }

    // Result handling and API communication
    async function updateResult(allCorrect?: boolean) {
      // Show feedback only if we have a result from checking answers
      if (allCorrect !== undefined) {
        showFeedback(allCorrect);
        await sendResultToAPI(allCorrect);
      }
    }

    function showFeedback(allCorrect: boolean) {
      const feedback = exercise.querySelector("#feedback") as HTMLDivElement;
      if (!feedback) return;

      const correctH3 = feedback.querySelector(
        "#h3-correct",
      ) as HTMLHeadingElement;
      const incorrectH3 = feedback.querySelector(
        "#h3-incorrect",
      ) as HTMLHeadingElement;

      // Hide both first
      if (correctH3) correctH3.style.display = "none";
      if (incorrectH3) incorrectH3.style.display = "none";

      // Show the appropriate one
      if (allCorrect && correctH3) {
        correctH3.style.display = "block";
      } else if (!allCorrect && incorrectH3) {
        incorrectH3.style.display = "block";
      }
    }

    async function sendResultToAPI(allCorrect: boolean) {
      // Validate required data
      if (!grade || !exerciseAttr || !inciso) {
        handleAPIError("Faltan datos para enviar la respuesta al servidor");
        return;
      }

      const exerciseId = parseInt(exerciseAttr, 10);
      if (isNaN(exerciseId)) {
        handleAPIError(`ID de ejercicio inválido: ${exerciseAttr}`);
        return;
      }

      const submissionData = {
        grade: grade,
        exerciseId: exerciseId,
        correct: allCorrect,
        sectionId: inciso,
      };

      try {
        const result = await postExerciseAnswer(submissionData);

        if (result.ok) {
          console.log("Data sent successfully:", result);
          //notyf.success("Respuesta enviada correctamente.");
        } else {
          console.error("Error from API:", result.error);
          //notyf.error("No se pudo enviar la respuesta.");
        }
      } catch (error: any) {
        console.error("Error sending data to API:", error.message || error);
        //notyf.error("No se pudo enviar la respuesta.");
      }
    }

    function handleAPIError(message: string) {
      console.error("API Error:", message);
      //notyf.error(message);
    }
  });
});
