import NotyfSingleton from "@src/utils/helpers/notyfInstance";
import { showGameOverMessage } from "@utils/gameOverModal";

/***********************************************/
/* Funciones para los Ejercicios Normales */
/***********************************************/

// Función para obtener estadísticas del progreso
const getProgressStats = () => {
  const totalSubQuestion = document.querySelectorAll(".grid-item").length;
  const solvedSubQuestion = document.querySelectorAll(
    ".grid-item.card-solved",
  ).length;
  const percentage =
    totalSubQuestion > 0
      ? Math.round((solvedSubQuestion / totalSubQuestion) * 100)
      : 0;

  return {
    total: totalSubQuestion,
    solved: solvedSubQuestion,
    percentage,
    remaining: totalSubQuestion - solvedSubQuestion,
  };
};

// Función para actualizar el progreso y verificar completado
export const updateProgress = () => {
  const notyf = NotyfSingleton.getInstance();
  const stats = getProgressStats();

  console.log(
    `📊 Progreso: ${stats.solved}/${stats.total} ejercicios resueltos`,
  );

  // Actualizar título de la página con el progreso
  if (stats.total > 0) {
    document.title = `${document.title.split(" - ")[0]} - ${stats.percentage}% completado`;
  }

  // Mostrar notificaciones de progreso
  if (stats.solved > 0 && stats.solved < stats.total) {
    if (stats.remaining === 1) {
      notyf.success("¡Solo falta 1 inciso más! 🔥");
    } else if (stats.remaining <= 3) {
      notyf.success(
        `¡Excelente progreso! Solo faltan ${stats.remaining} incisos 💪`,
      );
    }
  }

  // Verificar si todos están completos
  if (stats.total > 0 && stats.solved === stats.total) {
    console.log("🎉 ¡TODOS LOS INCISOS COMPLETADOS!");

    // Animación de celebración en el título
    document.title = `🎉 ${document.title.split(" - ")[0]} - ¡COMPLETADO! 🎉`;

    // Mostrar modal con delay para efecto dramático
    setTimeout(() => {
      showGameOverMessage();
      notyf.success(
        "🎊 ¡FELICITACIONES! Has completado el ejercicio. ¡Eres increíble! 🎊",
      );
    }, 500);

    return true;
  }

  return false;
};

// Función para crear un indicador de progreso visual con animación
export const createProgressIndicator = async () => {
  const stats = getProgressStats();
  if (stats.total === 0) return;

  const progressBar = document.querySelector(
    "#progress-indicator",
  ) as HTMLDivElement;
  if (!progressBar) return;

  const progressFill = progressBar.querySelector(
    ".progress-fill",
  ) as HTMLDivElement;
  const progressText = progressBar.querySelector(
    ".progress-text",
  ) as HTMLSpanElement;

  // 1. Animar entrada - deslizar desde la derecha
  progressBar.style.transform = "translateX(0%)";
  progressBar.style.transition = "transform 0.5s ease-out";

  // 2. Esperar que termine la animación de entrada
  await new Promise((resolve) => setTimeout(resolve, 500));

  // 3. Actualizar el contenido de la barra
  if (progressFill) {
    progressFill.style.width = `${stats.percentage}%`;
    progressFill.style.transition = "width 0.3s ease-out";
  }
  if (progressText) {
    progressText.textContent = `${stats.solved}/${stats.total} completados`;
  }

  // 4. Esperar un momento para que se vea la actualización
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // 5. Animar salida - deslizar hacia la derecha
  progressBar.style.transform = "translateX(120%)";
  progressBar.style.transition = "transform 0.5s ease-in";
};

/***********************************************/
/* Funciones para los Ejercicios de Matching */
/***********************************************/

const getProgressStatsMatching = (total: number, solved: number) => {
  const percentage = total > 0 ? Math.round((solved / total) * 100) : 0;

  return {
    total: total,
    solved: solved,
    percentage,
    remaining: total - solved,
  };
};

// Función para actualizar el progreso y verificar completado
export const updateProgressMatching = (total: number, solved: number) => {
  const notyf = NotyfSingleton.getInstance();
  const stats = getProgressStatsMatching(total, solved);

  console.log(
    `📊 Progreso: ${stats.solved}/${stats.total} parejas encontradas`,
  );

  // Actualizar título de la página con el progreso
  if (stats.total > 0) {
    document.title = `${document.title.split(" - ")[0]} - ${stats.percentage}% completado`;
  }

  // Mostrar notificaciones de progreso
  if (stats.solved > 0 && stats.solved < stats.total) {
    if (stats.remaining === 1) {
      notyf.success("¡Solo falta 1 pareja más! 🔥");
    } else if (stats.remaining <= 3) {
      notyf.success(
        `¡Excelente progreso! Solo faltan ${stats.remaining} parejas 💪`,
      );
    }
  }

  // Verificar si todos están completos
  if (stats.total > 0 && stats.solved === stats.total) {
    console.log("🎉 ¡TODAS LAS PAREJAS ENCONTRADAS!");

    // Animación de celebración en el título
    document.title = `🎉 ${document.title.split(" - ")[0]} - ¡COMPLETADO! 🎉`;

    // Mostrar modal con delay para efecto dramático
    setTimeout(() => {
      showGameOverMessage();
      notyf.success(
        "🎊 ¡FELICITACIONES! Has completado el ejercicio. ¡Eres increíble! 🎊",
      );
    }, 500);

    return true;
  }

  return false;
};

// Función para crear un indicador de progreso visual con animación
export const createProgressIndicatorMatching = async (
  total: number,
  solved: number,
) => {
  const stats = getProgressStatsMatching(total, solved);
  if (stats.total === 0) return;

  const progressBar = document.querySelector(
    "#progress-indicator",
  ) as HTMLDivElement;
  if (!progressBar) return;

  const progressFill = progressBar.querySelector(
    ".progress-fill",
  ) as HTMLDivElement;
  const progressText = progressBar.querySelector(
    ".progress-text",
  ) as HTMLSpanElement;

  // 1. Animar entrada - deslizar desde la derecha
  progressBar.style.transform = "translateX(0%)";
  progressBar.style.transition = "transform 0.5s ease-out";

  // 2. Esperar que termine la animación de entrada
  await new Promise((resolve) => setTimeout(resolve, 500));

  // 3. Actualizar el contenido de la barra
  if (progressFill) {
    progressFill.style.width = `${stats.percentage}%`;
    progressFill.style.transition = "width 0.3s ease-out";
  }
  if (progressText) {
    progressText.textContent = `${stats.solved}/${stats.total} encontradas`;
  }

  // 4. Esperar un momento para que se vea la actualización
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // 5. Animar salida - deslizar hacia la derecha
  progressBar.style.transform = "translateX(120%)";
  progressBar.style.transition = "transform 0.5s ease-in";
};
