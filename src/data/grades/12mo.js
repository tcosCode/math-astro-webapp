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
      type: "TrueFalse",
      title: "Clasificar en V o F",
      texto: "Seleccionar V o F, justificar las falsas:",
      incisos: [
        {
          id: "a",
          exercise:
            "Si m y n son dos números reales cualesquiera tales que m=n+2, entonces 2<sup>m</sup>&#8826;4(2<sup>n</sup>)",
          validation: "true",
        },
        {
          id: "b",
          exercise:
            "La función f definida la ecuación f(x)=&#189;<sup>(x-3)</sup> es positiva para {x &#8712; R: x < 3}",
          validation: "true",
        },
        {
          id: "c",
          exercise:
            "La imagen de la función h de ecuación h(x)=tanx es y &#8712; R.",
          validation: "false",
        },
        {
          id: "d",
          exercise:
            "El valor numérico de la expresión A=log<sub>3</sub>27<sup>x</sup> para x=1/3 es 1 ",
          validation: "false",
        },
        {
          id: "e",
          exercise:
            "La función g definida en R en la ecuación g(x)=(x-1)<sup>2</sup>+3 es una función par",
          validation: "false",
        },
        {
          id: "f",
          exercise:
            "La imagen de la función h cuya ecuación es h(x)=1/(x-2) es: y &#8712; R: y &#8800; 0",
          validation: "false",
        },
      ],
    },
    {
      id: "2",
      type: "TrueFalse",
      title: "Clasificar en V o F ",
      texto: "Seleccionar V o F según convenga. Justificar las falsas ",
      incisos: [
        {
          id: "a",
          exercise:
            "Si dos triángulos tienen sus tres ángulos con la misma amplitud entonces son congruentes",
          validation: "true",
        },
        {
          id: "b",
          exercise:
            "La correspondencia definida de N&#10230;R que a cada número natural le hace corresponder sus raíces cúbicas es una función ",
          validation: "true",
        },
        {
          id: "c",
          exercise:
            "El resultado de calcular [(-8)<sup>&#8531;</sup>]<sup>&#189;</sup> &#8712; R",
          validation: "false",
        },
        {
          id: "d",
          exercise:
            "Si Z<sub>1</sub>=(4+2i)-(4-2i) entonces la parte imaginaria de Z<sub>1</sub> es -2",
          validation: "false",
        },
      ],
    },
  ],
};
