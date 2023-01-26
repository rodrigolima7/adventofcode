import { readFileSync } from "fs";
import { calculate } from "./work";

const input = readFileSync("input.txt", "utf8");

console.log(`
  NUMBER: ${calculate(input)}
`);
