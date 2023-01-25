const vowels = /[aeiouAEIOU]/g;
const doubleLetters = /([a-z])\1/g;
const badWords = /(ab|cd|pq|xy)/g;
const doubleRepeated = /([a-z][a-z]).*\1/g;
const doubleWithDivider = /([a-z]).\1/g;

export function calculate(input: string, version: 1 | 2): number {
  const lines = input.split("\n");
  return (
    lines
      .map(line => (isNice(line, version) ? 1 : 0) as number)
      .reduce((a, b) => a + b, 0)
  );
}

function isNice(input: string, version: 1 | 2): boolean {
  if (version === 1) {
    return (
      countMatch(input, vowels) >= 3
      && countMatch(input, doubleLetters) > 0
      && countMatch(input, badWords) === 0
    );
  } else {
    return (
      countMatch(input, doubleRepeated) >= 1
      && countMatch(input, doubleWithDivider) >= 1
    );
  }
}

export function countMatch(input: string, exp: RegExp): number {
  return [...input.matchAll(exp)].length;
}
