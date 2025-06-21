interface NotyfOptions {
  duration: number;
  position: {
    x: "right" | "center" | "left";
    y: "top" | "center" | "bottom";
  };
  selector: string;
  ripple: boolean;
}

const notyfOptions = {
  duration: 3000,
  position: { x: "right", y: "bottom" },
  selector: "body",
  ripple: false,
} as NotyfOptions;

export default notyfOptions;
