import { calculate } from "./work";

it.each([
  ["ugknbfddgicrmopn", 1],
  ["aaa", 1],
  ["jchzalrnumimnmhp", 0],
  ["haegwjzuvuyypxyu", 0],
  ["dvszwmarrgswjxmb", 0],
])(
  "Under the first rules, if the strings are %p, then the number of nice strings is %p.",
  (input, expected) => {
    expect(calculate(input, 1)).toBe(expected);
  }
);

it.each([
  ["qjhvhtzxzqqjkmpb", 1],
  ["xxyxx", 1],
  ["uurcxstgmygtbstg", 0],
  ["ieodomkazucvgmuy", 0],
])(
  "Under the second rules, if the strings are %p, then the number of nice strings is %p.",
  (input, expected) => {
    expect(calculate(input, 2)).toBe(expected);
  }
);
