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
      title: "División de polinomios",
      texto: "Calcular el valor de x y complete los espacios en blanco:",
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
    {
      id: "6",
      type: "ChooseAnswer",
      title: "División de polinomios",
      texto: "Seleccionar la respuesta correcta.",
      incisos: [
        {
          id: "a",
          exercise: " (2d²+7d+13)÷(d-3)",
          answer: [
            {
              text: "2d-13",
              validation: "incorrect",
            },
            {
              text: "2d+13",
              validation: "correct",
            },
            {
              text: "-2d+13",
              validation: "incorrect",
            },
          ],
        },
        {
          id: "b",
          exercise: "(a³+5a²+11a+14)÷(a+3)",
          answer: [
            {
              text: "a²+2a-5",
              validation: "incorrect",
            },
            {
              text: "a²-2a+5",
              validation: "incorrect",
            },
            {
              text: "a²+2a+5",
              validation: "correct",
            },
          ],
        },
        {
          id: "c",
          exercise: "(2x³+x²-2x-8)÷(x-1)",
          answer: [
            {
              text: "2x²+3x+1",
              validation: "correct",
            },
            {
              text: "2x²-3x+1",
              validation: "incorrect",
            },
            {
              text: "2x²+3x-1",
              validation: "incorrect",
            },
          ],
        },
        {
          id: "d",
          exercise: "(6p²-7p-6)÷(2p-1)",
          answer: [
            {
              text: "3p+2",
              validation: "incorrect",
            },
            {
              text: "3p-2",
              validation: "correct",
            },
            {
              text: "-3p+2",
              validation: "incorrect",
            },
          ],
        },
      ],
    },
    {
      id: "7",
      type: "ChooseAnswer",
      title: "Estadística",
      texto: `La tabla muestra las temperaturas en grados celsius registradas en una ciudad durante horas del día:
  <table>
  <thead>
    <tr>
      <th>Hora del Día (Temp. en °C)</th>
      <td>38°C</td>
      <td>37°C</td>
      <td>36°C</td>
      <td>35°C</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Frecuencia Absoluta (FA)</th>
      <td>5</td>
      <td>8</td>
      <td>10</td>
      <td>16</td>
    </tr>
  </tbody>
</table>

  Seleccione la respuesta correcta:`,
      incisos: [
        {
          id: "a",
          exercise: "La temperatura más común es:",
          answer: [
            {
              text: "37",
              validation: "incorrect",
            },
            {
              text: "36",
              validation: "incorrect",
            },
            {
              text: "35",
              validation: "correct",
            },
          ],
        },
        {
          id: "b",
          exercise: "La mediana de las temperaturas es:",
          answer: [
            {
              text: "36,5",
              validation: "correct",
            },
            {
              text: "36",
              validation: "incorrect",
            },
            {
              text: "37",
              validation: "incorrect",
            },
          ],
        },
      ],
    },
    {
      id: "8",
      type: "FillBlank",
      title: "Estadística",
      texto: `Se realiza un estudio sobre la masa corporal de los adolescentes de una comunidad. Este registró la información siguiente: <table>
  <tr>
    <th>Cantidad de puntos</th>
    <td>0</td>
    <td>4</td>
    <td>6</td>
    <td>10</td>
    <td>15</td>
    <td>20</td>
  </tr>
  <tr>
    <th>Cantidad de jugadores</th>
    <td>2</td>
    <td>1</td>
    <td>2</td>
    <td>4</td>
    <td>2</td>
    <td>1</td>
  </tr>
</table>\n\nCompletar los espacios en blanco.`,
      incisos: [
        {
          id: "a",
          sentence: ["La media de los puntos anotados es:", "blank1", ""],
          options: [
            {
              id: "a_option1",
              text: "8,2",
              position: "none",
            },
            {
              id: "a_option2",
              text: "9,1",
              position: "blank1",
            },
            {
              id: "a_option3",
              text: "10,3",
              position: "none",
            },
          ],
        },
        {
          id: "b",
          sentence: ["La moda de los puntos anotados es:", "blank1", ""],
          options: [
            {
              id: "b_option1",
              text: "8",
              position: "none",
            },
            {
              id: "b_option2",
              text: "9",
              position: "none",
            },
            {
              id: "b_option3",
              text: "10",
              position: "blank1",
            },
          ],
        },
      ],
    },
    {
      id: "9",
      type: "Matching",
      title: "Estadística",
      texto: `La tabla muestra el peso en libras de la cantidad de aves en desarrollo que tiene un campesino en su patio. 
  <table>
  <tr>
    <th>Peso (lbs)</th>
    <td>2</td>
    <td>2,5</td>
    <td>3</td>
    <td>4</td>
  </tr>
  <tr>
    <th>No aves</th>
    <td>5</td>
    <td>3</td>
    <td>8</td>
    <td>3</td>
  </tr>
</table>
  Formar parejas:`,
      incisos: [
        {
          text: "<strong>Pregunta:</strong> La FA correspondiente al peso 3 lbs es:",
          pairId: 1,
        },
        {
          text: "Respuesta: 8 aves",
          pairId: 1,
        },
        {
          text: "Respuesta: 3 aves",
          pairId: 2,
        },
        {
          text: "<strong>Pregunta:</strong> ¿Cuántas aves pesan 2 libras?",
          pairId: 3,
        },
        {
          text: "Respuesta: 5 aves",
          pairId: 3,
        },
        {
          text: "Respuesta: 4 aves",
          pairId: 4,
        },
        {
          text: "<strong>Pregunta:</strong> La moda del peso de las aves es:",
          pairId: 5,
        },
        {
          text: "Respuesta: 3 lbs",
          pairId: 5,
        },
      ],
    },
    {
  "id": "10",
  "type": "ChooseAnswer",
  "title": "Estadística",
  "texto": `<table>
  <caption>La tabla muestra largo de 17 piezas de madera.</caption>
  <thead>
    <tr>
      <th>Largo (metros)</th>
      <td>10</td>
      <td>20</td>
      <td>30</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>FA.</th>
      <td>5</td>
      <td>8</td>
      <td>4</td>
    </tr>
  </tbody>
</table>
\n\nSeleccionar la respuesta correcta`,
  "incisos": [
    {
      "id": "a",
      "exercise": "¿Cuál es el promedio del largo de las piezas?",
      "answer": [
        {
          "text": "10 metros",
          "validation": "incorrect"
        },
        {
          "text": "20 metros",
          "validation": "correct"
        },
        {
          "text": "30 metros",
          "validation": "incorrect"
        }
      ]
    },
    {
      "id": "b",
      "exercise": "¿Cuántas piezas tienen su largo como promedio?",
      "answer": [
        {
          "text": "8 metros",
          "validation": "correct"
        },
        {
          "text": "5 metros",
          "validation": "incorrect"
        },
        {
          "text": "4 metros",
          "validation": "incorrect"
        }
      ]
    },
    {
      "id": "c",
      "exercise": "¿Cuál es el porciento de piezas cuyo largo es promedio?",
      "answer": [
        {
          "text": "47,52%",
          "validation": "incorrect"
        },
        {
          "text": "47,23%",
          "validation": "incorrect"
        },
        {
          "text": "47,05%",
          "validation": "correct"
        }
      ]
    }
  ]
}
  ],
};
