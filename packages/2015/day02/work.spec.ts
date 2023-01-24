import { calculate } from "./work";

it.each([
  ["2x3x4", { totalWrappingPaper: 58, totalRibbon: 34 }],
  ["1x1x10", { totalWrappingPaper: 43, totalRibbon: 14 }],
  ["2x3x4\n1x1x10", { totalWrappingPaper: 101, totalRibbon: 48 }],
  ["4x2x3", { totalWrappingPaper: 58, totalRibbon: 34 }],
  ["1x10x1", { totalWrappingPaper: 43, totalRibbon: 14 }],
  ["20x3x11", { totalWrappingPaper: 659, totalRibbon: 688 }],
])("If input is %p, then required square feet is %p.", (input, result) => {
  expect(calculate(input)).toEqual(result);
});
