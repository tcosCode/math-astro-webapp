export const grades7mo = {
  title: "7mo",
  img: "/img/calculator.svg",
  list: ["Racionales", "Geometría", "Variables"],
  exercises: [
    {
      id: "1",
      type: "FillBlank",
      title: "Área y Perímetro",
      img: "/img/exercises/7mo-1.webp",
      texto:
        "En la figura ABCD es un rombo de 4,0 cm de lado y DF altura. Completar los espacios en blanco.",
      incisos: [
        {
          id: "a",
          sentence: [
            "Si la amplitud del &#8738;BAD = 60° entonces la del &#8738;ADE = ",
            "blank1",
          ],
          options: [
            {
              id: "a_option1",
              text: "30°",
              position: "none",
            },
            {
              id: "a_option2",
              text: "45°",
              position: "none",
            },
            {
              id: "a_option3",
              text: "60°",
              position: "blank1",
            },
          ],
        },
        {
          id: "b",
          sentence: ["El perímetro del rombo ABCD es de ", "blank1"],
          options: [
            {
              id: "b_option1",
              text: "14cm",
              position: "none",
            },
            {
              id: "b_option2",
              text: "16cm",
              position: "blank1",
            },
            {
              id: "b_option3",
              text: "20cm",
              position: "none",
            },
          ],
        },
        {
          id: "c",
          sentence: ["El &#916 AED; según sus lados es ", "blank1"],
          options: [
            {
              id: "c_option1",
              text: "Equilátero ",
              position: "none",
            },
            {
              id: "c_option2",
              text: "Isósceles ",
              position: "none",
            },
            {
              id: "c_option3",
              text: "Escaleno ",
              position: "blank1",
            },
          ],
        },
      ],
    },
    {
      id: "2",
      type: "Problem",
      title: "Números enteros",
      texto: "Calcular:",
      incisos: [
        {
          id: "a",
          exercise: "-½ + (2,1)² + 3(¼ + 1)",
          answer: "7,66",
        },
        {
          id: "b",
          exercise: "(-½)³ +&#8730;25 &#8226; <sup>1</sup>/</sub>10</sub>",
          answer: "-3,72",
        },
      ],
    },
    {
      id: "3",
      type: "Problem",
      title: "Solución de ecuaciones",
      texto:
        "En un destacamento de 34 alumnos de una secundaria \nBásica, el doble de la cantidad de varones disminuido en cinco es la cantidad de hembras ",
      incisos: [
        {
          id: "a",
          exercise:
            "Calcular la cantidad de varones y de hembras que integran el destacamento ",
          answer: "V = 13; H= 21",
        },
      ],
    },
    {
      id: "4",
      type: "Problem",
      title: "Operaciones combinadas",
      texto: "Resolver respetando el orden de las operaciones ",
      incisos: [
        {
          id: "a",
          exercise: "(½)³+(√25).(<sup>1</sup>/<sub>10</sub>-4)",
          answer: "-3,72",
        },
      ],
    },
    {
      id: "5",
      type: "Problem",
      title: "Solución de ecuaciones",
      texto:
        "María y Pedro son estudiantes de 7mo y han realizado un total de 78 exposiciones en esta jornada y María superó en 14 a las exposiciones de Pedro.",
      incisos: [
        {
          id: "a",
          exercise: "¿Cuántas exposiciones realizó cada uno?",
          answer: "Pedro = 32 y María = 46",
        },
        {
          id: "b",
          exercise: "¿Qué % representan las que realizó Pedro?",
          answer: "Pedro = 41,02%",
        },
      ],
    },
    {
      id: "6",
      type: "Problem",
      title: "Solución de ecuaciones",
      texto:
        "En el concurso de Física, Química y matemáticas se presentaron un total de 450 estudiantes en las tres asignaturas. La cantidad de participantes en Matemáticas fue el doble de la de Química y en Física superaron en 18 a los de Química ",
      incisos: [
        {
          id: "a",
          exercise: "¿Cuántos estudiantes participaron en cada asignatura?",
          answer: "Q = 108; F = 126 y Matemáticas = 216",
        },
      ],
    },
    {
      id: "7",
      type: "ChooseAnswer",
      title: "Operaciones combinadas",
      texto:
        "Calcular el valor numérico de R(x). Seleccionar la respuesta correcta:",
      incisos: [
        {
          id: "a",
          exercise: "Si x = &#8731;(-8)",
          answer: [
            {
              text: "R(x) = 2",
              validation: "incorrect",
            },
            {
              text: "R(x) = -1",
              validation: "correct",
            },
            {
              text: "R(x) = -2",
              validation: "incorrect",
            },
          ],
        },
      ],
    },
    {
      id: "8",
      type: "FillBlank",
      title: "Operaciones combinadas",
      texto:
        "Dada la sgte lista \n1,2; ¾; 1,25 y 0,85. Completar los espacios en blanco:",
      incisos: [
        {
          id: "a",
          sentence: ["El número mayor ", "blank1", ""],
          options: [
            {
              id: "a_option1",
              text: "0,85",
              position: "none",
            },
            {
              id: "a_option2",
              text: "1,2",
              position: "none",
            },
            {
              id: "a_option3",
              text: "1,25",
              position: "blank1",
            },
          ],
        },
        {
          id: "b",
          sentence: ["El menor número", "blank1", ""],
          options: [
            {
              id: "b_option1",
              text: "1,25",
              position: "none",
            },
            {
              id: "b_option2",
              text: "¾",
              position: "blank1",
            },
            {
              id: "b_option3",
              text: "0,85",
              position: "none",
            },
          ],
        },
        {
          id: "c",
          sentence: ["El número menor que 1,2", "blank1", ""],
          options: [
            {
              id: "c_option1",
              text: "0,85",
              position: "blank1",
            },
            {
              id: "c_option2",
              text: "1,2",
              position: "none",
            },
            {
              id: "c_option3",
              text: "1,25",
              position: "none",
            },
          ],
        },
      ],
    },
    {
      id: "9",
      type: "ChooseAnswer",
      title: "Estadística",
      texto: `Seleccionar la respuesta correcta.
La tabla muestra la cantidad de sacos que existen en un almacén organizados como se muestra:
    <table>
        <thead>
            <tr>
                <th>Peso (kg)</th>
                <th>Cant sacos</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>12</td>
                <td>1</td>
            </tr>
            <tr>
                <td>20</td>
                <td>5</td>
            </tr>
            <tr>
                <td>25</td>
                <td>2</td>
            </tr>
            <tr>
                <td>30</td>
                <td>1</td>
            </tr>
            <tr>
                <td>40</td>
                <td>1</td>
            </tr>
        </tbody>
    </table>`,
      incisos: [
        {
          id: "a",
          exercise: "¿Cuál es el peso promedio de los sacos?",
          answer: [
            {
              text: "24,5",
              validation: "incorrect",
            },
            {
              text: "25,4",
              validation: "correct",
            },
            {
              text: "23,4",
              validation: "incorrect",
            },
          ],
        },
        {
          id: "b",
          exercise: "¿Cuál es el peso más común?",
          answer: [
            {
              text: "12",
              validation: "incorrect",
            },
            {
              text: "20",
              validation: "correct",
            },
            {
              text: "25",
              validation: "incorrect",
            },
          ],
        },
      ],
    },
    {
      id: "10",
      type: "TrueFalse",
      title: "Estadística",
      texto: `Seleccionar V o F.
La tabla muestra la cantidad de sacos de diferentes pesos en kg de un almacén como se muestra en la tabla.
    <table>
        <thead>
            <tr>
                <th>Peso (kg)</th>
                <th>Cant de sacos</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>12</td>
                <td>1</td>
            </tr>
            <tr>
                <td>20</td>
                <td>5</td>
            </tr>
            <tr>
                <td>25</td>
                <td>2</td>
            </tr>
            <tr>
                <td>30</td>
                <td>1</td>
            </tr>
            <tr>
                <td>40</td>
                <td>1</td>
            </tr>
        </tbody>
    </table>`,
      incisos: [
        {
          id: "a",
          exercise: "En el almacén hay 10 sacos de frijoles.",
          validation: "true",
        },
        {
          id: "b",
          exercise:
            "En el almacén hay 5 sacos de frijoles que pesan más de 30 kg",
          validation: "false",
        },
        {
          id: "c",
          exercise:
            "La FA de un dato es la cantidad de veces que aparece repetido.",
          validation: "true",
        },
      ],
    },
    {
      id: "11",
      type: "ChooseAnswer",
      title: "Estadística",
      texto: `La tabla muestra la cantidad de cajas con pesos diferentes (kg) de un almacén:
    <table>
        <thead>
            <tr>
                <th>Peso (kg)</th>
                <th>Cantidad de cajas</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>17</td>
                <td>2</td>
            </tr>
            <tr>
                <td>25</td>
                <td>6</td>
            </tr>
            <tr>
                <td>30</td>
                <td>3</td>
            </tr>
            <tr>
                <td>35</td>
                <td>2</td>
            </tr>
            <tr>
                <td>45</td>
                <td>2</td>
            </tr>
        </tbody>
    </table>`,
      incisos: [
        {
          id: "a",
          exercise: "¿Cuál es el peso promedio de las cajas?",
          answer: [
            {
              text: "30,4kg",
              validation: "correct",
            },
            {
              text: "31,5kh",
              validation: "incorrect",
            },
            {
              text: "32,6kg",
              validation: "incorrect",
            },
          ],
        },
        {
          id: "b",
          exercise: "¿Cuál es el peso más común?",
          answer: [
            {
              text: "35kg",
              validation: "incorrect",
            },
            {
              text: "30kg",
              validation: "incorrect",
            },
            {
              text: "25kg",
              validation: "correct",
            },
          ],
        },
        {
          id: "c",
          exercise: "¿Qué nombre recibe el 25 kg?",
          answer: [
            {
              text: "Media ",
              validation: "incorrect",
            },
            {
              text: "Moda",
              validation: "correct",
            },
            {
              text: "Mediana ",
              validation: "incorrect",
            },
          ],
        },
      ],
    },
    {
      id: "12",
      type: "ChooseAnswer",
      title: "Área y Perímetro",
      img: "/img/exercises/7mo-12.webp",
      texto:
        " En la figura se muestra el &#916;RMN. Seleccionar la respuesta correcta:",
      incisos: [
        {
          id: "a",
          exercise:
            " Por las amplitudes de sus ángulos interiores, el &#916;RMN es:",
          answer: [
            {
              text: "Obtusángulo",
              validation: "incorrect",
            },
            {
              text: "Acutángulo",
              validation: "correct",
            },
            {
              text: " Rectángulo",
              validation: "incorrect",
            },
          ],
        },
        {
          id: "b",
          exercise:
            " En todo triángulo rectángulo la suma de las longitudes de dos de sus lados, comparada con la del tercero es siempre:",
          answer: [
            {
              text: " Mayor",
              validation: "correct",
            },
            {
              text: " Igual",
              validation: "incorrect",
            },
            {
              text: " Menor",
              validation: "incorrect",
            },
          ],
        },
        {
          id: "c",
          exercise:
            "En todo triángulo la suma de las amplitudes de dos de sus ángulos interiores, comparada con la del tercero es:",
          answer: [
            {
              text: " Menor",
              validation: "incorrect",
            },
            {
              text: " Mayor",
              validation: "incorrect",
            },
            {
              text: " Mayor o igual",
              validation: "correct",
            },
          ],
        },
      ],
    },
    {
      id: "13",
      type: "TrueFalse",
      title: "Área y Perímetro",
      texto: "Seleccionar V o F según convenga. La fórmula para calcular:",
      incisos: [
        {
          id: "a",
          exercise: "El perímetro de un triángulo: P = a + b + c",
          validation: "true",
        },
        {
          id: "b",
          exercise: "El perímetro de un paralelogramo: p = 4a",
          validation: "false",
        },
        {
          id: "c",
          exercise: "El perímetro de un rombo: P = 4a",
          validation: "true",
        },
        {
          id: "d",
          exercise: "El perímetro de un trapecio: p = a + b + c",
          validation: "false",
        },
        {
          id: "e",
          exercise:
            "El área de un triángulo: A = <sup>(b.h)</sup>/<sub>2</sub>",
          validation: "true",
        },
        {
          id: "f",
          exercise: "El área de un rectángulo: P = a.b",
          validation: "true",
        },
      ],
    },
    {
      id: "14",
      type: "Problem",
      title: "Área y Perímetro",
      img: "/img/exercises/7mo-14.webp",
      texto:
        "En el &#916;ABC se han trazado AD&#8869;BC y DE&#8869;AB. D &#8712; BC y E &#8712; AB. AD es bisectriz del &#8738;BAC. |AD| = 6,0cm. &#8738;CAB = 60&#176;",
      incisos: [
        {
          id: "a",
          exercise:
            "Identificar la fórmula para calcular el área del &#916;AED.",
          answer: "A<sub>&#916;AED</sub> = (|AE|.|ED|)/<sub>2</sub>",
        },
        {
          id: "b",
          exercise: "Calcular el área del &#916;AED",
          answer: "A<sub>&#916;AED</sub> = 7,8cm&#178;",
        },
      ],
    },
    {
      id: "15",
      type: "Problem",
      title: "Área y Perímetro",
      img: "/img/exercises/7mo-15.webp",
      texto:
        "Dado el &#916;DEF; rectángulo en F: PQ || DF, |DE| = 10cm, |DF| = 6,0cm, |EF|= 8.0cm, |FQ| = 2,4cm",
      incisos: [
        {
          id: "a",
          exercise:
            "Identificar la fórmula para calcular el perímetro del cuadrilátero DPQF",
          answer: "P<sub>DPQF</sub> = |DP|+|PQ|+|QF|+|FD|",
        },
        {
          id: "b",
          exercise:
            "Calcular |QP| y |DP| aplicando el teorema de las transversales",
          answer: "|QP| = 4,2cm y |DP| = 3cm",
        },
        {
          id: "c",
          exercise: "Calcular el perímetro del cuadrilátero DPQF",
          answer: "P<sub>DPQF</sub> = 16cm",
        },
      ],
    },
    {
      id: "16",
      type: "Matching",
      title: "Área y Perímetro",
      texto:
        "Enlaza las parejas. Escoge la fórmula correspondiente a cada figura geométrica",
      incisos: [
        {
          text: "<strong>Pregunta:</strong> Fórmula para calcular el área de un triángulo.",
          pairId: 1,
        },
        {
          text: "Respuesta: A = &#189;(b * h)",
          pairId: 1,
        },
        {
          text: "<strong>Pregunta:</strong> Fórmula para calcular el área de un rectángulo.",
          pairId: 3,
        },
        {
          text: "Respuesta: A = a * b",
          pairId: 3,
        },
        {
          text: "<strong>Pregunta:</strong> Fórmula para calcular el área de una circunferencia.",
          pairId: 4,
        },
        {
          text: "Respuesta: A = Πr²",
          pairId: 4,
        },
        {
          text: "Respuesta: A = a + b",
          pairId: 5,
        },
      ],
    },
  ],
};
