import { calculate } from "./work";

it.each([
  ["", 0],
  ["   ", 0],
  ["(())", 0],
  ["()()", 0],
  ["(((", 3],
  ["(()(()(", 3],
  ["())", -1],
  ["))(", -1],
  [")))", -3],
  [")())())", -3],
])("If input is %p, final floor will be %p.", (input, result) => {
  expect(calculate(input).finalFloor).toBe(result);
});

it.each([
  [")", 1],
  ["()())", 5],
])("If input is %p, first time at basement position will be %p.", (input, result) => {
  expect(calculate(input).firstTimeAtBasementPosition).toBe(result);
});
