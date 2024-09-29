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
      type: CHOOSEANSWER,
      title: "Componer",
      texto: "Por añadir:",
    },
  ],
};
