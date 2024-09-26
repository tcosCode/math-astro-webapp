const TRULYFALSY = "TrulyFalsy";
const CHOOSEANSWER = "ChooseAnswer";

const CORRECT = "correct";
const INCORRECT = "incorrect";

export const topics = [
  {
    title: "7mo",
    img: "/img/calculator.svg",
    list: ["No Racionales", "Geometría", "Variables"],
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
    list: ["Estadística", "Geometría", "Funciones"],
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
    list: ["Estadística", "Geometría", "Ecuaciones"],
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
        incisos: [
          {
            id: "a",
            exercise: "8x<sup>3</sup> - 2x",
            answer: [
              { text: "2x(2x-1)(2x-1)", validation: INCORRECT },
              { text: "2x(2x+1)(2x+1)", validation: INCORRECT },
              { text: "2x(2x+1)(2x-1)", validation: CORRECT },
            ],
          },
          {
            id: "b",
            exercise: "3y<sup>2</sup> + 6y - 24",
            answer: [
              { text: "(3y - 6)(y + 4)", validation: CORRECT },
              { text: "(3y + 6)(y + 4)", validation: INCORRECT },
              { text: "(3y + 6)(y - 4)", validation: INCORRECT },
            ],
          },
          {
            id: "c",
            exercise: "18z<sup>3</sup> - 54z",
            answer: [
              { text: "9z(2z<sup>2</sup> + 6)", validation: INCORRECT },
              { text: "9z(9z<sup>2</sup> - 6)", validation: CORRECT },
              { text: "9z(2z<sup>2</sup> + 27)", validation: INCORRECT },
            ],
          },
          {
            id: "d",
            exercise: "b<sup>4</sup> - b<sup>2</sup> - 12",
            answer: [
              { text: "(b+2)(b+2)(b<sup>2</sup>+3)", validation: INCORRECT },
              { text: "(b+2)(b-2)(b<sup>2</sup>+3)", validation: CORRECT },
              { text: "(b-2)(b-2)(b<sup>2</sup>+3)", validation: INCORRECT },
            ],
          },
          {
            id: "e",
            exercise: "2x<sup>5</sup> - 16x<sup>3</sup> + 32x",
            answer: [
              {
                text: "2x(x-2)<sup>2</sup>(x+2)<sup>2</sup>",
                validation: CORRECT,
              },
              {
                text: "2x(x+2)<sup>2</sup>(x+2)<sup>2</sup>",
                validation: INCORRECT,
              },
              {
                text: "2x(x-2)<sup>2</sup>(x-2)<sup>2</sup></sup>",
                validation: INCORRECT,
              },
            ],
          },
          {
            id: "f",
            exercise: "x<sup>2</sup> - 8x + 16",
            answer: [
              { text: "(x - 4)(x + 4)", validation: INCORRECT },
              { text: "(x - 4)(x - 4)", validation: CORRECT },
              { text: "(x + 4)(x + 4)", validation: INCORRECT },
            ],
          },
          {
            id: "g",
            exercise: "m<sup>4</sup> - 256",
            answer: [
              { text: "(m<sup>2</sup>+16)(m+4)(m+4)", validation: INCORRECT },
              { text: "(m<sup>2</sup>+16)(m+4)(m-4)", validation: CORRECT },
              { text: "(m<sup>2</sup>+16)(m-4)(m-4)", validation: INCORRECT },
            ],
          },
          {
            id: "h",
            exercise: "v<sup>2</sup> - 36 + 12v",
            answer: [
              {
                text: "3y(y<sup>6</sup>z - y<sup>3</sup>z - 2z)",
                validation: INCORRECT,
              },
              {
                text: "3yz(y<sup>5</sup> - y<sup>3</sup> - 2)",
                validation: INCORRECT,
              },
              {
                text: "3yz(y<sup>6</sup> - y<sup>3</sup> - 2)",
                validation: CORRECT,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "10mo",
    img: "/img/video-tutorial.svg",
    list: ["Variables", "Potencias", "Raíces"],
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
    list: ["Logarirmos", "Geometría", " Límites"],
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
    list: ["Probabilidades", "Geometría", "Trigonometría"],
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
