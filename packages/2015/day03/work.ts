interface GridPosition {
  x: number;
  y: number;
}

interface GridPoint {
  x: number;
  y: number;
  count: number;
}

type MoveType = "^" | ">" | "v" | "<";

export function calculate(input: string, mode: "alone" | "withRobot"): number {
  const grid: GridPoint[] = [{ x: 0, y: 0, count: 1 }];
  const santaPosition: GridPosition = { x: 0, y: 0 };
  const robotPosition: GridPosition = { x: 0, y: 0 };
  for (let i  = 0; i < input.length; i++) {
    const type = input[i] as MoveType;
    if (mode === "alone") {
      registerMove(grid, santaPosition, type);
    } else {
      if (i % 2 !== 0) registerMove(grid, santaPosition, type);
      else registerMove(grid, robotPosition, type);
    }
  }
  return grid.filter(x => x.count >= 1).length;
}

function registerMove(grid: GridPoint[], position: GridPosition, type: MoveType) {
  switch (type) {
    case "^":
      position.x++; break;
    case ">":
      position.y++; break;
    case "v":
      position.x--; break;
    case "<":
      position.y--; break;
    default:
      return;
  }
  dropPresent(grid, position);
}

function dropPresent(grid: GridPoint[], position: GridPosition) {
  const gridPoint = grid.find(x => x.x === position.x && x.y === position.y);
  if (!gridPoint) grid.push({ ...position, count: 1 });
  else gridPoint.count++;
}
