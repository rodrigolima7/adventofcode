interface Results {
  totalWrappingPaper: number;
  totalRibbon: number;
}

interface Dimensions {
  l: number;
  w: number;
  h: number;
}

export function calculate(input: string): Results {
  const lines = input.trim().split("\n");
  const dimensions = lines.map(x => parseDimensions(x));
  const totalWrappingPaper = (
    dimensions
      .map(x => calculateWrapping(x))
      .reduce((a, b) => a + b, 0)
  );
  const totalRibbon = (
    dimensions
      .map(x => calculateRibbon(x))
      .reduce((a, b) => a + b, 0)
  );
  return { totalWrappingPaper, totalRibbon };
}

function parseDimensions(input: string): Dimensions {
  const components = input.trim().split("x");
  return {
    l: +components[0],
    w: +components[1],
    h: +components[2],
  };
}

function calculateWrapping({ l, w, h }: Dimensions): number {
  const side = w * h;
  const front = h * l;
  const top = l * w;
  const area = (2 * side) + (2 * front) + (2 * top);
  const extra = Math.min(side, front, top);
  return area + extra;
}

function calculateRibbon({ l, w, h }: Dimensions): number {
  const smallestPerimeter = Math.min(
    2*l + 2*w,
    2*l + 2*h,
    2*w + 2*h
  );
  const area = (l * w * h);
  return smallestPerimeter + area;
}
