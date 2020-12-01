import { readFileSync } from 'fs';

const file = readFileSync('./src/2020/day01/input.txt').toString();

export const splitInput = (input: string) => input.split("\n").map(number => parseInt(number.trim(), 10));

export const calculateExpenseReport1 = (input: number[], year = 2020) => {
  const foundNumbers: number[] = [];
  outer_loop:
  for (var i = 0; i < input.length; i++) {
    for (var j = 0; j < input.length; j++) {
        const first = input[i];
        const second = input[j];
        if (first + second === year) {
          foundNumbers.push(first);
          foundNumbers.push(second);
          break outer_loop;
        }
    }
  }
  return foundNumbers.reduce((acc, number) => acc * number, 1);
};

export const calculateExpenseReport2 = (input: number[], year = 2020) => {
  const foundNumbers: number[] = [];
  outer_loop:
  for (var i = 0; i < input.length; i++) {
    for (var j = 0; j < input.length; j++) {
      for (var k = 0; k < input.length; k++) {
        const first = input[i];
        const second = input[j];
        const third = input[k];
        if (first + second + third === year) {
          foundNumbers.push(first);
          foundNumbers.push(second);
          foundNumbers.push(third);
          break outer_loop;
        }
      }
    }
  }
  return foundNumbers.reduce((acc, number) => acc * number, 1);
};

const split = splitInput(file);
const resultPart1 = calculateExpenseReport1(split);
const resultPart2 = calculateExpenseReport2(split);
console.log(resultPart1, resultPart2);
