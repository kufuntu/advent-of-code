import { readFileSync } from 'fs';

const file = readFileSync('./src/2021/day04/input.txt').toString();

export type Grid = {
  checked: boolean;
  num: number;
}[][];

export const splitInput = (input: string) => input.split("\n")[0].split(',').map(number => parseInt(number.trim(), 10));
export const splitGrids = (input: string): Grid[] => {
  const grids = input.split("\n\n");
  grids.shift();
  return grids.map(grid => grid.split("\n").map(line => line.trim().split(/\s{1,}/).map(num => ({
    checked: false,
    num: parseInt(num, 10)
  }))));
};

export const setNumber = (grids: Grid[], value: number) => {
  return grids.map(grid => grid.map(grid2 => grid2.map(val => {
    if (val.num === value) {
      val.checked = true;
    }
    return val;
  })));
};

export const checkWinner = (grids: Grid[]) => {
  return grids.filter((grid) => {
    let found = false;
    for (let i = 0; i < grid.length; i++) {
      let horizontal = true;
      let vertical = true;
      for (let j = 0; j < grid.length; j++) {
        if (!grid[i][j].checked) {
          horizontal = false;
        }
        if (!grid[j][i].checked) {
          vertical = false;
        }
      }
      if (horizontal || vertical) {
        found = true;
        break;
      }
    }
    return found;
  });
};

export const print = (grid: Grid) => {
  console.log(grid.map(grid2 => {
    return grid2.reduce((acc, cur) => {
      if (cur.checked) {
        acc += ' ['+cur.num+']';
      } else {
        acc += ' ' + cur.num;
      }
      return acc;
    }, "");
  }));
}

export const play = (grids: Grid[], nums: number[]) => {
  let check;
  let currentNumber;
  for(let i = 0; i < nums.length; i++) {
    currentNumber = nums[i];
    grids = setNumber(grids, currentNumber);
    check = checkWinner(grids);
    if (check != -1) {
      break;
    }
  }
  let grid = grids[check];
  let unchecked = grid.reduce((acc, val) => {
    return val.reduce((acc, num) => {
      if (!num.checked) acc += num.num;
      return acc;
    }, acc)
  }, 0);
  return unchecked * currentNumber;
};

export const play2 = (grids: Grid[], nums: number[]) => {
  let currentNumber;
  let grid;
  for(let i = 0; i < nums.length; i++) {
    currentNumber = nums[i];
    grids = setNumber(grids, currentNumber);
    let found = checkWinner(grids);
    if (found.length > 0) {
      grid = found[0];
      grids = grids.filter((value, index) => !found.find(f => f === value));
      console.log(grids.length);
    }
    if (grids.length == 0) {
      break;
    }
  }
  let unchecked = grid.reduce((acc, val) => {
    return val.reduce((acc, num) => {
      if (!num.checked) acc += num.num;
      return acc;
    }, acc)
  }, 0);
  return unchecked * currentNumber;
};

const split = splitInput(file);
const grids = splitGrids(file);
const resultPart2 = play2(grids, split);
console.log(resultPart2);