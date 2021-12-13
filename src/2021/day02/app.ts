import { readFileSync } from 'fs';

const file = readFileSync('./src/2021/day02/input.txt').toString();

export interface Command {
  type: 'forward' | 'down' | 'up';
  amount: number;
}

export const splitInput = (input: string) => input.split("\n").map(line => {
  const split = line.trim().split(' ');
  return {
    type: split[0],
    amount: parseInt(split[1], 10)
  } as Command;
});

export const calculatePosition = (commands: Command[]) => {
  const position = commands.reduce((acc, cur) => {
    switch (cur.type) {
      case 'down': {
        acc.v += cur.amount;
        break;
      }
      case 'up': {
        acc.v -= cur.amount;
        break;
      }
      case 'forward': {
        acc.h += cur.amount;
        break;
      }
    }
    return acc;
  }, { h: 0, v: 0 });
  return position.h * position.v;
};

export const calculatePosition2 = (commands: Command[]) => {
  const position = commands.reduce((acc, cur) => {
    switch (cur.type) {
      case 'down': {
        acc.aim += cur.amount;
        break;
      }
      case 'up': {
        acc.aim -= cur.amount;
        break;
      }
      case 'forward': {
        acc.h += cur.amount;
        acc.v += cur.amount * acc.aim;
        break;
      }
    }
    return acc;
  }, { h: 0, v: 0, aim: 0 });
  return position.h * position.v;
};


const split = splitInput(file);
const resultPart1 = calculatePosition(split);
const resultPart2 = calculatePosition2(split);
console.log(resultPart1, resultPart2);