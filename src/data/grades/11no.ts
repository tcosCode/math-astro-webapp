export const grades11no = {
  title: "11no",
  img: "/img/coach-85.svg",
  list: ["Logaritmos", "Geometría", " Límites"],
  exercises: [
    {
      id: "1",
      type: "ChooseAnswer",
      title: "Ecuación de la recta",
      texto: "Calcular luego seleccionar la respuesta correcta.",
      incisos: [
        {
          id: "a",
          exercise:
            "A(-2; 1)&nbsp;&nbsp;y&nbsp;&nbsp;B(4;<sup>1</sup>/<sub>3</sub>)",
          answer: [
            {
              text: "5,93",
              validation: "incorrect",
            },
            {
              text: "6,03",
              validation: "correct",
            },
            {
              text: "7,12",
              validation: "incorrect",
            },
          ],
        },
        {
          id: "b",
          exercise:
            "A(2<sup>3</sup>; 1)&nbsp;&nbsp;y&nbsp;&nbsp;B(4; <sup>1</sup>/<sub>2</sub>)",
          answer: [
            {
              text: "2,18",
              validation: "incorrect",
            },
            {
              text: "3,21",
              validation: "incorrect",
            },
            {
              text: "4,03",
              validation: "correct",
            },
          ],
        },
      ],
    },
    {
      id: "2",
      type: "ChooseAnswer",
      title: "Ecuación de la recta",
      texto:
        "Calcular la pendiente de la recta MN. Determinar los cuadrantes que pasa.",
      incisos: [
        {
          id: "a",
          exercise: "M(1; 3) y N(3; 7)",
          answer: [
            {
              text: "m = -2 pasa III y I Cuadrantes ",
              validation: "incorrect",
            },
            {
              text: "m = 2 pasa III y I Cuadrantes ",
              validation: "correct",
            },
            {
              text: "m = 2 pasa II y IV Cuadrantes ",
              validation: "incorrect",
            },
          ],
        },
        {
          id: "b",
          exercise: "M(-2; 1) y N(4; 1/3)",
          answer: [
            {
              text: "m = 4 pasa III y IV Cuadrantes ",
              validation: "incorrect",
            },
            {
              text: "m = -4 pasa III y IV Cuadrantes ",
              validation: "incorrect",
            },
            {
              text: "m = -4 pasa II y IV Cuadrantes ",
              validation: "correct",
            },
          ],
        },
      ],
    },
    {
      id: "3",
      type: "Matching",
      title: "Ecuación de la recta",
      texto: "Calcular el puerto P común de las rectas r y s.",
      incisos: [
        {
          text: "<strong>Pregunta:</strong> r: 2x - y - 1 = 0\ns: x - 2y + 4 = 0",
          pairId: 1,
        },
        {
          text: "Respuesta: P(2; 3)",
          pairId: 1,
        },
        {
          text: "<strong>Pregunta:</strong> r: 2x - y - 1 = 0\ns: 3x - y - 4 = 0",
          pairId: 2,
        },
        {
          text: "Respuesta: P(3; 5)",
          pairId: 2,
        },
        {
          text: "<strong>Pregunta:</strong> r: 3x - y - 1 = 0\ns:  3x + 4y + 5 = 0",
          pairId: 3,
        },
        {
          text: "Respuesta: P(-6/5; -1/15)",
          pairId: 3,
        },
        {
          text: "Respuesta: P(2; 5)",
          pairId: 4,
        },
      ],
    },
    {
      id: "4",
      type: "ChooseAnswer",
      title: "Ecuación de la recta",
      texto: "Calcular las coordenadas del punto medio M los puntos R y T",
      incisos: [
        {
          id: "a",
          exercise: "R(-2; 1) y T(4; 1/3)",
          answer: [
            {
              text: "M(2/3; 1)",
              validation: "incorrect",
            },
            {
              text: "M(1; 2/3)",
              validation: "correct",
            },
            {
              text: "M(-1; 2/3)",
              validation: "incorrect",
            },
          ],
        },
        {
          id: "b",
          exercise: "R(1; 3) y T(3; 7)",
          answer: [
            {
              text: "M(2; 5)",
              validation: "correct",
            },
            {
              text: "M(5; 2)",
              validation: "incorrect",
            },
            {
              text: "M(-2; 5)",
              validation: "incorrect",
            },
          ],
        },
      ],
    },
    {
      id: "5",
      type: "Matching",
      title: "Ecuación de la recta",
      texto: "Calcular el punto común de r y s.",
      incisos: [
        {
          text: "<strong>Pregunta:</strong> r:(x; y) = (-5; 0) + t(2; 1)\ns:(x; y) = (3; 2) + t<sub>1</sub>(-1; 2)",
          pairId: 1,
        },
        {
          text: "Respuesta: P(11/5; 18/5)",
          pairId: 1,
        },
        {
          text: "<strong>Pregunta:</strong> r:(x; y) = (1; 5) + t(4; 2)\ns:(x; y) = (2; 2) + t<sub>1</sub>(-2; 4)",
          pairId: 2,
        },
        {
          text: "Respuesta: P(3/5; 24/5)",
          pairId: 2,
        },
        {
          text: "Respuesta: P(11/5; 24/5)",
          pairId: 3,
        },
      ],
    },
    {
      id: "6",
      type: "ChooseAnswer",
      title: "Ecuaciones exponenciales",
      texto:
        "Resolver las sgtes ecuaciones exponenciales.\n&#9997;Trabaje primero en la libreta.",
      incisos: [
        {
          id: "a",
          exercise: "7<sup>x+1</sup> = 7<sup>3x+2</sup>",
          answer: [
            {
              text: "x = &#189;",
              validation: "incorrect",
            },
            {
              text: "x = -&#189;",
              validation: "correct",
            },
            {
              text: "x = 2",
              validation: "incorrect",
            },
          ],
        },
        {
          id: "b",
          exercise: "5<sup>x+3</sup> = 5",
          answer: [
            {
              text: "x = -2",
              validation: "correct",
            },
            {
              text: "x = 1",
              validation: "incorrect",
            },
            {
              text: "x = 2",
              validation: "incorrect",
            },
          ],
        },
        {
          id: "c",
          exercise: "2<sup>x</sup> = 1024",
          answer: [
            {
              text: "x = 12",
              validation: "incorrect",
            },
            {
              text: "x = -10",
              validation: "incorrect",
            },
            {
              text: "x = 10",
              validation: "correct",
            },
          ],
        },
        {
          id: "d",
          exercise: "2<sup>3x+1</sup> = 1",
          answer: [
            {
              text: "x = &#8531;",
              validation: "incorrect",
            },
            {
              text: "x = -&#8531;",
              validation: "correct",
            },
            {
              text: "x = &#189;",
              validation: "incorrect",
            },
          ],
        },
        {
          id: "e",
          exercise: "3<sup>5x</sup> = 81",
          answer: [
            {
              text: "x = &#8538;",
              validation: "incorrect",
            },
            {
              text: "x = -&#8536;",
              validation: "incorrect",
            },
            {
              text: "x = &#8536;",
              validation: "correct",
            },
          ],
        },
        {
          id: "f",
          exercise: "3<sup>2x+1</sup> = &#185;/&#8329;",
          answer: [
            {
              text: "x = -&#179;/&#8322;",
              validation: "correct",
            },
            {
              text: "x = &#190;",
              validation: "incorrect",
            },
            {
              text: "x = &#8535;",
              validation: "incorrect",
            },
          ],
        },
        {
          id: "g",
          exercise: "3<sup>x</sup> = &#8730;3",
          answer: [
            {
              text: "x = -&#189;",
              validation: "incorrect",
            },
            {
              text: "x = &#189;",
              validation: "correct",
            },
            {
              text: "x = 2",
              validation: "incorrect",
            },
          ],
        },
        {
          id: "h",
          exercise: "7<sup>x+1</sup> = 49<sup>3x-2</sup>",
          answer: [
            {
              text: "x = 2",
              validation: "incorrect",
            },
            {
              text: "x = -1",
              validation: "incorrect",
            },
            {
              text: "x = 1",
              validation: "correct",
            },
          ],
        },
      ],
    },
    {
      id: "7",
      type: "ChooseAnswer",
      title: "Funciones compuestas",
      texto: "Dadas las funciones determinar f•g",
      incisos: [
        {
          id: "a",
          exercise: "f(x) = x<sup>-2</sup> + 1 \ng(x) = 2x + 1",
          answer: [
            {
              text: "f•g = 2x+1",
              validation: "incorrect",
            },
            {
              text: "f•g = 1/(2x+1)²",
              validation: "correct",
            },
            {
              text: "f•g = 1/2x",
              validation: "incorrect",
            },
          ],
        },
        {
          id: "b",
          exercise: "f(x) = |x|\ng(x) = √x",
          answer: [
            {
              text: "f•g = |√x|",
              validation: "correct",
            },
            {
              text: "f•g = √|x|",
              validation: "incorrect",
            },
            {
              text: "f•g = x",
              validation: "incorrect",
            },
          ],
        },
        {
          id: "c",
          exercise: "f(x) = x²\ng(x) = x+5",
          answer: [
            {
              text: "x²-10x+25",
              validation: "incorrect",
            },
            {
              text: "f•g = x²+x+25",
              validation: "incorrect",
            },
            {
              text: "f•g = x²+10x+25",
              validation: "correct",
            },
          ],
        },
        {
          id: "d",
          exercise: "f(x) = x+3\ng(x) = x-3",
          answer: [
            {
              text: "f•g = x",
              validation: "correct",
            },
            {
              text: "f•g = 3",
              validation: "incorrect",
            },
            {
              text: "f•g = -x",
              validation: "incorrect",
            },
          ],
        },
      ],
    },
    {
      id: "8",
      type: "TrueFalse",
      title: "Razones trigonométricas",
      texto: "Escoge las razones correctas:",
      incisos: [
        {
          id: "a",
          exercise: "sen&#8733; = <sup>cat op</sup>/<sub>hip</sub>",
          validation: "true",
        },
        {
          id: "b",
          exercise: "tan&#8733; = <sup>cat op</sup>/<sub>(cat ady)</sub>",
          validation: "true",
        },
        {
          id: "c",
          exercise: "cos&#8733; = <sup>(cat op)</sup>/<sub>hip</sub>",
          validation: "false",
        },
        {
          id: "d",
          exercise: "sec&#8733; = <sup>hip</sup>/<sub>(cat ady)</sub>\n",
          validation: "true",
        },
        {
          id: "e",
          exercise: "csc&#8733; = <sup>(cat op)</sup>/<sub>hip</sub>",
          validation: "false",
        },
        {
          id: "f",
          exercise: "cot&#8733; = <sup>(cat ady)</sup>/<sub>(cat op)</sub>",
          validation: "true",
        },
        {
          id: "g",
          exercise: "sen90º = 0",
          validation: "false",
        },
        {
          id: "h",
          exercise: "cos0º = 0",
          validation: "false",
        },
        {
          id: "i",
          exercise: "tan90º = 0",
          validation: "false",
        },
      ],
    },
    {
      id: "9",
      type: "ChooseAnswer",
      title: "Razones trigonométricas",
      img: "/img/exercises/11no-9.webp",
      texto: "Determinar el valor de x ",
      incisos: [
        {
          id: "a",
          exercise: "Elegir la fórmula adecuada y calcular.",
          answer: [
            {
              text: "sen&#946; = <sup>(cat op)</sup>/<sub>hip</sub>",
              validation: "correct",
            },
            {
              text: "cos&#946; = <sup>(cat ady)</sup>/<sub>hip</sub>",
              validation: "incorrect",
            },
            {
              text: "tan&#946; = <sup>(cat op)</sup>/<sub>(cat ady)</sub>",
              validation: "incorrect",
            },
          ],
        },
        {
          id: "b",
          exercise: "Seleccionar el valor de x calculado ",
          answer: [
            {
              text: "x = 4&#8730;3 cm",
              validation: "correct",
            },
            {
              text: "x = 6&#8730;3 cm",
              validation: "incorrect",
            },
            {
              text: "x = 8&#8830;3 cm",
              validation: "incorrect",
            },
          ],
        },
      ],
    },
    {
      id: "10",
      type: "Problem",
      title: "Logaritmos",
      texto: "Demostrar que se cumple.\nResolver primero en la libreta &#9997;",
      incisos: [
        {
          id: "a",
          exercise: "log<sub>3</sub>27 - log<sub>3</sub>9 = log<sub>3</sub>3",
          answer: "1 = 1",
        },
        {
          id: "b",
          exercise: "2(log<sub>3</sub>9) = log<sub>3</sub>81",
          answer: "4 = 4",
        },
        {
          id: "c",
          exercise: "log<sub>2</sub>4 + log<sub>2</sub>8 = log<sub>2</sub>32",
          answer: "5 = 5",
        },
      ],
    },
    {
      id: "11",
      type: "Problem",
      title: "Identidades trigonométricas",
      texto:
        "Sean las expresiones trigonométricas\nA(&#947;) = <sup>(sen2&#947;&#8226;tan2&#947; + cos2&#947;+sen&#947;)</sup>/<sub>(1+sen&#947)&#178;</sub> y B(&#947;) = <sup>1</sup>/<sub>(1+sen&#947;)</sub>",
      incisos: [
        {
          id: "a",
          exercise:
            "Determinar para qué valores de &#947; &#8712; [0; 2&#960;] se indefine B(&#947;)",
          answer: "&#947;= <sup>3&#960;</sup>/<sub>2</sub>",
        },
        {
          id: "b",
          exercise:
            "Calcular B(<sup>&#960;</sup>/<sub>6</sub>) y diga el dominio restringido al que pertenece ",
          answer: "&#947; &#8712; Q+",
        },
        {
          id: "c",
          exercise: "Demostrar que A(&#947;) = B(&#947;)",
          answer: "MI = MD",
        },
      ],
    },
    {
      id: "12",
      type: "Problem",
      title: "Identidades trigonométricas",
      texto:
        "Sean <p>A(x) = cos²x - sen²x + senx + 1</p><p>B(x) = sen²x · cot²x</p>",
      incisos: [
        {
          id: "a",
          exercise: "Demostrar que B(x) = cos&#178;x para todo x admisible",
          answer:
            "MI=cos&#178;x.(<sup>cos&#178;x</sup>/<sub>sen&#178;x</sub>)=cos&#178;x=MD",
        },
      ],
    },
    {
      id: "13",
      type: "Problem",
      title: "Identidades trigonométricas",
      texto: "Demostrar que",
      incisos: [
        {
          id: "a",
          exercise: "<sup>sen2x</sup>/<sub>2tanx</sub> - sen²x = cos2x",
          answer: "cos2x = cos2x",
        },
        {
          id: "b",
          exercise: "2tan²x . cos²x + cos2x = 1",
          answer: "1 = 1",
        },
        {
          id: "c",
          exercise:
            "<sup>(sen2x + cosx)</sup>/<sub>2 - 2cos²x + senx</sub> . tanx = tan<sub>π</sub>/<sub>4</sub>",
          answer: "tan<sup>π</sup>/<sub>4</sub> = tan<sup>π</sup>/<sub>4</sub>",
        },
      ],
    },
    {
      id: "14",
      type: "FillBlank",
      title: "Identidades trigonométricas",
      texto:
        "Dadas las identidades trigonométricas, complete las siguientes ecuaciones:",
      incisos: [
        {
          id: "a",
          sentence: ["sen²x + cos²x =", "blank1", ""],
          options: [
            {
              id: "a_option1",
              text: "1",
              position: "blank1",
            },
            {
              id: "a_option2",
              text: "sen²x",
              position: "none",
            },
            {
              id: "a_option3",
              text: "cos²x",
              position: "none",
            },
          ],
        },
        {
          id: "b",
          sentence: ["sen2x =", "blank1", ""],
          options: [
            {
              id: "b_option1",
              text: "senxcosx",
              position: "none",
            },
            {
              id: "b_option2",
              text: "2senxcosx",
              position: "blank1",
            },
            {
              id: "b_option3",
              text: "2senx",
              position: "none",
            },
          ],
        },
        {
          id: "c",
          sentence: ["cos2x =", "blank1", ""],
          options: [
            {
              id: "c_option1",
              text: "cosx-1",
              position: "none",
            },
            {
              id: "c_option2",
              text: "2cosx-1",
              position: "none",
            },
            {
              id: "c_option3",
              text: "2cos²x-1",
              position: "blank1",
            },
          ],
        },
      ],
    },
  ],
};
