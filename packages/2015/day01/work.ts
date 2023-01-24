interface Result {
  finalFloor: number;
  firstTimeAtBasementPosition: number | undefined;
}

export function calculate(input: string): Result {
  let currentFloor = 0;
  let firstTimeAtBasementPosition: number | undefined = undefined;
  for (let i = 0; i < input.length; i++) {
    const c = input[i];
    if (c === "(") currentFloor += 1;
    else if (c === ")") currentFloor -= 1;
    if (firstTimeAtBasementPosition === undefined && currentFloor < 0) firstTimeAtBasementPosition = i + 1;
  }
  return { finalFloor: currentFloor, firstTimeAtBasementPosition };
}
