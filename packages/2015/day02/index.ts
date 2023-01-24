import { readFileSync } from "fs";
import { calculate } from "./work";

const input = readFileSync("input.txt", "utf8");
const { totalWrappingPaper, totalRibbon } = calculate(input);

console.log(`
  REQUIRED WRAPPING PAPER IN FT²: ${totalWrappingPaper}
  REQUIRED RIBBON IN FT: ${totalRibbon}
`);
