import { constants } from "@data/constants";

const {
  TRUEFALSE,
  CHOOSEANSWER,
  CORRECT,
  INCORRECT,
  VALIDATE_TRUE,
  VALIDATE_FALSE,
} = constants;

export const grades11no = {
  title: "11no",
  img: "/img/coach-85.svg",
  list: ["Logarirmos", "Geometría", " Límites"],
  exercises: [
    {
      id: "1",
      type: "ChooseAnswer",
      title: "Distancia entre puntos ",
      texto: "Calcular luego seleccionar la respuesta correcta.",
      incisos: [
        {
          id: "a",
          exercise:
            "A(-2; 1)&nbsp;&nbsp;y&nbsp;&nbsp;B(4;<sup>1</sup>/<sub>3</sub>)",
          answer: [
            {
              text: "5,93",
              validation: "incorrect",
            },
            {
              text: "6,03",
              validation: "correct",
            },
            {
              text: "7,12",
              validation: "incorrect",
            },
          ],
        },
        {
          id: "b",
          exercise:
            "A(2<sup>3</sup>; 1)&nbsp;&nbsp;y&nbsp;&nbsp;B(4; <sup>1</sup>/<sub>2</sub>)",
          answer: [
            {
              text: "2,18",
              validation: "incorrect",
            },
            {
              text: "3,21",
              validation: "incorrect",
            },
            {
              text: "4,03",
              validation: "correct",
            },
          ],
        },
      ],
    },
    {
      id: "2",
      type: "ChooseAnswer",
      title: "Pendiente de una recta ",
      texto:
        "Calcular la pendiente de la recta MN. Determinar los cuadrantes que pasa.",
      incisos: [
        {
          id: "a",
          exercise: "M(1; 3) y N(3; 7)",
          answer: [
            {
              text: "m = -2 pasa III y I Cuadrantes ",
              validation: "incorrect",
            },
            {
              text: "m = 2 pasa III y I Cuadrantes ",
              validation: "correct",
            },
            {
              text: "m = 2 pasa II y IV Cuadrantes ",
              validation: "incorrect",
            },
          ],
        },
        {
          id: "b",
          exercise: "M(-2; 1) y N(4; 1/3)",
          answer: [
            {
              text: "m = 4 pasa III y IV Cuadrantes ",
              validation: "incorrect",
            },
            {
              text: "m = -4 pasa III y IV Cuadrantes ",
              validation: "incorrect",
            },
            {
              text: "m = -4 pasa II y IV Cuadrantes ",
              validation: "correct",
            },
          ],
        },
      ],
    },
    {
      id: "3",
      type: "Matching",
      title: "Punto común de dos rectas. Ecuaciones cartesianas.",
      texto: "Calcular el puerto P común de las rectas r y s.",
      incisos: [
        {
          text: "<strong>Pregunta:</strong> r: 2x - y - 1 = 0\ns: x - 2y + 4 = 0",
          pairId: 1,
        },
        {
          text: "Respuesta: P(2; 3)",
          pairId: 1,
        },
        {
          text: "<strong>Pregunta:</strong> r: 2x - y - 1 = 0\ns: 3x - y - 4 = 0",
          pairId: 2,
        },
        {
          text: "Respuesta: P(3; 5)",
          pairId: 2,
        },
        {
          text: "<strong>Pregunta:</strong> r: 3x - y - 1 = 0\ns:  3x + 4y + 5 = 0",
          pairId: 3,
        },
        {
          text: "Respuesta: P(-6/5; -1/15)",
          pairId: 3,
        },
        {
          text: "Respuesta: P(2; 5)",
          pairId: 4,
        },
      ],
    },
    {
      id: "4",
      type: "ChooseAnswer",
      title: "Punto medio de dos puntos ",
      texto: "Calcular las coordenadas del punto medio M los puntos R y T",
      incisos: [
        {
          id: "a",
          exercise: "R(-2; 1) y T(4; 1/3)",
          answer: [
            {
              text: "M(2/3; 1)",
              validation: "incorrect",
            },
            {
              text: "M(1; 2/3)",
              validation: "correct",
            },
            {
              text: "M(-1; 2/3)",
              validation: "incorrect",
            },
          ],
        },
        {
          id: "b",
          exercise: "R(1; 3) y T(3; 7)",
          answer: [
            {
              text: "M(2; 5)",
              validation: "correct",
            },
            {
              text: "M(5; 2)",
              validation: "incorrect",
            },
            {
              text: "M(-2; 5)",
              validation: "incorrect",
            },
          ],
        },
      ],
    },
    {
      id: "5",
      type: "Matching",
      title: "Intersección de dos rectas. Ecuación paramétrica.",
      texto: "Calcular el punto común de r y s.",
      incisos: [
        {
          text: "<strong>Pregunta:</strong> r:(x; y) = (-5; 0) + t(2; 1)\ns:(x; y) = (3; 2) + t<sub>1</sub>(-1; 2)",
          pairId: 1,
        },
        {
          text: "Respuesta: P(11/5; 18/5)",
          pairId: 1,
        },
        {
          text: "<strong>Pregunta:</strong> r:(x; y) = (1; 5) + t(4; 2)\ns:(x; y) = (2; 2) + t<sub>1</sub>(-2; 4)",
          pairId: 2,
        },
        {
          text: "Respuesta: P(3/5; 24/5)",
          pairId: 2,
        },
        {
          text: "Respuesta: P(11/5; 24/5)",
          pairId: 3,
        },
      ],
    },
  ],
};
