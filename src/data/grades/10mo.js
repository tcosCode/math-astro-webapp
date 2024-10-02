import { constants } from "@data/constants";

const {
  TRUEFALSE,
  CHOOSEANSWER,
  CORRECT,
  INCORRECT,
  VALIDATE_TRUE,
  VALIDATE_FALSE,
} = constants;

export const grades10mo = {
  title: "10mo",
  img: "/img/video-tutorial.svg",
  list: ["Variables", "Potencias", "Raíces"],
  exercises: [
    {
      id: "1",
      type: TRUEFALSE,
      title: "Seleccionar",
      texto: `Función:
Una función es una correspondencia que a cada elemento de un conjunto A asocia un único elemento de un conjunto B.
      Escoja Verdadero o Falso segun corresponda:`,
      incisos: [
        {
          id: "a",
          exercise: `A-------------B
          0------------- 1
          3------------- 1
          -1----------- -8
          12----------- -2
          12---------  -2,5
          Identificar si es función. Fundamente.`,
          validation: VALIDATE_FALSE,
        },
        {
          id: "b",
          exercise: "La relación {R -- R; y = x/3 - 4; es una función:",
          validation: VALIDATE_TRUE,
        },
        {
          id: "c",
          exercise: "La relación {N -- N; y = x/2 - 4; es una función:",
          validation: VALIDATE_FALSE,
        },
        {
          id: "d",
          exercise:
            "La relación de R en R que a cada número real le hace corresponder su raíz cuadrada:",
          validation: VALIDATE_FALSE,
        },
        {
          id: "e",
          exercise: "La relación de Q en Q tal que f(x) = -3x + 4:",
          validation: VALIDATE_TRUE,
        },
        {
          id: "f",
          exercise: "La relación de Q en Q+ tal que f(x) = 1/3 x:",
          validation: VALIDATE_FALSE,
        },
        {
          id: "g",
          exercise: "La relación de N en R tal que f(x) = x2 - 4x:",
          validation: VALIDATE_TRUE,
        },
        {
          id: "h",
          exercise: "La relación de Z+ en Z tal que f(x) = x3 + 3:",
          validation: VALIDATE_TRUE,
        },
      ],
    },
  ],
};
