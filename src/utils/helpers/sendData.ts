import type { ExerciseSubmissionData } from "@types";
import { postExerciseAnswer } from "@utils/api";
import NotyfSingleton from "@utils/helpers/notyfInstance";

export async function sendData(submissionData: ExerciseSubmissionData) {
  const notyf = NotyfSingleton.getInstance();
  try {
    const result = await postExerciseAnswer(submissionData);
    if (result.ok) {
      console.log("Data sent successfully:", result);
      setTimeout(() => {
        notyf.success("Respuesta enviada correctamente al servidor.");
      }, 2000);
    } else {
      console.error("Error from API:", result.error);
      notyf.error("Error: No se pudo enviar la respuesta.");
    }
  } catch (error) {
    console.error("Error sending data to API:", error);
    notyf.error("Error: No se pudo enviar la respuesta.");
  }
}
