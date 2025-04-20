export const grades8vo = {
  title: "8vo",
  img: "/img/book-lover.svg",
  list: ["Estadística", "Geometría", "Funciones"],
  exercises: [
    {
      id: "1",
      type: "Matching",
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
      type: "FillBlank",
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
      type: "Problem",
      title: "Igualdad de triángulos",
      img: "/img/exercises/8vo-3.webp",
      texto:
        "En la figura PQMN es un trapecio isósceles, RSPQ es un rectángulo y MS = RN.",
      incisos: [
        {
          id: "a",
          exercise:
            "Identificar un movimiento del plano que transforme el &#916;MRQ en &#916;SNP.",
          answer: "Movimiento de simetría axial.",
        },
        {
          id: "b",
          exercise: "Demostrar que &#916;MRQ = &#916;SNP",
          answer: "Se puede realizar mediante el criterio lll",
        },
        {
          id: "c",
          exercise: "Identificar otro criterio para demostrarlo ",
          answer: "Criterio lal",
        },
        {
          id: "d",
          exercise: "Demostrar el inciso (a) aplicando el criterio lal",
          answer: "Se puede hacer utilizando el ángulo recto y sus lados",
        },
      ],
    },
    {
      id: "4",
      type: "TrueFalse",
      title: "Igualdad de triángulos",
      img: "/img/exercises/8vo-4.webp",
      texto:
        "En la figura A, B, C y D son puntos de una circunferencia de centro O. AC y BD diámetros, los arcos AC = BD. ",
      incisos: [
        {
          id: "a",
          exercise:
            "El &#916;ADO se transforma en &#916;BOC mediante una traslación de dirección AB",
          validation: "false",
        },
        {
          id: "b",
          exercise:
            "El &#916;BCO se transforma en &#916;ABD mediante una simetría central de centro O",
          validation: "false",
        },
        {
          id: "c",
          exercise:
            "El &#916;ABO es imagen del &#916;ABC mediante una simetría axial de eje AC",
          validation: "false",
        },
        {
          id: "d",
          exercise:
            "El &#916;ABD se transforma en &#916;ABC mediante una simetría axial de eje r mediatriz de AB",
          validation: "true",
        },
        {
          id: "e",
          exercise:
            "Se puede demostrar que &#916;ABD = &#916;ABC aplicando el criterio (ala).",
          validation: "true",
        },
        {
          id: "f",
          exercise:
            "Aplicando el criterio (lal) se demuestra que &#916;BCO = &#916;AOD",
          validation: "true",
        },
      ],
    },
    {
      id: "5",
      type: "FillBlank",
      title: "Completar los espacios en blanco:",
      texto: "Calcular el valor de x.",
      incisos: [
        {
          id: "a",
          sentence: ["6x + 1,8 = 0", "blank1", ""],
          options: [
            {
              id: "a_option1",
              text: "x = 0,03",
              position: "none",
            },
            {
              id: "a_option2",
              text: "x = 0,03",
              position: "none",
            },
            {
              id: "a_option3",
              text: "x = -0,3",
              position: "blank1",
            },
          ],
        },
        {
          id: "b",
          sentence: ["<sup>2</sup>/<sub>3</sub>x + 7 = 0", "blank1", ""],
          options: [
            {
              id: "b_option1",
              text: "x = -10,5",
              position: "blank1",
            },
            {
              id: "b_option2",
              text: "x = 10,5",
              position: "none",
            },
            {
              id: "b_option3",
              text: "x = 1,05",
              position: "none",
            },
          ],
        },
        {
          id: "c",
          sentence: ["-2x - 1,62 = 0", "blank1", ""],
          options: [
            {
              id: "c_option1",
              text: "x = 0,81",
              position: "none",
            },
            {
              id: "c_option2",
              text: "x = -0,81",
              position: "blank1",
            },
            {
              id: "c_option3",
              text: "x = 8,1",
              position: "none",
            },
          ],
        },
      ],
    },
  ],
};
