import type { GridItemAttributes } from "@types";

export function createGridAttrs(
  grade: string,
  exercise: string,
  inciso: string,
): GridItemAttributes {
  return {
    "data-grade": grade,
    "data-exercise": exercise,
    "data-inciso": inciso,
  };
}
