import { readFileSync } from 'fs';
import { off } from 'process';

const file = readFileSync('./src/2020/day03/input.txt').toString();
export enum Position {
	SQUARE = '.',
	TREE = '#'
}

export const splitFile = (input: string): string[] => {
	const lines = input.split("\n").map(line => line.trim());
	return lines;
};

export const runTree = (lines: string[], speed: number, downSpeed: number) => {
	let found = 0;
	let count = 1;
	for (var i = downSpeed; i < lines.length; i+=downSpeed) {
		const pos = getPositionForLine(lines[i], speed*count++ + 1);
		if (pos === Position.TREE) {
			found++;
		}
	}
	return found;
}

export const getPositionForLine = (line:string, offset: number) => {
	offset = (offset - 1) % line.length;
	return parsePosition(line.charAt(offset));
};

export const parsePosition = (position: string): Position => {
	return position === Position.SQUARE ? Position.SQUARE : Position.TREE;
};

export const multiply = (input: string[]) => {
	const r1 = runTree(input, 1, 1);
	const r2 = runTree(input, 3, 1);
	const r3 = runTree(input, 5, 1);
	const r4 = runTree(input, 7, 1);
	const r5 = runTree(input, 1, 2);
	return r1*r2*r3*r4*r5;
}


const lines = splitFile(file);
const resultPart1 = runTree(lines, 3, 1);
const resultPart2 = multiply(lines);
console.log(resultPart1, resultPart2);
