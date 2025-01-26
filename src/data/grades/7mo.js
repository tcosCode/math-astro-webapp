export const grades7mo = {
  title: "7mo",
  img: "/img/calculator.svg",
  list: ["Racionales", "Geometría", "Variables"],
  exercises: [    
    {
      id: "1",
      type: "FillBlank",
      title: "Área y Perímetro",
      img: "/img/exercises/11no-4.webp",
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
          sentence: ["El &#916; según sus lados es ", "blank1"],
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
  ],
};
