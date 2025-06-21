import { Notyf } from "notyf";
import "notyf/notyf.min.css";
import notyfOptions from "@utils/helpers/notyfOptions";
import { showGameOverMessage } from "@utils/gameOverModal";

// Initialize Notyf for notifications
const notyf = new Notyf(notyfOptions);

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
      notyf.success("¡Solo falta 1 ejercicio más! 🔥");
    } else if (stats.remaining <= 3) {
      notyf.success(
        `¡Excelente progreso! Solo faltan ${stats.remaining} ejercicios 💪`,
      );
    }
  }

  // Verificar si todos están completos
  if (stats.total > 0 && stats.solved === stats.total) {
    console.log("🎉 ¡TODOS LOS EJERCICIOS COMPLETADOS!");

    // Animación de celebración en el título
    document.title = `🎉 ${document.title.split(" - ")[0]} - ¡COMPLETADO! 🎉`;

    // Mostrar modal con delay para efecto dramático
    setTimeout(() => {
      showGameOverMessage();
      notyf.success(
        "🎊 ¡FELICITACIONES! Has completado todos los ejercicios. ¡Eres increíble! 🎊",
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
