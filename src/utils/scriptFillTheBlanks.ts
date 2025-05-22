import { Notyf } from "notyf";
import "notyf/notyf.min.css";
import { postExerciseAnswer } from "@utils/api"; // Use relative path for client-side script

// Definición de la interfaz Options que describe cada opción
interface Options {
  id: string; // Unique identifier for the option
  text: string; // Text of the option that the user will drag
  position: string; // Identifier of the correct target position in the exercise
}

// Wait until the Astro page is fully loaded
document.addEventListener("astro:page-load", async () => {
  // Initialize Notyf for notifications
  const notyf = new Notyf({
    duration: 3000,
    position: { x: "right", y: "top" },
  });

  // Iterate over each exercise represented by elements with the class .grid-item
  document.querySelectorAll(".grid-item").forEach((exercise) => {
    const grade = exercise.getAttribute("data-grade"); // Get the exercise grade
    const exerciseAttr = exercise.getAttribute("data-exercise"); // Get the exercise ID attribute (as string)
    const inciso = exercise.getAttribute("data-inciso"); // Get the exercise inciso (section ID) attribute

    // Store all options within the current exercise
    const options: Options[] = Array.from(
      exercise.querySelectorAll(".option"),
    ).map((optionEl) => ({
      id: optionEl.getAttribute("data-id") || "", // Unique identifier for each option
      text: optionEl.textContent?.trim() || "", // Visible text in the option (trim added for safety)
      position: optionEl.getAttribute("data-position") || "", // Correct target position for the option
    }));

    let isChecked = false; // Controls if the answers have already been checked

    // Set up all necessary events for the current exercise
    setupEventListeners(exercise);

    let draggedOptionId: string | null = null; // Global variable for the ID of the dragged option

    function setupEventListeners(exercise: Element) {
      // Add event listener to the "Check Answers" button
      exercise
        .querySelector("#checkAnswers")
        ?.addEventListener("click", checkAnswers);

      // Set up events for each option (draggable items)
      exercise.querySelectorAll(".option").forEach((optionEl) => {
        optionEl.addEventListener(
          "dragstart",
          handleDragStart as EventListener,
        );
        optionEl.addEventListener(
          "touchstart",
          handleTouchStart as EventListener,
        ); // Touch drag start
      });

      // Set up events for each blank space (drop targets)
      exercise.querySelectorAll(".blank").forEach((blank) => {
        blank.addEventListener("dragover", handleDragOver as EventListener); // Allow drop
        blank.addEventListener("drop", handleDrop as EventListener); // Drop action
        blank.addEventListener("click", handleBlankClick); // Clear content on click
        blank.addEventListener("touchmove", handleTouchMove as EventListener); // Touch move
        blank.addEventListener("touchend", handleTouchEnd as EventListener); // Touch end
      });
    }

    // On touching an option, save its ID in the global variable
    function handleTouchStart(e: TouchEvent) {
      const target = e.target as HTMLElement;
      draggedOptionId = target.getAttribute("data-id"); // Store the ID of the touched option
      // Add a visual cue for the dragged item if needed
      // target.classList.add('dragging');
    }

    // On moving the finger, prevent default behavior
    function handleTouchMove(e: TouchEvent) {
      e.preventDefault(); // Allow drag action on mobile
      // Add logic here if you want to visually track the dragged item's position
    }

    // On releasing the option, simulate the "drop" event on the target element
    function handleTouchEnd(e: TouchEvent) {
      const touch = e.changedTouches[0];
      // Use elementFromPoint to find the element under the touch point
      const target = document.elementFromPoint(touch.clientX, touch.clientY);
      // Find the closest blank element to the touch point
      const blankEl = target?.closest(".blank") as HTMLElement;

      // Remove visual cue from the dragged item if added in handleTouchStart
      // if (draggedOptionId) {
      //     const draggedOptionEl = exercise.querySelector(`.option[data-id="${draggedOptionId}"]`);
      //     draggedOptionEl?.classList.remove('dragging');
      // }

      if (blankEl && draggedOptionId) {
        const option = options.find((opt) => opt.id === draggedOptionId);

        if (option) {
          swapText(blankEl, option);
          isChecked = false;
          // updateResult is called later, after checkAnswers
          // updateResult("", exercise); // No need to call here
        }
      }
      draggedOptionId = null; // Reset the variable after the drop
    }

    // Save the ID of the dragged option in the data transfer event
    function handleDragStart(e: DragEvent) {
      const target = e.target as HTMLElement;
      const optionId = target.getAttribute("data-id") || "";
      e.dataTransfer?.setData("text", optionId);
      // Add a visual cue for the dragged item
      // target.classList.add('dragging');
    }

    // Allow the blank space to accept the dragged element
    function handleDragOver(e: DragEvent) {
      e.preventDefault(); // Necessary to allow dropping
      // Add visual feedback to the blank element being dragged over
      // (e.target as HTMLElement).classList.add('drag-over');
    }

    // On dropping an option into a blank space, place the option's text in the space
    function handleDrop(e: DragEvent) {
      e.preventDefault();
      // Remove visual feedback from the blank element
      // (e.target as HTMLElement).classList.remove('drag-over');

      const optionId = e.dataTransfer?.getData("text"); // Get the option ID
      const option = options.find((opt) => opt.id === optionId); // Find the option in the list
      const blankEl = e.target as HTMLElement; // The blank space where it was dropped

      // Remove visual cue from the dragged item if added in handleDragStart
      // if (optionId) {
      //     const draggedOptionEl = exercise.querySelector(`.option[data-id="${optionId}"]`);
      //     draggedOptionEl?.classList.remove('dragging');
      // }

      if (option && blankEl) {
        swapText(blankEl, option); // Place the option's text in the blank space
        isChecked = false; // Mark the exercise as unchecked
        // updateResult is called later, after checkAnswers
        // updateResult("", exercise); // No need to call here
      }
    }

    // On clicking a blank space, empty it to allow new input
    function handleBlankClick(e: Event) {
      const blankEl = e.target as HTMLElement;
      blankEl.textContent = ""; // Clear the text
      blankEl.classList.remove("correct", "incorrect"); // Remove previous styles
      // Remove any status icons
      blankEl.querySelector(".icon")?.remove();
      isChecked = false; // Mark the exercise as unchecked
      updateResult("", exercise); // Reset the visual result message (without sending to API)
    }

    // Place the text of an option into a blank space and remove previous styles
    function swapText(blankEl: HTMLElement, option: Options) {
      blankEl.textContent = option.text; // Place the option's text in the blank space
      blankEl.classList.remove("correct", "incorrect"); // Remove styles
      // Remove any status icons
      blankEl.querySelector(".icon")?.remove();
      isChecked = false; // Mark the exercise as unchecked
      // updateResult("", exercise); // No need to call here, checkAnswers will call it
    }

    // Check if the answers in the blank spaces are correct
    function checkAnswers() {
      const blanks = exercise.querySelectorAll(".blank"); // Get all blank spaces
      let allCorrect = true; // Global flag to check if all answers are correct

      blanks.forEach((blank) => {
        const id = blank.getAttribute("data-id"); // Get the position ID of the blank space
        const answer = blank.textContent?.trim(); // Get and trim the text in the blank space

        // Find the correct option based on its position
        // Ensure correctOption is found and has a text property before comparing
        const correctOption = options.find((opt) => opt.position === id);

        // Compare the trimmed answer text with the trimmed correct option text
        const isCorrect = correctOption
          ? answer === correctOption.text.trim()
          : false; // If no correct option found for this blank position, it's incorrect

        if (!isCorrect) allCorrect = false; // If any answer is incorrect, mark as false
        updateBlankStatus(blank, isCorrect); // Update the visual status of the blank space
      });

      isChecked = true; // Mark the exercise as checked
      // Call updateResult to show the overall result and send data to API
      updateResult(
        allCorrect
          ? "¡Felicidades! ¡Todas las respuestas son correctas!"
          : "Algunas respuestas son incorrectas. ¡Inténtalo de nuevo!",
        exercise,
        allCorrect, // Pass the boolean result
      ); // Show the overall exercise result and send to API
    }

    // Update the visual status of each blank space based on whether the answer is correct or not
    function updateBlankStatus(blank: Element, isCorrect: boolean) {
      const existingIcon = blank.querySelector(".icon"); // Look for previous status icons
      if (existingIcon) existingIcon.remove(); // Remove the icon if it exists
      blank.classList.remove("correct", "incorrect"); // Remove previous status classes
      blank.classList.add(isCorrect ? "correct" : "incorrect"); // Add class based on status

      const icon = document.createElement("span"); // Create a new status icon
      icon.className = "icon"; // Assign class for styling the icon
      // SVG icons for correct (check) and incorrect (cross)
      icon.innerHTML = isCorrect
        ? '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4caf50" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>'
        : '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f44336" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>';
      blank.appendChild(icon); // Add the icon to the blank space
    }

    // Update the global result message for each exercise AND SEND DATA TO THE API
    // Marked as async because it uses await
    async function updateResult(
      message: string,
      parentExercise: Element,
      allCorrect?: boolean, // This parameter is now used to determine correctness for API
    ) {
      // --- Validation before sending to API ---
      // Only send data to API if allCorrect is explicitly true or false (meaning checkAnswers was run)
      if (allCorrect === undefined || !grade || !exerciseAttr || !inciso) {
        // Log error if data is missing, but don't attempt to send to API
        notyf.error("Faltan datos para enviar la respuesta al servidor");
        console.error("updateResult: Data missing for API submission.");
        // Still update the UI message
        const resultEl = parentExercise.querySelector("#result");
        if (resultEl) {
          resultEl.textContent = message;
          resultEl.className = `result ${allCorrect === true ? "correct" : allCorrect === false ? "incorrect" : ""}`;
        }
        return; // Exit the function if data is incomplete
      }

      // --- Correct the exerciseId type ---
      const exerciseId = parseInt(exerciseAttr, 10); // Parse exercise ID as a number
      if (isNaN(exerciseId)) {
        console.error(
          "updateResult: Invalid exercise ID attribute:",
          exerciseAttr,
        );
        // Still update the UI message
        const resultEl = parentExercise.querySelector("#result");
        if (resultEl) {
          resultEl.textContent = message;
          resultEl.className = `result ${allCorrect === true ? "correct" : allCorrect === false ? "incorrect" : ""}`;
        }
        return;
      }

      // --- Prepare data for POST request ---
      // This structure must match the ExerciseSubmissionData interface in ../utils/api.ts
      const submissionData = {
        grade: grade, // string
        exerciseId: exerciseId, // number
        correct: allCorrect, // boolean
        sectionId: inciso, // string - included because the API interface requires it
      };

      // --- Send data to the server using the API utility ---
      try {
        const result = await postExerciseAnswer(submissionData); // Use await here

        if (result.ok) {
          // Handle success (e.g., show a success message)
          console.log("Data sent successfully:", result);
          notyf.success("Respuesta enviada correctamente.");
        } else {
          // Handle error (e.g., show an error message)
          console.error("Error from API:", result.error);
          notyf.error("No se pudo enviar la respuesta.");
        }
      } catch (error: any) {
        console.error("Error sending data to API:", error.message || error);
        notyf.error("No se pudo enviar la respuesta.");
      }

      // --- Update the UI message regardless of API send status ---
      const resultEl = parentExercise.querySelector("#result"); // Select the global result element
      if (resultEl) {
        resultEl.textContent = message; // Update the text message
        // Apply style based on the overall correctness
        if (allCorrect !== undefined)
          resultEl.className = `result ${allCorrect ? "correct" : "incorrect"}`;
        else resultEl.className = "result"; // Restore basic style if no result
      }
    }
  });
});
