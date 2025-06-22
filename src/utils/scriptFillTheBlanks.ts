import {
  createProgressIndicator,
  updateProgress,
} from "@utils/scriptProgressIndicator";
import { sendData } from "@utils/helpers/sendData";
import NotyfSingleton from "@src/utils/helpers/notyfInstance";

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
    let isDisabled = false; // Nueva variable para controlar el estado deshabilitado
    let draggedOptionId: string | null = null;

    // Initialize all event listeners for the current exercise
    initializeEventListeners();

    // Inicializar progreso con delay
    setTimeout(() => {
      createProgressIndicator();
      updateProgress();
    }, 100);

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

    // Nueva función para deshabilitar todas las interacciones
    function disableAllInteractions() {
      isDisabled = true;

      // Deshabilitar el botón de verificar
      const checkButton = exercise.querySelector(
        "#checkAnswers",
      ) as HTMLButtonElement;
      if (checkButton) {
        checkButton.disabled = true;
        checkButton.style.opacity = "0.5";
        checkButton.style.cursor = "not-allowed";
      }

      // Deshabilitar drag and drop en las opciones
      exercise.querySelectorAll(".option").forEach((option) => {
        const optionEl = option as HTMLElement;
        optionEl.draggable = false;
        optionEl.style.opacity = "0.6";
        optionEl.style.cursor = "not-allowed";
        optionEl.style.pointerEvents = "none";
      });

      // Deshabilitar los espacios en blanco
      exercise.querySelectorAll(".blank").forEach((blank) => {
        const blankEl = blank as HTMLElement;
        blankEl.style.pointerEvents = "none";
        blankEl.style.cursor = "not-allowed";
      });
    }

    // Hide feedback when user interacts after checking answers
    function hideFeedbackIfNeeded() {
      if (isChecked && !isDisabled) {
        // Solo ocultar si no está deshabilitado
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
      if (isDisabled) return; // Prevenir interacción si está deshabilitado

      const target = e.target as HTMLElement;
      draggedOptionId = target.getAttribute("data-id");
      // hideFeedbackIfNeeded();
    }

    function handleTouchMove(e: TouchEvent) {
      if (isDisabled) return; // Prevenir interacción si está deshabilitado
      e.preventDefault();
    }

    function handleTouchEnd(e: TouchEvent) {
      if (isDisabled) return; // Prevenir interacción si está deshabilitado

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
      if (isDisabled) {
        e.preventDefault(); // Prevenir drag si está deshabilitado
        return;
      }

      const target = e.target as HTMLElement;
      const optionId = target.getAttribute("data-id") || "";
      e.dataTransfer?.setData("text", optionId);
      //hideFeedbackIfNeeded();
    }

    function handleDragOver(e: DragEvent) {
      if (isDisabled) return; // Prevenir interacción si está deshabilitado
      e.preventDefault();
    }

    function handleDrop(e: DragEvent) {
      if (isDisabled) return; // Prevenir interacción si está deshabilitado

      e.preventDefault();

      hideFeedbackIfNeeded();

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
      if (isDisabled) return; // Prevenir interacción si está deshabilitado

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
      if (isDisabled) return; // Prevenir verificación si está deshabilitado

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

      // Si todas las respuestas son correctas, deshabilitar interacciones
      if (allCorrect) {
        disableAllInteractions();
        exercise.classList.add("card-solved");

        // Actualizar progreso y verificar completado
        createProgressIndicator();
        setTimeout(updateProgress, 100);
      }
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

      // --- Send data to the server ---
      sendData(submissionData);
    }

    function handleAPIError(message: string) {
      console.error("API Error:", message);
      //notyf.error(message);
    }
  });
});
