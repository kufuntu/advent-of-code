import { readFileSync } from 'fs';

const file = readFileSync('./src/2021/day01/input.txt').toString();

export const splitInput = (input: string) => input.split("\n").map(number => parseInt(number.trim(), 10));

export const measureDepth = (arr: number[]) => {
  let start = arr[0];

  return arr.reduce((acc, cur) => {
    if (cur > start) {
      acc++;
    }
    start = cur;
    return acc;
  }, 0);
};

export const measureDepth2 = (arr: number[]) => {
  const sum = [];
  for (var i = 0; i <= arr.length - 3; i++) {
    sum.push(arr[i] + arr[i+1] + arr[i+2]);
  }
  return measureDepth(sum);
};

const split = splitInput(file);
const resultPart1 = measureDepth(split);
const resultPart2 = measureDepth2(split);
console.log(resultPart1, resultPart2);