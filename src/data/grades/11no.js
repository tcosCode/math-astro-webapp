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
            "A(-2; 1)&nbsp;&nbsp;y&nbsp;&nbsp;B(4;<sup>1</sup>/<sub>3</sub>",
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
  ],
};
