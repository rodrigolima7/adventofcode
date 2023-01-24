import crypto from "crypto";

export function calculate(input: string, difficulty: number): number {
  let sequence = 0;
  const zeroes = "0".repeat(difficulty);
  while (true) {
    const hash = getHash(`${input}${sequence}`);
    if (hash.startsWith(zeroes)) break;
    sequence++;
  }
  return sequence;
}

function getHash(input: string): string {
  return crypto.createHash("md5").update(input).digest("hex");
}
