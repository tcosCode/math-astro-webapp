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
      title: "Seleccionar V o F",
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
    {
      id: "2",
      type: TRUEFALSE,
      title: "Seleccionar V o F",
      texto: "Seleccionar V o F",
      incisos: [
        {
          id: "a",
          exercise: "La relación { R --  R: x/3 - 4} es una función ",
          validation: VALIDATE_TRUE,
        },
        {
          id: "b",
          exercise: "La relación { R -- R: y= x/2 - 4\\} es una función.",
          validation: "VALIDATE_FALSE",
        },
        {
          id: "c",
          exercise:
            "La correspondencia definida de R en R que a cada número real le hace corresponder su raíz cuadrada.",
          validation: "VALIDATE_FALSE",
        },
      ],
    },
    {
      id: "3",
      type: CHOOSEANSWER,
      title: "Función lineal",
      texto: "Calcular en la libreta y seleccionar la respuesta correcta: ",
      incisos: [
        {
          id: "a",
          exercise: "m = -1 y su gráfica pasa por P(0; 6).",
          answer: [
            {
              text: "y = -x - 6",
              validation: INCORRECT,
            },
            {
              text: "y = x + 6",
              validation: INCORRECT,
            },
            {
              text: "y = -x + 6",
              validation: CORRECT,
            },
          ],
        },
        {
          id: "b",
          exercise: "n = 2/3 y su gráfica pasa por el punto M(-1; 1/3)",
          answer: [
            {
              text: "y = -1/3x + 2/3",
              validation: INCORRECT,
            },
            {
              text: "y = 1/3x - 2/3",
              validation: INCORRECT,
            },
            {
              text: "y = 1/3x + 2/3",
              validation: CORRECT,
            },
          ],
        },
        {
          id: "c",
          exercise: "Su gráfica pasa por los puntos A(-2; 2) y B(5; -5)",
          answer: [
            {
              text: "y = x",
              validation: INCORRECT,
            },
            {
              text: "y = x + 1",
              validation: INCORRECT,
            },
            {
              text: "y = -x",
              validation: CORRECT,
            },
          ],
        },
      ],
    },
    {
      id: "4",
      type: CHOOSEANSWER,
      title: "Monotonía de Funciones",
      texto: "Seleccionar la monotonía de la función ",
      incisos: [
        {
          id: "a",
          exercise: "a) a(x) = -x + 6",
          answer: [
            {
              text: "Creciente ",
              validation: INCORRECT,
            },
            {
              text: "Decreciente ",
              validation: CORRECT,
            },
            {
              text: "Ninguna ",
              validation: INCORRECT,
            },
          ],
        },
        {
          id: "b",
          exercise: "b) = -x + 1/3",
          answer: [
            {
              text: "Creciente ",
              validation: INCORRECT,
            },
            {
              text: "Decreciente ",
              validation: CORRECT,
            },
            {
              text: "Ninguna ",
              validation: INCORRECT,
            },
          ],
        },
        {
          id: "c",
          exercise: "c(x) = x - 6",
          answer: [
            {
              text: "Creciente",
              validation: CORRECT,
            },
            {
              text: "Decreciente ",
              validation: INCORRECT,
            },
            {
              text: "Ninguna ",
              validation: INCORRECT,
            },
          ],
        },
        {
          id: "d",
          exercise: "d(x) = x + 6",
          answer: [
            {
              text: "Creciente ",
              validation: CORRECT,
            },
            {
              text: "Decreciente ",
              validation: INCORRECT,
            },
            {
              text: "Ninguna ",
              validation: INCORRECT,
            },
          ],
        },
        {
          id: "e",
          exercise: "e(x) = x",
          answer: [
            {
              text: "Creciente ",
              validation: CORRECT,
            },
            {
              text: "Decreciente ",
              validation: INCORRECT,
            },
            {
              text: "Ninguna ",
              validation: INCORRECT,
            },
          ],
        },
        {
          id: "f",
          exercise: "f(x) = -x",
          answer: [
            {
              text: "Creciente ",
              validation: INCORRECT,
            },
            {
              text: "Decreciente ",
              validation: CORRECT,
            },
            {
              text: "Ninguna ",
              validation: INCORRECT,
            },
          ],
        },
      ],
    },
    {
      id: "5",
      type: TRUEFALSE,
      title: "Función cuadrática",
      texto: "Seleccionar V si la función es cuadrática y F para otros casos",
      incisos: [
        {
          id: "a",
          exercise: "f(x) = x<sup>2</sup> - 3\n",
          validation: VALIDATE_TRUE,
        },
        {
          id: "b",
          exercise: "f(x) = x<sup>2</sup> - x + 1\n\n",
          validation: VALIDATE_TRUE,
        },
        {
          id: "c",
          exercise: "k(x) = x<sup>3</sup> -2x + 3",
          validation: VALIDATE_FALSE,
        },
        {
          id: "d",
          exercise: "h(x) = 2x + x<sup>2<sup>",
          validation: VALIDATE_TRUE,
        },
        {
          id: "e",
          exercise: "f(x) = 2x - 3",
          validation: VALIDATE_FALSE,
        },
        {
          id: "f",
          exercise: "h(x) = 1/3 x<sup>2</sup> + 1,5",
          validation: VALIDATE_TRUE,
        },
      ],
    },
    {
      id: "6",
      type: CHOOSEANSWER,
      title: "Función lineal",
      texto: "Seleccionar los valores de las funciones para x=5",
      incisos: [
        {
          id: "a",
          exercise: "a) a(x) = -x + 6",
          answer: [
            {
              text: "a(5) = 0",
              validation: INCORRECT,
            },
            {
              text: "a(5) = 4",
              validation: INCORRECT,
            },
            {
              text: "a(5) =1",
              validation: CORRECT,
            },
          ],
        },
        {
          id: "b",
          exercise: "b(x) = -x + 1/3",
          answer: [
            {
              text: "b(5) = -14/3",
              validation: CORRECT,
            },
            {
              text: "b(5) = 14/3",
              validation: INCORRECT,
            },
            {
              text: "b(5) = 13/3",
              validation: INCORRECT,
            },
          ],
        },
        {
          id: "c",
          exercise: "c(x) = -x",
          answer: [
            {
              text: "c(5) = 4",
              validation: INCORRECT,
            },
            {
              text: "c(5) = 5",
              validation: INCORRECT,
            },
            {
              text: "c(5) = -5",
              validation: CORRECT,
            },
          ],
        },
        {
          id: "d",
          exercise: "d(x) = 2x - 6",
          answer: [
            {
              text: "d(5) = -4",
              validation: INCORRECT,
            },
            {
              text: "d(5) = 4",
              validation: CORRECT,
            },
            {
              text: "d(5) = 5",
              validation: INCORRECT,
            },
          ],
        },
      ],
    },
    {
      id: "7",
      type: "ChooseAnswer",
      title: "Logaritmo",
      texto: "Enlazar el logaritmo con su forma exponencial ",
      incisos: [
        {
          id: "a",
          exercise: "log<sub>2</sub>8 = 3",
          answer: [
            {
              text: "4<sup>0,5</sup> = 2",
              validation: "incorrect",
            },
            {
              text: "5<sup><sup><sup>1</sup>/<sub>3</sub></sup></sup> = 5<sup><sup><sup>1</sup>/<sub>3 </sub></sup></sup>",
              validation: "incorrect",
            },
            {
              text: "2<sup>3</sup> = 8",
              validation: "correct",
            },
          ],
        },
        {
          id: "b",
          exercise: "log<sub>4</sub>2 = 0,5",
          answer: [
            {
              text: "2<sup>3</sup> 8",
              validation: "incorrect",
            },
            {
              text: "4<sup>0,5</sup> = 2",
              validation: "correct",
            },
            {
              text: "3<sup>3</sup> = 27",
              validation: "incorrect",
            },
          ],
        },
        {
          id: "c",
          exercise:
            "log<sub>5</sub>5<sup><sup>1</sup>/<sub>3</sub></sup> = 5<sup>1</sup>/<sub>3</sub>",
          answer: [
            {
              text: "3<sup>3</sup> = 27",
              validation: "incorrect",
            },
            {
              text: "5<sup>3</sup> = 5<sup>3</sup>",
              validation: "incorrect",
            },
            {
              text: "5<sup><sup><sup>1</sup>/<sub>3</sub></sup></sup> = 5<sup><sup><sup>1</sup>/<sub>3</sub></sup></sup>",
              validation: "correct",
            },
          ],
        },
        {
          id: "d",
          exercise: "log<sub>3</sub>27 = 3",
          answer: [
            {
              text: "2<sup>3</sup> = 8",
              validation: "incorrect",
            },
            {
              text: "3<sup>2</sup> = 9",
              validation: "incorrect",
            },
            {
              text: "3<sup>3</sup> = 27",
              validation: "correct",
            },
          ],
        },
        {
          id: "e",
          exercise: "log<sub>2</sub>0,125 = -3",
          answer: [
            {
              text: "4<sup>0,5</sup> = 2",
              validation: "incorrect",
            },
            {
              text: "2<sup>-3</sup> = 0,125",
              validation: "correct",
            },
            {
              text: "3<sup>3</sup> = 27",
              validation: "incorrect",
            },
          ],
        },
        {
          id: "f",
          exercise: "log<sub>4</sub>16 = 2 ",
          answer: [
            {
              text: "4<sup>2</sup> = 16",
              validation: "correct",
            },
            {
              text: "4<sup>3</sup> = 64",
              validation: "incorrect",
            },
            {
              text: "4<sup>2</sup> = 4<sup>2</sup>",
              validation: "incorrect",
            },
          ],
        },
      ],
    },
  ],
};
