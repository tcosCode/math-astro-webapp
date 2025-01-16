import { constants } from "@data/constants";

const {
  TRUEFALSE,
  CHOOSEANSWER,
  MATCHING,
  FILLBLANK,
  CORRECT,
  INCORRECT,
  VALIDATE_TRUE,
  VALIDATE_FALSE,
} = constants;

export const grades8vo = {
  title: "8vo",
  img: "/img/book-lover.svg",
  list: ["Estadística", "Geometría", "Funciones"],
  exercises: [
    {
      id: "1",
      type: MATCHING,
      title: "División de polinomios",
      texto:
        "Encuentra las parejas. Para cada pregunta, seleccione la respuesta correcta:",
      incisos: [
        {
          text: "<strong>Pregunta:</strong> x<sup>3</sup> + 3x<sup>2</sup> - x - 3 : x - 3",
          pairId: 1,
        },
        { text: "Respuesta: x<sup>2</sup> - 1", pairId: 1 },
        {
          text: "<strong>Pregunta:</strong> x<sup>3</sup> + 3x<sup>2</sup> - x - 3 : x - 1",
          pairId: 2,
        },
        {
          text: "Respuesta: x<sup>2</sup> + 4x + 3",
          pairId: 2,
        },
        {
          text: "<strong>Pregunta:</strong> x<sup>2</sup> + 4x + 3 : x - 1",
          pairId: 3,
        },
        { text: "Respuesta: x + 1", pairId: 3 },
        {
          text: "<strong>Pregunta:</strong> x<sup>2</sup> + 4x + 3 : x + 1",
          pairId: 4,
        },
        { text: "Respuesta: x + 3", pairId: 4 },
        {
          text: "<strong>Pregunta:</strong> x<sup>2</sup> - 4 : x + 2",
          pairId: 5,
        },
        { text: "Respuesta: x - 2", pairId: 5 },
        {
          text: "<strong>Pregunta:</strong> x<sup>3</sup> - x - 3 : x - 3",
          pairId: 6,
        },
        {
          text: "Respuesta: x<sup>2</sup> + 3x + 8",
          pairId: 6,
        },
        {
          text: "Respuesta: x<sup>2</sup> + 1",
          pairId: 7,
        },
        {
          text: "Respuesta: x - 3",
          pairId: 8,
        },
      ],
    },
    {
      id: "2",
      type: FILLBLANK,
      title: "Estadística",
      texto: `La tabla muestra las temperaturas en grados Celsius registradas en una ciudad durante horas del día:
    <table>
        <thead>
          <tr>
            <th>Temp.</th>
            <th>FA</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>38</td>
            <td>5</td>
          </tr>
          <tr>
            <td>37</td>
            <td>8</td>
          </tr>
          <tr>
            <td>36</td>
            <td>10</td>
          </tr>
          <tr>
            <td>35</td>
            <td>16</td>
          </tr>
        </tbody>
      </table>
    Arrastre hacia el espacio en blanco la respuesta correcta:`,
      incisos: [
        {
          id: "a",
          sentence: ["La temperatura más común es ", "blank1", "."],
          options: [
            { id: "option1", text: "35", position: "blank1" },
            { id: "option2", text: "36", position: "" },
            { id: "option3", text: "37", position: "" },
            { id: "option4", text: "38", position: "" },
          ],
        },
        {
          id: "b",
          sentence: ["La mediana de las temperaturas es ", "blank1", "."],
          options: [
            { id: "option1", text: "36,5", position: "blank1" },
            { id: "option2", text: "37,5", position: "blank2" },
            { id: "option3", text: "40", position: "none" },
            { id: "option4", text: "50", position: "none" },
          ],
        },
      ],
    },
    {
      id: "3",
      type: "ChooseAnswer",
      title: "Área de figuras planas (falta video)",
      img: "/img/exercises/8v0-3.webp",
      texto: "En la figura ABCD es un rombo de 4,0cm de lado y DE altura.\n",
      incisos: [
        {
          id: "a",
          exercise:
            "Si la amplitud del &#8738;A=60° entonces la del &#8738;ADE es:",
          answer: [
            {
              text: "30°",
              validation: "correct",
            },
            {
              text: "45°",
              validation: "incorrect",
            },
            {
              text: "60°",
              validation: "incorrect",
            },
          ],
        },
        {
          id: "b",
          exercise: "El perímetro del rombo ABCD es:",
          answer: [
            {
              text: "23cm",
              validation: "incorrect",
            },
            {
              text: "16cm",
              validation: "correct",
            },
            {
              text: "12cm",
              validation: "incorrect",
            },
          ],
        },
        {
          id: "c",
          exercise: "Clasificar el &#916;AED según sus lados",
          answer: [
            {
              text: "Isósceles ",
              validation: "incorrect",
            },
            {
              text: "Equilátero ",
              validation: "incorrect",
            },
            {
              text: "Escaleno ",
              validation: "correct",
            },
          ],
        },
      ],
    },
  ],
};
