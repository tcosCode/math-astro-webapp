import { constants } from "@data/constants";

const {
  TRUEFALSE,
  CHOOSEANSWER,
  CORRECT,
  INCORRECT,
  VALIDATE_TRUE,
  VALIDATE_FALSE,
} = constants;

export const grades12mo = {
  title: "12mo",
  img: "/img/presentation.svg",
  list: ["Probabilidades", "Geometría", "Trigonometría"],
  exercises: [
    {
      id: "1",
      type: TRUEFALSE,
      title: "Componer",
      texto: "Por añadir:",
    },
  ],
};
