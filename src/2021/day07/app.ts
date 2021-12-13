import { readFileSync } from 'fs';

const file = readFileSync('./src/2021/day07/input.txt').toString();

export interface Rule {
	key: string;
	bags: {
		key: string;
		num: number;
	}[];
}

export const splitInput = (input: string) => input.split("\n").map(line => line.trim());

export const parse = (lines: string[]): Rule[] => {
	return lines.map(line => {
		const split = /^(.*) bags contain (.*)\.$/.exec(line);
		const key = split[1];
		const values = split[2];
		let bags = [];
		if (values != 'no other bags') {
			bags = values.split(/ bags?(?:, )?/g).filter(match => !!match).map(bag => {
				const split = /^([0-9]*) (.*)$/.exec(bag);
				return {
					key: split[2],
					num: parseInt(split[1])
				};
			});
		};
		return {
			key,
			bags
		};
	})
};

const searchTree = (rules: Rule[], bags: any[], searchedBag: string): boolean => {
	return !!bags.find(subBag => {
		if (subBag.key === searchedBag) {
			return true;
		}
		const subBagRule = rules.find(subRule => subRule.key == subBag.key);
		return searchTree(rules, subBagRule.bags, searchedBag);
	});
};

export const calculateNum = (rules: Rule[], bag: string) => {
	const bagRules = rules.filter(rule => {
		return searchTree(rules, rule.bags, bag);
	});
	return bagRules.length;
};

export const calculateNum2 = (rules: Rule[], bag: string) => {
	const bagRule = rules.find(rule => rule.key === bag);
	return bagRule.bags.reduce((num, subBag) => {
		num += calculateNum2(rules, subBag.key) * subBag.num + subBag.num;
		return num;
	}, 0);
};

const split = parse(splitInput(file));
const resultPart1 = calculateNum(split, 'shiny gold');
const resultPart2 = calculateNum2(split, 'shiny gold');
console.log(resultPart1, resultPart2);
