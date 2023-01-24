import { readFileSync } from "fs";
import { calculate } from "./work";

const { finalFloor, firstTimeAtBasementPosition } = calculate(readFileSync("input.txt", "utf8"));
console.log(`
  Final Floor: ${finalFloor}
  First Time At Basement Position: ${firstTimeAtBasementPosition}
`);
