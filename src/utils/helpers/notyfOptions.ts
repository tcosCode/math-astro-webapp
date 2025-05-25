interface NotyfOptions {
  duration: number;
  position: {
    x: "right" | "center" | "left";
    y: "top" | "center" | "bottom";
  };
}

const notyfOptions = {
  duration: 3000,
  position: { x: "right", y: "bottom" },
} as NotyfOptions;

export default notyfOptions;
