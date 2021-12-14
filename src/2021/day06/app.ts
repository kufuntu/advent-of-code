import { readFileSync } from 'fs';

const file = readFileSync('./src/2021/day06/input.txt').toString();

export const splitInput = (input: string) => input.split(",").map(number => parseInt(number.trim(), 10));

export const simulate = (input: number[], days: number) => {
  const timers = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  for (const value of input) {
    timers[value]++;
  }

  for (let i = 0; i < days; i++) {
    const parents = timers.shift();
    timers.push(parents);
    timers[6] += parents;
  }

  return timers.reduce((acc, n) => acc + n, 0);
};


const split = splitInput(file);
const resultPart1 = simulate(split, 256);
console.log(resultPart1);
