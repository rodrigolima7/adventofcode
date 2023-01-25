import { readFileSync } from "fs";
import { calculate } from "./work";

const input = readFileSync("input.txt", "utf8");

console.log(`
  NUMBER OF NICE STRINGS:
    UNDER FIRST RULES: ${calculate(input, 1)}
    UNDER SECOND RULES: ${calculate(input, 2)}
`);
