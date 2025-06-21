import { postExerciseAnswer } from "@utils/api";
//import NotyfSingleton from "@utils/helpers/notyfInstance";

export async function sendData(submissionData: any) {
  //const notyf = NotyfSingleton.getInstance();
  try {
    const result = await postExerciseAnswer(submissionData);
    if (result.ok) {
      // Handle success (e.g., show a success message)
      console.log("Data sent successfully:", result);
      //notyf.success("Respuesta enviada correctamente.");
    } else {
      // Handle error (e.g., show an error message)
      console.error("Error from API:", result.error);
      //notyf.error("Error: No se pudo enviar la respuesta.");
    }
  } catch (error) {
    console.error("Error sending data to API:", error);
    //notyf.error("Error: No se pudo enviar la respuesta.");
  }
}
