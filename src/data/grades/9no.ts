// Data for 9no Grade
export const grades9no = {
  title: "9no",
  img: "/img/school-36.svg",
  list: ["Estadística", "Geometría", "Ecuaciones"],
  exercises: [
    {
      id: "1",
      type: "ChooseAnswer",
      title: "Factorización",
      texto:
        "Descomponer en factores. Trabaje en su libreta y luego seleccione una opción como resultado:",
      incisos: [
        {
          id: "a",
          exercise: "8a - 8b",
          answer: [
            { text: "(a - 8)(b - 8)", validation: "incorrect" },
            { text: "8(a - 8b)", validation: "incorrect" },
            { text: "8(a - b)", validation: "correct" },
          ],
        },
        {
          id: "b",
          exercise: "x<sup>2</sup> - 2x - 48",
          answer: [
            { text: "(x - 8)(x - 6)", validation: "incorrect" },
            { text: "(x - 8)(x + 6)", validation: "correct" },
            { text: "D &lt; 0", validation: "incorrect" },
          ],
        },
        {
          id: "c",
          exercise: "y<sup>2</sup> - 49",
          answer: [
            { text: "(y + 7)(y - 7)", validation: "incorrect" },
            { text: "(y + 7)(y + 7y)", validation: "incorrect" },
            { text: "(y - 7)(y + 7)", validation: "correct" },
          ],
        },
        {
          id: "d",
          exercise: "2m<sup>2</sup> - 17m - 48",
          answer: [
            { text: "(2m + 1)(m + 8)", validation: "incorrect" },
            { text: "(2m - 1)(m - 8)", validation: "correct" },
            { text: "(2m + 1)(m - 8)", validation: "incorrect" },
          ],
        },
        {
          id: "e",
          exercise: "y<sup>2</sup> - 7",
          answer: [
            {
              text: "(y - 7<sup>1/2</sup>)(y - 7<sup>1/2</sup>)",
              validation: "incorrect",
            },
            {
              text: "(y + 7<sup>1/2</sup>)(y + 7<sup>1/2</sup>)",
              validation: "incorrect",
            },

            {
              text: "(y + 7<sup>1/2</sup>)(y - 7<sup>1/2</sup>)",
              validation: "correct",
            },
          ],
        },
        {
          id: "f",
          exercise: "5n<sup>2</sup> + 12n + 4",
          answer: [
            { text: "(5n + 2)(n - 2)", validation: "incorrect" },
            { text: "(5n + 2)(n + 2)", validation: "correct" },
            { text: "(5n - 2)(n + 2)", validation: "incorrect" },
          ],
        },
        {
          id: "g",
          exercise: "x<sup>2</sup> - x + 8",
          answer: [
            { text: "D &lt; 0", validation: "correct" },
            { text: "(x + 2)(x + 4)", validation: "incorrect" },
            { text: "(x - 2)(x + 4)", validation: "incorrect" },
          ],
        },
        {
          id: "h",
          exercise: "v<sup>2</sup> - 36 + 12v",
          answer: [
            { text: "(v - 14.4)(v - 2.4)", validation: "correct" },
            { text: "(v + 14.4)(v + 2.4)", validation: "incorrect" },
            { text: "(v + 14.4)(v - 2.4)", validation: "incorrect" },
          ],
        },
      ],
    },
    {
      id: "2",
      type: "ChooseAnswer",
      title: "Factorización",
      texto:
        "Factorizar completamente. Trabaje en su libreta y luego seleccione una opción como resultado:",
      incisos: [
        {
          id: "a",
          exercise: "8x<sup>3</sup> - 2x",
          answer: [
            { text: "2x(2x-1)(2x-1)", validation: "incorrect" },
            { text: "2x(2x+1)(2x+1)", validation: "incorrect" },
            { text: "2x(2x+1)(2x-1)", validation: "correct" },
          ],
        },
        {
          id: "b",
          exercise: "3y<sup>2</sup> + 6y - 24",
          answer: [
            { text: "(3y - 6)(y + 4)", validation: "correct" },
            { text: "(3y + 6)(y + 4)", validation: "incorrect" },
            { text: "(3y + 6)(y - 4)", validation: "incorrect" },
          ],
        },
        {
          id: "c",
          exercise: "18z<sup>3</sup> - 54z",
          answer: [
            { text: "9z(2z<sup>2</sup> + 6)", validation: "incorrect" },
            { text: "9z(9z<sup>2</sup> - 6)", validation: "correct" },
            { text: "9z(2z<sup>2</sup> + 27)", validation: "incorrect" },
          ],
        },
        {
          id: "d",
          exercise: "b<sup>4</sup> - b<sup>2</sup> - 12",
          answer: [
            { text: "(b+2)(b+2)(b<sup>2</sup>+3)", validation: "incorrect" },
            { text: "(b+2)(b-2)(b<sup>2</sup>+3)", validation: "correct" },
            { text: "(b-2)(b-2)(b<sup>2</sup>+3)", validation: "incorrect" },
          ],
        },
        {
          id: "e",
          exercise: "2x<sup>5</sup> - 16x<sup>3</sup> + 32x",
          answer: [
            {
              text: "2x(x-2)<sup>2</sup>(x+2)<sup>2</sup>",
              validation: "correct",
            },
            {
              text: "2x(x+2)<sup>2</sup>(x+2)<sup>2</sup>",
              validation: "incorrect",
            },
            {
              text: "2x(x-2)<sup>2</sup>(x-2)<sup>2</sup></sup>",
              validation: "incorrect",
            },
          ],
        },
        {
          id: "f",
          exercise: "x<sup>2</sup> - 8x + 16",
          answer: [
            { text: "(x - 4)(x + 4)", validation: "incorrect" },
            { text: "(x - 4)(x - 4)", validation: "correct" },
            { text: "(x + 4)(x + 4)", validation: "incorrect" },
          ],
        },
        {
          id: "g",
          exercise: "m<sup>4</sup> - 256",
          answer: [
            { text: "(m<sup>2</sup>+16)(m+4)(m+4)", validation: "incorrect" },
            { text: "(m<sup>2</sup>+16)(m+4)(m-4)", validation: "correct" },
            { text: "(m<sup>2</sup>+16)(m-4)(m-4)", validation: "incorrect" },
          ],
        },
        {
          id: "h",
          exercise: "v<sup>2</sup> - 36 + 12v",
          answer: [
            {
              text: "3y(y<sup>6</sup>z - y<sup>3</sup>z - 2z)",
              validation: "incorrect",
            },
            {
              text: "3yz(y<sup>5</sup> - y<sup>3</sup> - 2)",
              validation: "incorrect",
            },
            {
              text: "3yz(y<sup>6</sup> - y<sup>3</sup> - 2)",
              validation: "correct",
            },
          ],
        },
      ],
    },
    {
      id: "3",
      type: "TrueFalse",
      title: "Estadística",
      texto: "Escoja Verdadero o Falso segun corresponda:",
      incisos: [
        {
          id: "a",
          exercise:
            "La operación de sustracción no se puede realizar de manera ilimitada en el conjunto de los números naturales.",
          validation: "true",
        },
        {
          id: "b",
          exercise:
            "La estadística se caracteriza por realizar estudios de datos relativos a conjuntos de datos, individuos y observaciones lo más numerosas posible y ocurridos en diferentes instantes de tiempo.",
          validation: "true",
        },
        {
          id: "c",
          exercise:
            "1/6 es un número fraccionario que es a la vez menor que 0,6 y mayor que 1/5.",
          validation: "false",
        },
        {
          id: "d",
          exercise:
            "La estadística descriptiva estudia una muestra derivando conclusiones sobre un grupo mayor de esta.",
          validation: "false",
        },
        {
          id: "e",
          exercise:
            "El rango o recorrido de una variable es la diferencia entre el dato mayor y el dato menor del conjunto de valores que toma la variable.",
          validation: "true",
        },
        {
          id: "f",
          exercise:
            "La marca de clase es el punto medio de la clase que se obtiene restando los límites de clase superior e inferior y dividiendo entre dos.",
          validation: "false",
        },
        {
          id: "g",
          exercise:
            "La clase modal es la clase de menor frecuencias cuando la anotaciones se presentan unidas en clases.",
          validation: "true",
        },
        {
          id: "h",
          exercise:
            "La clase mediana es la clase en que se encuentra el mayor número de datos.",
          validation: "false",
        },
      ],
    },
    {
      id: "4",
      type: "Problem",
      title: "Estadística",
      texto: `En el mcpio Yateras se celebró la Asamblea 55 Aniversario de la OPJM, la cual estuvo representada por pioneros de la Educación Primaria y Secundaria Básica. El rango de participantes de edad hasta 13 años se muestra a continuación: 
      <table>
        <thead>
          <tr>
            <th>Edad (Años)</th>
            <th>Cantidad de pioneros</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>[7; 9)</td>
            <td>05</td>
          </tr>
          <tr>
            <td>[9; 11)</td>
            <td>12</td>
          </tr>
          <tr>
            <td>[11; 13)</td>
            <td>08</td>
          </tr>
        </tbody>
      </table>`,
      incisos: [
        {
          id: "a",
          exercise: "¿Cuál es el total de pioneros?",
          answer: "25",
        },
        {
          id: "b",
          exercise: "¿Cuál es la variable objeto de estudio?",
          answer: "Edad",
        },
        {
          id: "c",
          exercise: "¿Cuál es la marca de la tercera clase?",
          answer: "12",
        },
        {
          id: "d",
          exercise: "¿Cuál es la amplitud de las clases?",
          answer: "2",
        },
        {
          id: "e",
          exercise: "¿En qué rango de edad predominan los pioneros?",
          answer: "9 a 11 años",
        },
        {
          id: "f",
          exercise: "¿Cuántos pioneros tiene edad entre 7 y 10 años?",
          answer: "17 pioneros",
        },
        {
          id: "g",
          exercise:
            "¿Qué por ciento de pioneros tienen edad entre [9; 13) años?",
          answer: "80% del total",
        },
        {
          id: "h",
          exercise: "¿Cuántos pioneros tienen su edad inferior a 9 años?",
          answer: "5 pioneros",
        },
      ],
    },
    {
      id: "5",
      type: "Problem",
      title: "Estadística",
      texto: `La tabla muestra las temperaturas en grados celcius registradas en una ciudad durante horas del día:
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
`,
      incisos: [
        {
          id: "a",
          exercise: "La temperatura más común es:",
          answer: "35",
        },
        {
          id: "b",
          exercise: "¿Cuál es la mediana de las temperaturas?",
          answer: "36,5",
        },
        {
          id: "c",
          exercise: "¿Cuál es el total de veces en que se tomó la temperatura?",
          answer: "39",
        },
        {
          id: "d",
          exercise: "La temperatura más alta registrada es:",
          answer: "38",
        },
        {
          id: "e",
          exercise: "¿Cuál es la variable objeto de estudio?",
          answer: "Temperatura",
        },
        {
          id: "f",
          exercise: "El promedio de las temperaturas es:",
          answer: "36,5",
        },
        {
          id: "g",
          exercise: "El moda de las tres mayores temperaturas es:",
          answer: "36",
        },
        {
          id: "h",
          exercise:
            "¿Cuántas veces se tomó la temperatura inferior a 36 grados?",
          answer: "13 veces",
        },
      ],
    },
    {
      id: "6",
      type: "Problem",
      title: "Estadística",
      texto: `La tabla muestra la cantidad de puntos anotados por los jugadores de un equipo de baloncesto al finalizar el juego.
      <table>
        <thead>
          <tr>
            <th>Cantidad de puntos</th>
            <th>Cantidad jugadores</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0</td>
            <td>2</td>
          </tr>
          <tr>
            <td>4</td>
            <td>1</td>
          </tr>
          <tr>
            <td>6</td>
            <td>2</td>
          </tr>
           <tr>
            <td>10</td>
            <td>4</td>
          </tr>
           <tr>
            <td>15</td>
            <td>2</td>
          </tr>
           <tr>
            <td>20</td>
            <td>1</td>
          </tr>
        </tbody>
      </table>`,
      incisos: [
        {
          id: "a",
          exercise: "¿Cuál es el total de puntos anotados?",
          answer: "55",
        },
        {
          id: "b",
          exercise: "¿Cuál es la mediana de los puntos?",
          answer: "8",
        },
        {
          id: "c",
          exercise: "¿Cuál es la puntuación más común?",
          answer: "10",
        },
        {
          id: "d",
          exercise: "La puntuación más alta anotada es:",
          answer: "20",
        },
        {
          id: "e",
          exercise: "¿Cuál es la variable objeto de estudio?",
          answer: "Puntos anotados",
        },
        {
          id: "f",
          exercise: "Promedio de la puntuación es:",
          answer: "9,16",
        },
        {
          id: "g",
          exercise: "El promedio de las tres menores puntuaciones es:",
          answer: "3,3",
        },
        {
          id: "h",
          exercise: "Moda de las tres mayores puntuaciones:",
          answer: "10",
        },
      ],
    },
    {
      id: "7",
      type: "Problem",
      title: "Estadística",
      texto: `La tabla muestra el consumo eléctrico, en kl/h, durante un mes en los apartamentos que hay en un edificio:
      <table>
        <thead>
          <tr>
            <th>Consumo</th>
            <th>No. de apartamento</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>[50; 100)</td>
            <td>2</td>
          </tr>
          <tr>
            <td>[100; 150)</td>
            <td>8</td>
          </tr>
           <tr>
            <td>[150; 200)</td>
            <td>6</td>
          </tr>
           <tr>
            <td>[200; 250)</td>
            <td>3</td>
          </tr>
           <tr>
            <td>[250; 300)</td>
            <td>2</td>
          </tr>
        </tbody>
      </table>`,
      incisos: [
        {
          id: "a",
          exercise: "¿Cuál es el total de apartamentos del edificio?",
          answer: "21",
        },
        {
          id: "b",
          exercise: "Clasifíca la variable en estudio.",
          answer: "Consumo eléctrico",
        },
        {
          id: "c",
          exercise: "¿Cuál es la clase modal?",
          answer: "[100; 150)",
        },
        {
          id: "d",
          exercise:
            "Si el plan de consumo para cada apartamento era hasta 200kwh ¿qué porcentaje de ellos incumplió con su plan?",
          answer: "23,8%",
        },
        {
          id: "e",
          exercise: "Identifique la amplitud de clase utilizada.",
          answer: "30",
        },
        {
          id: "f",
          exercise: "La clase mediana es:",
          answer: "[150; 200)",
        },
      ],
    },
    {
      id: "8",
      type: "Matching",
      title: "Ecuaciones cuadráticas",
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
      id: "9",
      type: "ChooseAnswer",
      title: "Área y Perímetro",
      img: "/img/exercises/9no-9.webp",
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
    {
      id: "10",
      type: "Problem",
      title: "Sistema de ecuaciones lineales 2x2",
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
      id: "11",
      type: "Problem",
      title: "Sistema de ecuaciones lineales 2x2",
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
      id: "12",
      type: "Problem",
      title: "Sistema de ecuaciones lineales 2x2",
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
    {
      id: "13",
      type: "FillBlank",
      title: "Ecuaciones cuadráticas",
      texto: "Dada la función cuadrática X²+bx+c=0",
      incisos: [
        {
          id: "a",
          sentence: ["y = x² - 3x, el valor de c", "blank1", ""],
          options: [
            {
              id: "a_option1",
              text: "c = 1",
              position: "none",
            },
            {
              id: "a_option2",
              text: "c = 3",
              position: "none",
            },
            {
              id: "a_option3",
              text: "c = 0",
              position: "blank1",
            },
          ],
        },
        {
          id: "b",
          sentence: ["Si a=1; b=-2 y c=5 entonces", "blank1", ""],
          options: [
            {
              id: "b_option1",
              text: "x²+2x-5=0",
              position: "none",
            },
            {
              id: "b_option2",
              text: "x²-2x+5=0",
              position: "blank1",
            },
            {
              id: "b_option3",
              text: "x²+2x+5=0",
              position: "none",
            },
          ],
        },
        {
          id: "c",
          sentence: ["y = -x² su gráfica abre hacia", "blank1", ""],
          options: [
            {
              id: "c_option1",
              text: "Arriba ",
              position: "none",
            },
            {
              id: "c_option2",
              text: "Abajo ",
              position: "blank1",
            },
            {
              id: "c_option3",
              text: "Derecha ",
              position: "none",
            },
          ],
        },
      ],
    },
    {
      id: "14",
      type: "FillBlank",
      title: "Funciones cuadráticas",
      texto: "Seleccionar la ecuación de la parábola y=(x-d)²+e",
      incisos: [
        {
          id: "a",
          sentence: ["Con vértice V(-1;-3)", "blank1", ""],
          options: [
            {
              id: "a_option1",
              text: "y=(x-1)²-3",
              position: "none",
            },
            {
              id: "a_option2",
              text: "y=(x-1)²+3",
              position: "none",
            },
            {
              id: "a_option3",
              text: "y=(x+1)²-3",
              position: "blank1",
            },
          ],
        },
        {
          id: "b",
          sentence: ["Con vértice V=(2;-1)", "blank1", ""],
          options: [
            {
              id: "b_option1",
              text: "y=x-2)²-1",
              position: "blank1",
            },
            {
              id: "b_option2",
              text: "y=(x+2)²+1",
              position: "none",
            },
            {
              id: "b_option3",
              text: "Y=(x+2)²+1",
              position: "none",
            },
          ],
        },
      ],
    },
    {
      id: "15",
      type: "TrueFalse",
      title: "Funciones cuadráticas",
      texto: "El vértice de la función y=(x-2)²-4 es",
      incisos: [
        {
          id: "a",
          exercise: "V=(-2;4)",
          validation: "false",
        },
        {
          id: "b",
          exercise: "V=(2;-4)",
          validation: "true",
        },
        {
          id: "c",
          exercise: "V=(2;4)",
          validation: "false",
        },
        {
          id: "d",
          exercise: "V=(-2;-.4)",
          validation: "false",
        },
      ],
    },
    {
      id: "16",
      type: "FillBlank",
      title: "Geometría del espacio",
      texto: "Completar los espacios en blanco: Dado un cono de vértice S",
      incisos: [
        {
          id: "a",
          sentence: [
            "La fórmula para calcular el volumen del cono es",
            "blank1",
            "",
          ],
          options: [
            {
              id: "a_option1",
              text: "V = πr²h",
              position: "none",
            },
            {
              id: "a_option2",
              text: "V = <sup>1</sup>/<sub>3</sub>πr²h",
              position: "blank1",
            },
            {
              id: "a_option3",
              text: "V = <sup>1</sup>/<sub>3</sub>πrh",
              position: "none",
            },
          ],
        },
        {
          id: "b",
          sentence: [
            "Calcular el volumen del cono si r = 5cm y h = 10cm",
            "blank1",
            "",
          ],
          options: [
            {
              id: "b_option1",
              text: "V = 261,66cm²",
              position: "none",
            },
            {
              id: "b_option2",
              text: "V = 230,45cm³",
              position: "none",
            },
            {
              id: "b_option3",
              text: "V = 261,66cm³",
              position: "blank1",
            },
          ],
        },
      ],
    },
    {
      id: "17",
      type: "ChooseAnswer",
      title: "Geometría del espacio",
      texto:
        "Si un cono circular recto de radio (r), generatriz (g), altura (h), área lateral (A<sub>L</sub>) y área total (A<sub>T</sub>). Seleccionar la respuesta correcta:",
      incisos: [
        {
          id: "a",
          exercise: "De r = 6,0cm y g = 10cm, entonces A<sub>L</sub> =",
          answer: [
            {
              text: "188,4cm",
              validation: "incorrect",
            },
            {
              text: "188,4cm²",
              validation: "correct",
            },
            {
              text: "188,4cm³",
              validation: "incorrect",
            },
          ],
        },
        {
          id: "b",
          exercise: "De r = 1,6dm y h = 12cm entonces V =",
          answer: [
            {
              text: "32,15cm²",
              validation: "incorrect",
            },
            {
              text: "32,15dm³",
              validation: "incorrect",
            },
            {
              text: "32,15cm³",
              validation: "correct",
            },
          ],
        },
        {
          id: "c",
          exercise: "De A<sub>L</sub> = 423,9dm² y g = 15,0dm, entonces r =",
          answer: [
            {
              text: "9,0cm",
              validation: "incorrect",
            },
            {
              text: "9,0cm²",
              validation: "incorrect",
            },
            {
              text: "9,0dm",
              validation: "correct",
            },
          ],
        },
      ],
    },
  ],
};
