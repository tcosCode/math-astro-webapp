const TRULYFALSY = "TrulyFalsy";
const CHOOSEANSWER = "ChooseAnswer";

const CORRECT = "correct";
const INCORRECT = "incorrect";

export const topics = [
  {
    title: "7mo",
    img: "/img/calculator.svg",
    list: ["Álgebra", "Geometría", "Números Racionales"],
    exercises: [
      {
        id: "1",
        type: "",
        title: "Componer",
        texto: "Por añadir:",
      },
    ],
  },
  {
    title: "8vo",
    img: "/img/book-lover.svg",
    list: ["Funciones", "Estadística", "Probabilidad"],
    exercises: [
      {
        id: "1",
        type: "",
        title: "Componer",
        texto: "Por añadir:",
      },
    ],
  },
  {
    title: "9no",
    img: "/img/school-36.svg",
    list: ["Trigonometría", "Geometría Analítica", "Polinomios"],
    exercises: [
      {
        id: "1",
        type: CHOOSEANSWER,
        title: "Descomponer en factores",
        texto:
          "Descomponer en factores. Trabaje en su libreta y luego seleccione una opción como resultado:",
        incisos: [
          {
            id: "a",
            exercise: "8a - 8b",
            answer: [
              { text: "(a - 8)(b - 8)", validation: INCORRECT },
              { text: "8(a - 8b)", validation: INCORRECT },
              { text: "8(a - b)", validation: CORRECT },
            ],
          },
          {
            id: "b",
            exercise: "x<sup>2</sup> - 2x - 48",
            answer: [
              { text: "(x - 8)(x - 6)", validation: INCORRECT },
              { text: "(x - 8)(x + 6)", validation: CORRECT },
              { text: "D &lt; 0", validation: INCORRECT },
            ],
          },
          {
            id: "c",
            exercise: "y<sup>2</sup> - 49",
            answer: [
              { text: "(y + 7)(y - 7)", validation: INCORRECT },
              { text: "(y + 7)(y + 7y)", validation: INCORRECT },
              { text: "(y - 7)(y + 7)", validation: CORRECT },
            ],
          },
          {
            id: "d",
            exercise: "2m<sup>2</sup> - 17m - 48",
            answer: [
              { text: "(2m + 1)(m + 8)", validation: INCORRECT },
              { text: "(2m - 1)(m - 8)", validation: CORRECT },
              { text: "(2m + 1)(m - 8)", validation: INCORRECT },
            ],
          },
          {
            id: "e",
            exercise: "y<sup>2</sup> - 7",
            answer: [
              {
                text: "(y - 7<sup>1/2</sup>)(y - 7<sup>1/2</sup>)",
                validation: INCORRECT,
              },
              {
                text: "(y + 7<sup>1/2</sup>)(y + 7<sup>1/2</sup>)",
                validation: INCORRECT,
              },
              {
                text: "(y + 7<sup>1/2</sup>)(y - 7<sup>1/2</sup>)",
                validation: CORRECT,
              },
            ],
          },
          {
            id: "f",
            exercise: "5n<sup>2</sup> + 12n + 4",
            answer: [
              { text: "(5n + 2)(n - 2)", validation: INCORRECT },
              { text: "(5n + 2)(n + 2)", validation: CORRECT },
              { text: "(5n - 2)(n + 2)", validation: INCORRECT },
            ],
          },
          {
            id: "g",
            exercise: "x<sup>2</sup> - x + 8",
            answer: [
              { text: "D &lt; 0", validation: CORRECT },
              { text: "(x + 2)(x + 4)", validation: INCORRECT },
              { text: "(x - 2)(x + 4)", validation: INCORRECT },
            ],
          },
          {
            id: "h",
            exercise: "v<sup>2</sup> - 36 + 12v",
            answer: [
              { text: "(v - 14.4)(v - 2.4)", validation: CORRECT },
              { text: "(v + 14.4)(v + 2.4)", validation: INCORRECT },
              { text: "(v + 14.4)(v - 2.4)", validation: INCORRECT },
            ],
          },
        ],
      },
      {
        id: "2",
        type: CHOOSEANSWER,
        title: "Factorizar",
        texto:
          "Factorizar completamente. Trabaje en su libreta y luego seleccione una opción como resultado:",
      },
    ],
  },
  {
    title: "10mo",
    img: "/img/video-tutorial.svg",
    list: ["Álgebra Avanzada", "Geometría Euclidiana", "Funciones y Gráficas"],
    exercises: [
      {
        id: "1",
        type: CHOOSEANSWER,
        title: "Componer",
        texto: "Por añadir:",
      },
    ],
  },
  {
    title: "11no",
    img: "/img/coach-85.svg",
    list: ["Cálculo Diferencial", "Estadística", "Geometría Analítica"],
    exercises: [
      {
        id: "1",
        type: TRULYFALSY,
        title: "Componer",
        texto: "Por añadir:",
      },
    ],
  },
  {
    title: "12vo",
    img: "/img/presentation.svg",
    list: ["Cálculo Integral", "Álgebra Lineal", "Mat. Discretas"],
    exercises: [
      {
        id: "1",
        type: TRULYFALSY,
        title: "Componer",
        texto: "Por añadir:",
      },
    ],
  },
];
