import { constants } from "@data/constants";

const {
  TRUEFALSE,
  CHOOSEANSWER,
  PROBLEM,
  CORRECT,
  INCORRECT,
  VALIDATE_TRUE,
  VALIDATE_FALSE,
} = constants;

export const grades7mo = {
  title: "7mo",
  img: "/img/calculator.svg",
  list: ["Racionales", "Geometría", "Variables"],
  exercises: [
    {
      id: "1",
      type: PROBLEM,
      title: "Problema de ecuaciones lineales",
      texto:
        "La distancia entre las ciudades de Cienfuegos y Pinar del Río es de 421 km. El doble de la distancia de la ciudad de Cienfuegos a Matanzas aumentado en 61 es igual a la distancia de la ciudad de Pinar del Río y Matanzas. ¿Cuántos km separan a la ciudad de Cienfuegos y la de Matanzas?",
      incisos: [
        {
          id: "a",
          exercise: "Identificar la variable.",
          answer: "x = Distancia entre Matanzas y Pinar del Río.",
        },
        {
          id: "b",
          exercise: "Seleccionar la ecuación:",
          answer: "2x + 61 = 421",
        },
        {
          id: "c",
          exercise: "Seleccionar el resultado.",
          answer: "x = 180 km",
        },
        {
          id: "d",
          exercise:
            "¿Cuántos km separan a la ciudad de Cienfuegos y la de Matanzas?",
          answer: "La distancia de Cienfuegos a Matanzas es 180 km.",
        },
      ],
    },
    {
      id: "2",
      type: PROBLEM,
      title: "Problema de ecuaciones lineales",
      texto:
        "La edad actual de Ana aumentada en 8 es igual al doble de dicha edad disminuido en 3. ¿Qué edad tendrá Ana al cabo de 15 años?",
      incisos: [
        {
          id: "a",
          exercise: "Identificar la variable.",
          answer: "x = Edad de Ana.",
        },
        {
          id: "b",
          exercise: "Seleccionar la ecuación:",
          answer: "x + 8 = 2x - 3",
        },
        {
          id: "c",
          exercise: "Seleccionar el resultado.",
          answer: "x = 11 años",
        },
        {
          id: "d",
          exercise: "¿Qué edad tendrá Ana, transcurridos 15 años?",
          answer: "Ana tendrá 26 años.",
        },
      ],
    },
    {
      id: "3",
      type: PROBLEM,
      title: "Problema de ecuaciones lineales",
      texto:
        "En un destacamento de 34 alumnos de una secundaria básica, el doble de la cantidad de varones disminuido en 5 es igual a la cantidad de hembras. ¿Cuántas hembras y cuántos varones integran el destacamento?",
      incisos: [
        {
          id: "a",
          exercise: "Identificar las variables.",
          answer: "V = varones, y H = hembras.",
        },
        {
          id: "b",
          exercise: "Seleccionar la primera ecuación:",
          answer: "V + H = 34",
        },
        {
          id: "c",
          exercise: "Seleccionar la segunda ecuación:",
          answer: "2V - 5 = H",
        },
        {
          id: "d",
          exercise: "¿Cuál es el sistema de ecuaciones?",
          answer: "V + H = 34 y 2V - 5 = H",
        },
        {
          id: "e",
          exercise:
            "¿Cuántas hembras y cuántos varones integran el destacamento?",
          answer: "Hay 13 varones y 21 hembras.",
        },
      ],
    },
  ],
};
