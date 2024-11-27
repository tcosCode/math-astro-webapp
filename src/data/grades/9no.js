import { constants } from "@data/constants";
import { table } from "node_modules/astro/dist/core/logger/core";

const {
  TRUEFALSE,
  CHOOSEANSWER,
  PROBLEM,
  CORRECT,
  INCORRECT,
  VALIDATE_TRUE,
  VALIDATE_FALSE,
} = constants;

// Data for 9no Grade
export const grades9no = {
  title: "9no",
  img: "/img/school-36.svg",
  list: ["Estadística", "Geometría", "Ecuaciones"],
  exercises: [
    {
      id: "1",
      type: CHOOSEANSWER,
      title: "Descomponer en factores",
      texto:
        "Descomponer en factores. Trabaje en su libreta y luego seleccione una opción como resultado:",
      incisos: [
        {
          id: "a",
          exercise: "8a - 8b",
          answer: [
            { text: "(a - 8)(b - 8)", validation: INCORRECT },
            { text: "8(a - 8b)", validation: INCORRECT },
            { text: "8(a - b)", validation: CORRECT },
          ],
        },
        {
          id: "b",
          exercise: "x<sup>2</sup> - 2x - 48",
          answer: [
            { text: "(x - 8)(x - 6)", validation: INCORRECT },
            { text: "(x - 8)(x + 6)", validation: CORRECT },
            { text: "D &lt; 0", validation: INCORRECT },
          ],
        },
        {
          id: "c",
          exercise: "y<sup>2</sup> - 49",
          answer: [
            { text: "(y + 7)(y - 7)", validation: INCORRECT },
            { text: "(y + 7)(y + 7y)", validation: INCORRECT },
            { text: "(y - 7)(y + 7)", validation: CORRECT },
          ],
        },
        {
          id: "d",
          exercise: "2m<sup>2</sup> - 17m - 48",
          answer: [
            { text: "(2m + 1)(m + 8)", validation: INCORRECT },
            { text: "(2m - 1)(m - 8)", validation: CORRECT },
            { text: "(2m + 1)(m - 8)", validation: INCORRECT },
          ],
        },
        {
          id: "e",
          exercise: "y<sup>2</sup> - 7",
          answer: [
            {
              text: "(y - 7<sup>1/2</sup>)(y - 7<sup>1/2</sup>)",
              validation: INCORRECT,
            },
            {
              text: "(y + 7<sup>1/2</sup>)(y + 7<sup>1/2</sup>)",
              validation: INCORRECT,
            },
            {
              text: "(y + 7<sup>1/2</sup>)(y - 7<sup>1/2</sup>)",
              validation: CORRECT,
            },
          ],
        },
        {
          id: "f",
          exercise: "5n<sup>2</sup> + 12n + 4",
          answer: [
            { text: "(5n + 2)(n - 2)", validation: INCORRECT },
            { text: "(5n + 2)(n + 2)", validation: CORRECT },
            { text: "(5n - 2)(n + 2)", validation: INCORRECT },
          ],
        },
        {
          id: "g",
          exercise: "x<sup>2</sup> - x + 8",
          answer: [
            { text: "D &lt; 0", validation: CORRECT },
            { text: "(x + 2)(x + 4)", validation: INCORRECT },
            { text: "(x - 2)(x + 4)", validation: INCORRECT },
          ],
        },
        {
          id: "h",
          exercise: "v<sup>2</sup> - 36 + 12v",
          answer: [
            { text: "(v - 14.4)(v - 2.4)", validation: CORRECT },
            { text: "(v + 14.4)(v + 2.4)", validation: INCORRECT },
            { text: "(v + 14.4)(v - 2.4)", validation: INCORRECT },
          ],
        },
      ],
    },
    {
      id: "2",
      type: CHOOSEANSWER,
      title: "Factorizar",
      texto:
        "Factorizar completamente. Trabaje en su libreta y luego seleccione una opción como resultado:",
      incisos: [
        {
          id: "a",
          exercise: "8x<sup>3</sup> - 2x",
          answer: [
            { text: "2x(2x-1)(2x-1)", validation: INCORRECT },
            { text: "2x(2x+1)(2x+1)", validation: INCORRECT },
            { text: "2x(2x+1)(2x-1)", validation: CORRECT },
          ],
        },
        {
          id: "b",
          exercise: "3y<sup>2</sup> + 6y - 24",
          answer: [
            { text: "(3y - 6)(y + 4)", validation: CORRECT },
            { text: "(3y + 6)(y + 4)", validation: INCORRECT },
            { text: "(3y + 6)(y - 4)", validation: INCORRECT },
          ],
        },
        {
          id: "c",
          exercise: "18z<sup>3</sup> - 54z",
          answer: [
            { text: "9z(2z<sup>2</sup> + 6)", validation: INCORRECT },
            { text: "9z(9z<sup>2</sup> - 6)", validation: CORRECT },
            { text: "9z(2z<sup>2</sup> + 27)", validation: INCORRECT },
          ],
        },
        {
          id: "d",
          exercise: "b<sup>4</sup> - b<sup>2</sup> - 12",
          answer: [
            { text: "(b+2)(b+2)(b<sup>2</sup>+3)", validation: INCORRECT },
            { text: "(b+2)(b-2)(b<sup>2</sup>+3)", validation: CORRECT },
            { text: "(b-2)(b-2)(b<sup>2</sup>+3)", validation: INCORRECT },
          ],
        },
        {
          id: "e",
          exercise: "2x<sup>5</sup> - 16x<sup>3</sup> + 32x",
          answer: [
            {
              text: "2x(x-2)<sup>2</sup>(x+2)<sup>2</sup>",
              validation: CORRECT,
            },
            {
              text: "2x(x+2)<sup>2</sup>(x+2)<sup>2</sup>",
              validation: INCORRECT,
            },
            {
              text: "2x(x-2)<sup>2</sup>(x-2)<sup>2</sup></sup>",
              validation: INCORRECT,
            },
          ],
        },
        {
          id: "f",
          exercise: "x<sup>2</sup> - 8x + 16",
          answer: [
            { text: "(x - 4)(x + 4)", validation: INCORRECT },
            { text: "(x - 4)(x - 4)", validation: CORRECT },
            { text: "(x + 4)(x + 4)", validation: INCORRECT },
          ],
        },
        {
          id: "g",
          exercise: "m<sup>4</sup> - 256",
          answer: [
            { text: "(m<sup>2</sup>+16)(m+4)(m+4)", validation: INCORRECT },
            { text: "(m<sup>2</sup>+16)(m+4)(m-4)", validation: CORRECT },
            { text: "(m<sup>2</sup>+16)(m-4)(m-4)", validation: INCORRECT },
          ],
        },
        {
          id: "h",
          exercise: "v<sup>2</sup> - 36 + 12v",
          answer: [
            {
              text: "3y(y<sup>6</sup>z - y<sup>3</sup>z - 2z)",
              validation: INCORRECT,
            },
            {
              text: "3yz(y<sup>5</sup> - y<sup>3</sup> - 2)",
              validation: INCORRECT,
            },
            {
              text: "3yz(y<sup>6</sup> - y<sup>3</sup> - 2)",
              validation: CORRECT,
            },
          ],
        },
      ],
    },
    {
      id: "3",
      type: TRUEFALSE,
      title: "Seleccionar V o F",
      texto: "Escoja Verdadero o Falso segun corresponda:",
      incisos: [
        {
          id: "a",
          exercise:
            "La operación de sustracción no se puede realizar de manera ilimitada en el conjunto de los números naturales.",
          validation: VALIDATE_TRUE,
        },
        {
          id: "b",
          exercise:
            "La estadística se caracteriza por realizar estudios de datos relativos a conjuntos de datos, individuos y observaciones lo más numerosas posible y ocurridos en diferentes instantes de tiempo.",
          validation: VALIDATE_TRUE,
        },
        {
          id: "c",
          exercise:
            "1/6 es un número fraccionario que es a la vez menor que 0,6 y mayor que 1/5.",
          validation: VALIDATE_FALSE,
        },
        {
          id: "d",
          exercise:
            "La estadística descriptiva estudia una muestra derivando conclusiones sobre un grupo mayor de esta.",
          validation: VALIDATE_FALSE,
        },
        {
          id: "e",
          exercise:
            "El rango o recorrido de una variable es la diferencia entre el dato mayor y el dato menor del conjunto de valores que toma la variable.",
          validation: VALIDATE_TRUE,
        },
        {
          id: "f",
          exercise:
            "La marca de clase es el punto medio de la clase que se obtiene restando los límites de clase superior e inferior y dividiendo entre dos.",
          validation: VALIDATE_FALSE,
        },
        {
          id: "g",
          exercise:
            "La clase modal es la clase de menor frecuencias cuando la anotaciones se presentan unidas en clases.",
          validation: VALIDATE_TRUE,
        },
        {
          id: "h",
          exercise:
            "La clase mediana es la clase en que se encuentra el mayor número de datos.",
          validation: VALIDATE_FALSE,
        },
      ],
    },
    {
      id: "4",
      type: PROBLEM,
      title: "Problema de Estadística",
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
      type: PROBLEM,
      title: "Problema de Estadística",
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
      type: PROBLEM,
      title: "Problema de Estadística",
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
      type: PROBLEM,
      title: "Problema de Estadística",
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
  ],
};
