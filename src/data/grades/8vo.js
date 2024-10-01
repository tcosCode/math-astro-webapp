import { constants } from "@data/constants";

const {
  TRUEFALSE,
  CHOOSEANSWER,
  MATCHING,
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
      title: "Emparejar",
      texto: "Encuentra las parejas:",
      incisos: [
        {
          text: "<strong>a) x<sup>3</sup> + 3x<sup>2</sup> - x - 3 : x - 3</strong>",
          pairId: 1,
        },
        { text: "x<sup>2</sup> - 1", pairId: 1 },
        {
          text: "<strong>b) x<sup>3</sup> + 3x<sup>2</sup> - x - 3 : x - 1</strong>",
          pairId: 2,
        },
        { text: "x<sup>2</sup> + 4x + 3", pairId: 2 },
        {
          text: "<strong>c) x<sup>2</sup> + 4x + 3 : x - 1</strong>",
          pairId: 3,
        },
        { text: "x + 1", pairId: 3 },
        {
          text: "<strong>d) x<sup>2</sup> + 4x + 3 : x + 1</strong>",
          pairId: 4,
        },
        { text: "x + 3", pairId: 4 },
        { text: "<strong>e) x<sup>2</sup> - 4 : x + 2</strong>", pairId: 5 },
        { text: "x - 2", pairId: 5 },
        {
          text: "<strong>f) x<sup>3</sup> - x - 3 : x - 3</strong>",
          pairId: 6,
        },
        { text: "x<sup>2</sup> + 3x + 8", pairId: 6 },
      ],
    },
    {
      id: "2",
      type: MATCHING,
      title: "Emparejar",
      texto: "Encuentra las parejas:",
      incisos: [
        {
          text: "<strong>a) x<sup>3</sup> - 3x - 3 : x + 1</strong>",
          pairId: 1,
        },
        { text: "x<sup>2</sup> + 4x + 4", pairId: 1 },
        {
          text: "<strong>b) x<sup>2</sup> - y<sup>2</sup></strong>",
          pairId: 2,
        },
        { text: "(x + y)(x - y)", pairId: 2 },
        {
          text: "<strong>c) Z  N</strong>",
          pairId: 3,
        },
        { text: "Z<sup>-</sup>", pairId: 3 },
        {
          text: "<strong>d) N es subconjunto de:</strong>",
          pairId: 4,
        },
        { text: "Z", pairId: 4 },
        {
          text: "<strong>e) <sup>8</sup>/<sub>25</sub> pertenece a:</strong>",
          pairId: 5,
        },
        { text: "Q<sub>+</sub>", pairId: 5 },
        {
          text: "<strong>f) <sup>4</sup>/<sub>5</sub> es simétrico de:</strong>",
          pairId: 6,
        },
        { text: "-<sup>4</sup>/<sub>5</sub>", pairId: 6 },
        {
          text: "<strong>f) <sup>5</sup>/<sub>9</sub> es el inverso de:</strong>",
          pairId: 7,
        },
        { text: "<sup>9</sup>/<sub>5</sub>", pairId: 7 },
      ],
    },
  ],
};
