import { calculate } from "./work";

it.each([
  ["", -1],
])(
  "If %p, then %p.",
  (input, expected) => {
    expect(calculate(input)).toBe(expected);
  }
);
