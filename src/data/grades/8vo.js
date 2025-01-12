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
      title: "(Falta video)",
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
      type: MATCHING,
      title: "(Falta video)",
      texto:
        "Encuentra las parejas. Para cada pregunta, seleccione la respuesta correcta:",
      incisos: [
        {
          text: "<strong>Pregunta:</strong> x<sup>3</sup> - 3x - 3 : x + 1",
          pairId: 1,
        },
        { text: "Respuesta: x<sup>2</sup> + 4x + 4", pairId: 1 },
        {
          text: "<strong>Pregunta:</strong> x<sup>2</sup> - y<sup>2</sup>",
          pairId: 2,
        },
        { text: "Respuesta: (x + y)(x - y)", pairId: 2 },
        {
          text: "<strong>Pregunta:</strong> Z &bsol; N",
          pairId: 3,
        },
        { text: "Respuesta: Z<sup>-</sup>", pairId: 3 },
        {
          text: "<strong>Pregunta:</strong> N es subconjunto de:",
          pairId: 4,
        },
        { text: "Respuesta: Z", pairId: 4 },
        {
          text: "<strong>Pregunta:</strong> <sup>8</sup>/<sub>25</sub> pertenece a:",
          pairId: 5,
        },
        { text: "Respuesta: Q<sub>+</sub>", pairId: 5 },
        {
          text: "<strong>Pregunta:</strong> <sup>4</sup>/<sub>5</sub> es simétrico de:",
          pairId: 6,
        },
        { text: "Respuesta: -<sup>4</sup>/<sub>5</sub>", pairId: 6 },
        {
          text: "<strong>Pregunta:</strong> <sup>5</sup>/<sub>9</sub> es el inverso de:",
          pairId: 7,
        },
        { text: "Respuesta: <sup>9</sup>/<sub>5</sub>", pairId: 7 },
        { text: "Respuesta: Q", pairId: 8 },
        { text: "Respuesta: <sup>5</sup>/<sub>9</sub>", pairId: 9 },
      ],
    },
    {
      id: "3",
      type: FILLBLANK,
      title: "(Falta video)",
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
  ],
};
