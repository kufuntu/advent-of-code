import { readFileSync } from 'fs';

const file = readFileSync('./src/2021/day07/input.txt').toString();

export const splitInput = (input: string) => input.split(",").map(number => parseInt(number.trim(), 10));

export const median = (values: number[]) => {
  values = [...values].sort((a,b) => a-b);
  const half = Math.floor(values.length / 2);
  
  if (values.length % 2)
    return values[half];
  
  return (values[half - 1] + values[half]) / 2;
};

export const fuel = (values: number[], median: number) => {
  return values.reduce((acc, val) => {
    return acc + Math.abs(val - median);
  }, 0);
};

export const fuel2 = (values: number[], median: number) => {
  return values.reduce((acc, val) => {
    for (let i = 1; i <= Math.abs(val - median); i++) {
      acc += i;
    }
    return acc;
  }, 0);
};


export const find2= (values: number[]) => {
  let sorted = [...values].sort((a,b) => a-b);
  let outcome;

  for (let i = sorted[0]; i <= sorted[sorted.length - 1]; i++) {
    let fuel = fuel2(values, i);
    if (!outcome || outcome > fuel) {
      outcome = fuel;
    } 
  }
  return outcome;
};

const split = splitInput(file);
//const resultPart1 = fuel(split, median(split));
const resultPart2 = find2(split);
console.log(resultPart2);
