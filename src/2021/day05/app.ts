import { readFileSync } from 'fs';

const file = readFileSync('./src/2021/day05/input.txt').toString();
const regex = /(\d*),(\d*) -> (\d*),(\d*)/;

export const splitInput = (input: string) => input.split("\n").map(line => {
  const result = regex.exec(line);
  return {
    x1: parseInt(result[1], 10),
    y1: parseInt(result[2], 10),
    x2: parseInt(result[3], 10),
    y2: parseInt(result[4], 10),
  } as Vent;
});

export interface Vent {
  x1: number;
  x2: number;
  y1: number;
  y2: number;
}

export const print = (numbers: number[][]) => {
  console.log(numbers.reduce((acc, line) => {
    for (let i = 0; i < line.length; i++) {
      if (!line[i]) acc += '.'
      else acc += line[i];
    }
    return acc + "\n";
  }, ""));
};

export const fillVents = (vents: Vent[], diagonal: boolean = false): number[][] => {
  const arr: number[][] = [];
  vents.forEach(vent => {
    if (vent.x1 === vent.x2) {
      const start = vent.y1 > vent.y2 ? vent.y2 : vent.y1;
      const end = vent.y1 > vent.y2 ? vent.y1 : vent.y2;
      for (let i = start; i <= end; i++) {
        if (!arr[i]) {
          arr[i] = [];
        }
        if (!arr[i][vent.x1]) {
          arr[i][vent.x1] = 1;
        } else {
          arr[i][vent.x1]++;
        }
      }
    } else if (vent.y1 === vent.y2) {
      const start = vent.x1 > vent.x2 ? vent.x2 : vent.x1;
      const end = vent.x1 > vent.x2 ? vent.x1 : vent.x2;
      for (let i = start; i <= end; i++) {
        if (!arr[vent.y1]) {
          arr[vent.y1] = [];
        }
        if (!arr[vent.y1][i]) {
          arr[vent.y1][i] = 1;
        } else {
          arr[vent.y1][i]++;
        }
      }
    } else if (diagonal) {
      for (let i = 0; i <= Math.abs(vent.y1 - vent.y2); i++) {
        let x = vent.x1, y = vent.y1;
        if (vent.x1 > vent.x2) {
          x -= i;
        } else {
          x += i;
        }
        if (vent.y1 > vent.y2) {
          y -= i;
        } else {
          y += i;
        }
        if (!arr[y]) {
          arr[y] = [];
        }
        if (!arr[y][x]) {
          arr[y][x] = 1;
        } else {
          arr[y][x]++;
        }
      }
    }
  });
  return arr;
};

export const findLargest = (arr: number[][]) => {
  return arr.reduce((acc, cur) => {
    cur.map(num => {
      if (num >= 2) {
        acc++;
      }
    });
    return acc;
  }, 0);
};

const split = splitInput(file);
const resultPart1 = findLargest(fillVents(split));
const resultPart2 = findLargest(fillVents(split, true));
console.log(resultPart1, resultPart2);
