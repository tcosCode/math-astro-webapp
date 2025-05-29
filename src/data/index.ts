export * from "./grades/7mo";
export * from "./grades/8vo";
export * from "./grades/9no";
export * from "./grades/10mo";
export * from "./grades/11no";
export * from "./grades/12mo";

import { grades7mo } from "@data/grades/7mo";
import { grades8vo } from "@src/data/grades/8vo";
import { grades9no } from "@data/grades/9no";
import { grades10mo } from "@src/data/grades/10mo";
import { grades11no } from "@data/grades/11no";
import { grades12mo } from "@src/data/grades/12mo";

export const topics = [
  grades7mo,
  grades8vo,
  grades9no,
  grades10mo,
  grades11no,
  grades12mo,
];
