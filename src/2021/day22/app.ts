import { readFileSync } from 'fs';

const file = readFileSync('./src/2021/day22/input.txt').toString();

export const splitInput = (input: string) => input.split("\n").map(number => parseInt(number.trim(), 10));

/*
const split = splitInput(file);
const resultPart1 = calculateExpenseReport1(split);
const resultPart2 = calculateExpenseReport2(split);
console.log(resultPart1, resultPart2);*/
