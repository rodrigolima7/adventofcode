import { calculate } from "./work";

it.each([
  ["abcdef", 609043],
  ["pqrstuv", 1048970],
])("At 5-zero difficulty, if input is %p, then the lowest positive number for the hash is %p.", (input, expected) => {
  expect(calculate(input, 5)).toBe(expected);
});
