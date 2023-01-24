import { readFileSync } from "fs";
import { calculate } from "./work";

const input = readFileSync("input.txt", "utf8");

console.log(`
  LOWEST POSITIVE NUMBER AT:
    5-ZERO DIFFICULTY: ${calculate(input, 5)}
    6-ZERO DIFFICULTY: ${calculate(input, 6)}
`);
