import {
  Chart,
  Legend,
  Tooltip,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  PieController,
  ArcElement,
} from "chart.js";
import { getAnswers } from "@utils/api";

import { totalExercises } from "@utils/helpers/getTopicsData";

Chart.register(
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
  PieController,
  ArcElement,
  Legend,
  Tooltip,
);

let myChartPie: Chart | null = null;
let myChartBar: Chart | null = null;

async function fetchAndRender() {
  const loaderElement = document.getElementById("loader");
  const chartsContainer = document.getElementById("charts-container");

  // Get the canvas element and updates the statistics section
  const completedEx = document.getElementById(
    "completed-exercises",
  ) as HTMLElement;
  const pendingEx = document.getElementById("pending-exercises") as HTMLElement;

  // Check if the elements exist before updating
  if (!loaderElement || !chartsContainer || !completedEx || !pendingEx) {
    return;
  }

  loaderElement.classList.remove("hidden");
  chartsContainer.classList.add("hidden");

  //Get the data from the api
  const resp = await getAnswers();
  console.log("getAnswers: Data from API:", resp);

  // Type-guard: check for error property to determine failure
  if ("error" in resp) {
    console.error("API error:", resp.error);
    loaderElement.classList.add("hidden");
    return;
  }

  loaderElement.classList.add("hidden");
  chartsContainer.classList.remove("hidden");

  // Check if the response is an array
  const answersArray = Array.isArray(resp.answers) ? resp.answers : [];

  // Filter the answers to get correct and incorrect ones
  const correctAnswers = answersArray.filter((a) => a.correct === true);
  console.log("Correct answers:", correctAnswers);
  const incorrectAnswers = answersArray.filter((a) => a.correct === false);
  console.log("Incorrect answers:", incorrectAnswers);
  const unresolvedAnswers =
    totalExercises - correctAnswers.length - incorrectAnswers.length;

  // Data for the pie chart
  const data = {
    labels: ["Correctos", "Incorrectos", "No Resueltos"],
    datasets: [
      {
        label: "Ejercicios",
        data: [
          correctAnswers.length,
          incorrectAnswers.length,
          unresolvedAnswers,
        ],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  // Update the statistics section with the data
  completedEx.innerText = (
    correctAnswers.length + incorrectAnswers.length
  ).toString();
  pendingEx.innerText = (
    totalExercises -
    correctAnswers.length -
    incorrectAnswers.length
  ).toString();

  // Destruir instancias previas si existen
  if (myChartPie) {
    myChartPie.destroy();
    myChartPie = null;
  }
  if (myChartBar) {
    myChartBar.destroy();
    myChartBar = null;
  }

  // re‑crear gráficos

  // Crear el pie chart y guardar la instancia
  const chartPieEl = document.getElementById(
    "chart-pie",
  ) as HTMLCanvasElement | null;
  if (chartPieEl) {
    myChartPie = new Chart(chartPieEl, {
      type: "pie",
      data,
      options: { responsive: true, plugins: { legend: { position: "top" } } },
    });
  }

  // Crear el bar chart y guardar la instancia
  const chartBarEl = document.getElementById(
    "chart-bar",
  ) as HTMLCanvasElement | null;
  if (chartBarEl) {
    myChartBar = new Chart(chartBarEl, {
      type: "bar",
      data: { labels: data.labels, datasets: data.datasets },
      options: { responsive: true, plugins: { legend: { position: "top" } } },
    });
  }
}

document.addEventListener("astro:page-load", fetchAndRender);
document.addEventListener("astro:navigate", fetchAndRender);
