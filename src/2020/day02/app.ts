import { readFileSync } from 'fs';

const file = readFileSync('./src/2020/day02/input.txt').toString();

export interface PasswordWithRule {
	min: number;
	max: number;
	char: string;
	password: string;
}

export const parsePasswordWithRules = (input: string): PasswordWithRule[] => {
	const lines = input.split("\n").map(line => line.trim());
	const regex = /([0-9]*)-([0-9]*) ([a-zA-Z])*: ([a-zA-Z]*)/;
	return lines.map(line => {
		// 1-3 b: cdefg
		const parts = regex.exec(line);
		return {
			min: parseInt(parts[1]),
			max: parseInt(parts[2]),
			char: parts[3],
			password: parts[4]
		} as PasswordWithRule;
	})
};

export const checkPasswords = (passwords: PasswordWithRule[]): number => {
	const valid = passwords.filter(rule => {
		const regex = new RegExp(rule.char, 'g');
		const matches = rule.password.match(regex);
		const num = matches ? matches.length : 0;
		return num >= rule.min && num <= rule.max;
	});
	return valid.length;
}

export const checkPasswords2 = (passwords: PasswordWithRule[]): number => {
	const valid = passwords.filter(rule => {
		const firstChar = rule.password.charAt(rule.min - 1);
		const secondChar = rule.password.charAt(rule.max - 1);
		return (firstChar === rule.char && secondChar != rule.char)
			|| (firstChar != rule.char && secondChar === rule.char);
	});
	return valid.length;
}

const rules = parsePasswordWithRules(file);
const resultPart1 = checkPasswords(rules);
const resultPart2 = checkPasswords2(rules);
console.log(resultPart1, resultPart2);
