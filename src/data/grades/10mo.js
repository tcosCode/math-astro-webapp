export const grades10mo = {
  title: "10mo",
  img: "/img/video-tutorial.svg",
  list: ["Variables", "Potencias", "Raíces"],
  exercises: [
    {
      id: "1",
      type: "TrueFalse",
      title: "Funciones",
      texto: `Función:
Una función es una correspondencia que a cada elemento de un conjunto A asocia un único elemento de un conjunto B.
      Escoja Verdadero o Falso segun corresponda:`,
      incisos: [
        {
          id: "a",
          exercise: `Identificar si es función. Fundamente:
          <div style="display: inline-block; font-size: 12px; margin-top: 10px;">
            <div style="display: flex; gap:15px; padding: 5px 10px;">
              <div style="margin-right: 15px;">A</div>
              <div>0</div>
              <div>3</div>
              <div>-1</div>
              <div>12</div>
              <div>12</div>
            </div>
            <div style="display: flex; gap:15px; padding: 5px 10px; margin-top: 5px;">
              <div style="margin-right: 15px;">B</div>
              <div>1</div>
              <div>1</div>
              <div>-8</div>
              <div>-2</div>
              <div>-2.5</div>
            </div>
          </div>`,
          validation: "false",
        },
        {
          id: "b",
          exercise: "La relación {R -- R; y = x/3 - 4; es una función:",
          validation: "true",
        },
        {
          id: "c",
          exercise: "La relación {N -- N; y = x/2 - 4; es una función:",
          validation: "false",
        },
        {
          id: "d",
          exercise:
            "La relación de R en R que a cada número real le hace corresponder su raíz cuadrada:",
          validation: "false",
        },
        {
          id: "e",
          exercise: "La relación de Q en Q tal que f(x) = -3x + 4:",
          validation: "true",
        },
        {
          id: "f",
          exercise: "La relación de Q en Q<sub>+</sub> tal que f(x) = 1/3 x:",
          validation: "false",
        },
        {
          id: "g",
          exercise: "La relación de N en R tal que f(x) = x<sup>2</sup> - 4x:",
          validation: "true",
        },
        {
          id: "h",
          exercise: "La relación de Z+ en Z tal que f(x) = x<sup>3</sup> + 3:",
          validation: "true",
        },
      ],
    },
    {
      id: "2",
      type: "TrueFalse",
      title: "Funciones",
      texto: "Seleccionar V o F",
      incisos: [
        {
          id: "a",
          exercise: "La relación { R --  R: x/3 - 4} es una función ",
          validation: "true",
        },
        {
          id: "b",
          exercise: "La relación { R -- R: y= x/2 - 4\\} es una función.",
          validation: "false",
        },
        {
          id: "c",
          exercise:
            "La correspondencia definida de R en R que a cada número real le hace corresponder su raíz cuadrada.",
          validation: "false",
        },
      ],
    },
    {
      id: "3",
      type: "ChooseAnswer",
      title: "Funciones",
      texto: "Calcular en la libreta y seleccionar la respuesta correcta: ",
      incisos: [
        {
          id: "a",
          exercise: "m = -1 y su gráfica pasa por P(0; 6).",
          answer: [
            {
              text: "y = -x - 6",
              validation: "incorrect",
            },
            {
              text: "y = x + 6",
              validation: "incorrect",
            },
            {
              text: "y = -x + 6",
              validation: "correct",
            },
          ],
        },
        {
          id: "b",
          exercise: "n = 2/3 y su gráfica pasa por el punto M(-1; 1/3)",
          answer: [
            {
              text: "y = -1/3x + 2/3",
              validation: "incorrect",
            },
            {
              text: "y = 1/3x - 2/3",
              validation: "incorrect",
            },
            {
              text: "y = 1/3x + 2/3",
              validation: "correct",
            },
          ],
        },
        {
          id: "c",
          exercise: "Su gráfica pasa por los puntos A(-2; 2) y B(5; -5)",
          answer: [
            {
              text: "y = x",
              validation: "incorrect",
            },
            {
              text: "y = x + 1",
              validation: "incorrect",
            },
            {
              text: "y = -x",
              validation: "correct",
            },
          ],
        },
      ],
    },
    {
      id: "4",
      type: "ChooseAnswer",
      title: "Funciones",
      texto: "Seleccionar la monotonía de la función ",
      incisos: [
        {
          id: "a",
          exercise: "a) a(x) = -x + 6",
          answer: [
            {
              text: "Creciente ",
              validation: "incorrect",
            },
            {
              text: "Decreciente ",
              validation: "correct",
            },
            {
              text: "Ninguna ",
              validation: "incorrect",
            },
          ],
        },
        {
          id: "b",
          exercise: "b) = -x + 1/3",
          answer: [
            {
              text: "Creciente ",
              validation: "incorrect",
            },
            {
              text: "Decreciente ",
              validation: "correct",
            },
            {
              text: "Ninguna ",
              validation: "incorrect",
            },
          ],
        },
        {
          id: "c",
          exercise: "c(x) = x - 6",
          answer: [
            {
              text: "Creciente",
              validation: "correct",
            },
            {
              text: "Decreciente ",
              validation: "incorrect",
            },
            {
              text: "Ninguna ",
              validation: "incorrect",
            },
          ],
        },
        {
          id: "d",
          exercise: "d(x) = x + 6",
          answer: [
            {
              text: "Creciente ",
              validation: "correct",
            },
            {
              text: "Decreciente ",
              validation: "incorrect",
            },
            {
              text: "Ninguna ",
              validation: "incorrect",
            },
          ],
        },
        {
          id: "e",
          exercise: "e(x) = x",
          answer: [
            {
              text: "Creciente ",
              validation: "correct",
            },
            {
              text: "Decreciente ",
              validation: "incorrect",
            },
            {
              text: "Ninguna ",
              validation: "incorrect",
            },
          ],
        },
        {
          id: "f",
          exercise: "f(x) = -x",
          answer: [
            {
              text: "Creciente ",
              validation: "incorrect",
            },
            {
              text: "Decreciente ",
              validation: "correct",
            },
            {
              text: "Ninguna ",
              validation: "incorrect",
            },
          ],
        },
      ],
    },
    {
      id: "5",
      type: "TrueFalse",
      title: "Funciones cuadráticas",
      texto: "Seleccionar V si la función es cuadrática y F para otros casos",
      incisos: [
        {
          id: "a",
          exercise: "f(x) = x<sup>2</sup> - 3\n",
          validation: "true",
        },
        {
          id: "b",
          exercise: "f(x) = x<sup>2</sup> - x + 1\n\n",
          validation: "true",
        },
        {
          id: "c",
          exercise: "k(x) = x<sup>3</sup> -2x + 3",
          validation: "false",
        },
        {
          id: "d",
          exercise: "h(x) = 2x + x<sup>2<sup>",
          validation: "true",
        },
        {
          id: "e",
          exercise: "f(x) = 2x - 3",
          validation: "false",
        },
        {
          id: "f",
          exercise: "h(x) = 1/3 x<sup>2</sup> + 1,5",
          validation: "true",
        },
      ],
    },
    {
      id: "6",
      type: "ChooseAnswer",
      title: "Funciones lineales",
      texto: "Seleccionar los valores de las funciones para x=5",
      incisos: [
        {
          id: "a",
          exercise: "a) a(x) = -x + 6",
          answer: [
            {
              text: "a(5) = 0",
              validation: "incorrect",
            },
            {
              text: "a(5) = 4",
              validation: "incorrect",
            },
            {
              text: "a(5) =1",
              validation: "correct",
            },
          ],
        },
        {
          id: "b",
          exercise: "b(x) = -x + 1/3",
          answer: [
            {
              text: "b(5) = -14/3",
              validation: "correct",
            },
            {
              text: "b(5) = 14/3",
              validation: "incorrect",
            },
            {
              text: "b(5) = 13/3",
              validation: "incorrect",
            },
          ],
        },
        {
          id: "c",
          exercise: "c(x) = -x",
          answer: [
            {
              text: "c(5) = 4",
              validation: "incorrect",
            },
            {
              text: "c(5) = 5",
              validation: "incorrect",
            },
            {
              text: "c(5) = -5",
              validation: "correct",
            },
          ],
        },
        {
          id: "d",
          exercise: "d(x) = 2x - 6",
          answer: [
            {
              text: "d(5) = -4",
              validation: "incorrect",
            },
            {
              text: "d(5) = 4",
              validation: "correct",
            },
            {
              text: "d(5) = 5",
              validation: "incorrect",
            },
          ],
        },
      ],
    },
    {
      id: "7",
      type: "ChooseAnswer",
      title: "Logaritmos",
      texto: "Enlazar el logaritmo con su forma exponencial ",
      incisos: [
        {
          id: "a",
          exercise: "log<sub>2</sub>8 = 3",
          answer: [
            {
              text: "4<sup>0,5</sup> = 2",
              validation: "incorrect",
            },
            {
              text: "5<sup><sup><sup>1</sup>/<sub>3</sub></sup></sup> = 5<sup><sup><sup>1</sup>/<sub>3 </sub></sup></sup>",
              validation: "incorrect",
            },
            {
              text: "2<sup>3</sup> = 8",
              validation: "correct",
            },
          ],
        },
        {
          id: "b",
          exercise: "log<sub>4</sub>2 = 0,5",
          answer: [
            {
              text: "2<sup>3</sup> 8",
              validation: "incorrect",
            },
            {
              text: "4<sup>0,5</sup> = 2",
              validation: "correct",
            },
            {
              text: "3<sup>3</sup> = 27",
              validation: "incorrect",
            },
          ],
        },
        {
          id: "c",
          exercise: "log<sub>5</sub>5<sup>1/3</sup> = 5<sup>1/3</sup>",
          answer: [
            {
              text: "3<sup>3</sup> = 27",
              validation: "incorrect",
            },
            {
              text: "5<sup>3</sup> = 5<sup>3</sup>",
              validation: "incorrect",
            },
            {
              text: "5<sup><sup><sup>1</sup>/<sub>3</sub></sup></sup> = 5<sup><sup><sup>1</sup>/<sub>3</sub></sup></sup>",
              validation: "correct",
            },
          ],
        },
        {
          id: "d",
          exercise: "log<sub>3</sub>27 = 3",
          answer: [
            {
              text: "2<sup>3</sup> = 8",
              validation: "incorrect",
            },
            {
              text: "3<sup>2</sup> = 9",
              validation: "incorrect",
            },
            {
              text: "3<sup>3</sup> = 27",
              validation: "correct",
            },
          ],
        },
        {
          id: "e",
          exercise: "log<sub>2</sub>0,125 = -3",
          answer: [
            {
              text: "4<sup>0,5</sup> = 2",
              validation: "incorrect",
            },
            {
              text: "2<sup>-3</sup> = 0,125",
              validation: "correct",
            },
            {
              text: "3<sup>3</sup> = 27",
              validation: "incorrect",
            },
          ],
        },
        {
          id: "f",
          exercise: "log<sub>4</sub>16 = 2 ",
          answer: [
            {
              text: "4<sup>2</sup> = 16",
              validation: "correct",
            },
            {
              text: "4<sup>3</sup> = 64",
              validation: "incorrect",
            },
            {
              text: "4<sup>2</sup> = 2<sup>4</sup>",
              validation: "incorrect",
            },
          ],
        },
      ],
    },
    {
      id: "8",
      type: "Matching",
      title: "Logaritmos",
      texto: "Resolver en la libreta y luego enlazar con la respuesta: ",
      incisos: [
        {
          text: "<strong>Pregunta:</strong> log<sub>3</sub>x=4",
          pairId: 1,
        },
        {
          text: "Respuesta: x=81",
          pairId: 1,
        },
        {
          text: "<strong>Pregunta:</strong> log<sub>&#8730;3</sub>x=2",
          pairId: 2,
        },
        {
          text: "Respuesta: x=3",
          pairId: 2,
        },
        {
          text: "<strong>Pregunta:</strong> log<sub>5</sub>(2x-y)=1\nlog<sub>5</sub>(3x-2y)=1",
          pairId: 3,
        },
        {
          text: "Respuesta: x=5; y=5",
          pairId: 3,
        },
        {
          text: "<strong>Pregunta:</strong> log<sub>2</sub>(x+y)=3\n2<sup>x</sup>:2<sup>y</sup>=5<sup>log<sub>5</sub>2</sup>",
          pairId: 4,
        },
        {
          text: "Respuesta: x=9/2; y=7/2",
          pairId: 4,
        },
        {
          text: "<strong>Pregunta:</strong> log<sub>7</sub>(3x-2y)=1\nlog<sub>5</sub>(2x-y)=1",
          pairId: 5,
        },
        {
          text: "Respuesta: x=3; y=1 ",
          pairId: 5,
        },
        {
          text: "Respuesta: x=0; y=1 ",
          pairId: 6,
        },
      ],
    },
    {
      id: "9",
      type: "ChooseAnswer",
      title: "Ecuaciones trigonométricas",
      texto:
        "Determinar el conjunto solución y seleccionar la respuesta correcta.",
      incisos: [
        {
          id: "a",
          exercise:
            "<sup>(2sen&#8733; . cot&#8733;)</sup>/<sub>cos&#8733;</sub> = 2sen&#8733; para 0 &#8804; &#8733; &#8804; 90°",
          answer: [
            {
              text: "&#8733 = 90°",
              validation: "correct",
            },
            {
              text: "&#8733; = 30°",
              validation: "incorrect",
            },
            {
              text: "&#8733 = 45°",
              validation: "incorrect",
            },
          ],
        },
        {
          id: "b",
          exercise:
            "sen&#946; - cos&#178;&#946; = 1  si (0 &#8804; &#946; &#8846; &#960;)",
          answer: [
            {
              text: "&#946; = 45°",
              validation: "incorrect",
            },
            {
              text: "&#946; = 90°",
              validation: "correct",
            },
            {
              text: "&#946; =30°",
              validation: "incorrect",
            },
          ],
        },
        {
          id: "c",
          exercise: "(sen2&#8733; . cot&#8733) + (3cos&#8733; - 2) = 0",
          answer: [
            {
              text: "&#8733; = &#960;",
              validation: "incorrect",
            },
            {
              text: "&#8733 = <sup>&#960;</sup>/<sub>2</sub>",
              validation: "incorrect",
            },
            {
              text: "&#8733; = <sup>&#960;</sup>/<sub>3</sub>",
              validation: "correct",
            },
          ],
        },
      ],
    },
    {
      id: "10",
      type: "TrueFalse",
      title: "Ecuaciones trigonométricas",
      texto: "Seleccionar V o F. Fundamentar las falsas.",
      incisos: [
        {
          id: "a",
          exercise: "sen²&#8733; = 1 - cos²&#8733;",
          validation: "true",
        },
        {
          id: "b",
          exercise:
            "tan&#946; = <sup>sen&#946;</sup>/<sub>cos&#946;</sub> (&#946; &#8800; 0)",
          validation: "true",
        },
        {
          id: "c",
          exercise:
            "1 + tan&#178;&#8733; = <sup>1</sup>/<sub>sen&#8733</sub> (&#8733; &#8800; 90<sup>0</sup>) ",
          validation: "false",
        },
        {
          id: "d",
          exercise: "tan2&#946; = cos&#178;&#946; - sen&#178;&#946;",
          validation: "false",
        },
      ],
    },
  ],
};
