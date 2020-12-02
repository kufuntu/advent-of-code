import { readFileSync } from 'fs';

const file = readFileSync('./src/2020/day03/input.txt').toString();

export const splitFile = (input: string): string[] => {
	const lines = input.split("\n").map(line => line.trim());
	return lines;
};


/*const rules = parsePasswordWithRules(file);
const resultPart1 = checkPasswords(rules);
const resultPart2 = checkPasswords2(rules);
console.log(resultPart1, resultPart2);
*/
