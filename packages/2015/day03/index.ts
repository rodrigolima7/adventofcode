import { readFileSync } from "fs";
import { calculate } from "./work";

const input = readFileSync("input.txt", "utf8");

console.log(`
  NUMBER OF HOUSE WITH ONE OR MORE PRESENTS
    WHEN ALONE: ${calculate(input, "alone")}
    WHEN WITH A ROBOT: ${calculate(input, "withRobot")}
`);
