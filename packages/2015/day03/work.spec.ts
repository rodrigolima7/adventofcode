import { calculate } from "./work";

it.each([
  [">", 2],
  ["^>v<", 4],
  ["^v^v^v^v^v", 2],
])("When alone, if input is %p, then number of houses must be %p.", (input, expected) => {
  expect(calculate(input, "alone")).toBe(expected);
});

it.each([
  ["^v", 3],
  ["^>v<", 3],
  ["^v^v^v^v^v", 11],
])("When with a robot, if input is %p, then number of houses must be %p.", (input, expected) => {
  expect(calculate(input, "withRobot")).toEqual(expected);
});
