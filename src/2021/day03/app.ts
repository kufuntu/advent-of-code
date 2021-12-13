import { readFileSync } from 'fs';

const file = readFileSync('./src/2021/day03/input.txt').toString();

export const splitInput = (input: string) => input.split("\n").map(number => number.trim());
export const pair = (lines: string[]) => {
  const arr = [];
  lines.forEach(line => {
    const chars = line.split("");
    for (var i = 0; i < chars.length; i++) {
      if (!arr[i]) {
        arr[i] = [];
      }
      arr[i].push(parseInt(chars[i], 10));
    }
  });
  return arr;
};

export const gamma = (pair: number[][]) => {
  const num = pair.reduce((acc, cur) => {
    const result = cur.filter(num => num === 0).length > cur.length / 2 ? '0' : '1';
    return acc + result;
  }, '');
  return parseInt(num, 2);
};

export const epsilon = (pair: number[][]) => {
  const num = pair.reduce((acc, cur) => {
    const result = cur.filter(num => num === 0).length > cur.length / 2 ? '1' : '0';
    return acc + result;
  }, '');
  return parseInt(num, 2);
};

export const oxygen = (split: string[]) => {
  let lines = split;

  for (let i = 0; i < split[0].length; i++) {
    const cur = pair(lines);
    const result = cur[i].filter(num => num === 0).length > cur[i].length / 2 ? '0' : '1';
    lines = lines.filter(line => {
      return line.charAt(i) == result;
    });
    if (lines.length === 1) break;
  }

  return parseInt(lines[0], 2);
};

export const co2 = (split: string[]) => {
  let lines = split;

  for (let i = 0; i < split[0].length; i++) {
    const cur = pair(lines);
    const result = cur[i].filter(num => num === 0).length > cur[i].length / 2 ? '1' : '0';
    lines = lines.filter(line => {
      return line.charAt(i) == result;
    });
    if (lines.length === 1) break;
  }

  return parseInt(lines[0], 2);
};

const split = splitInput(file);
const pairs = pair(split);
const resultPart1 = epsilon(pairs) * gamma(pairs);
const resultPart2 = oxygen(split) * co2(split);
console.log(resultPart1, resultPart2);
