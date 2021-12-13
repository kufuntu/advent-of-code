import { splitInput, parse, calculateNum, calculateNum2 } from './app';

const testData = `light red bags contain 1 bright white bag, 2 muted yellow bags.
dark orange bags contain 3 bright white bags, 4 muted yellow bags.
bright white bags contain 1 shiny gold bag.
muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.
shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.
dark olive bags contain 3 faded blue bags, 4 dotted black bags.
vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.
faded blue bags contain no other bags.
dotted black bags contain no other bags.`;

const test2 = `shiny gold bags contain 2 dark red bags.
dark red bags contain 2 dark orange bags.
dark orange bags contain 2 dark yellow bags.
dark yellow bags contain 2 dark green bags.
dark green bags contain 2 dark blue bags.
dark blue bags contain 2 dark violet bags.
dark violet bags contain no other bags.`;

const splitTestData = [
	{
		key: 'light red',
		bags: [
			{ key: 'bright white', num: 1 },
			{ key: 'muted yellow', num: 2 },
		]
	},
	{
		key: 'dark orange',
		bags: [
			{ key: 'bright white', num: 3 },
			{ key: 'muted yellow', num: 4 },
		]
	},
	{
		key: 'bright white',
		bags: [
			{ key: 'shiny gold', num: 1 },
		]
	},
	{
		key: 'muted yellow',
		bags: [
			{ key: 'shiny gold', num: 2 },
			{ key: 'faded blue', num: 9 },
		]
	},
	{
		key: 'shiny gold',
		bags: [
			{ key: 'dark olive', num: 1 },
			{ key: 'vibrant plum', num: 2 },
		]
	},
	{
		key: 'dark olive',
		bags: [
			{ key: 'faded blue', num: 3 },
			{ key: 'dotted black', num: 4 },
		]
	},
	{
		key: 'vibrant plum',
		bags: [
			{ key: 'faded blue', num: 5 },
			{ key: 'dotted black', num: 6 },
		]
	},
	{
		key: 'faded blue',
		bags: []
	},
	{
		key: 'dotted black',
		bags: []
	},
];

describe('Main entry', () => {
	it('returns the parsed data', () => {
    expect(parse(splitInput(testData))).toEqual(splitTestData);
	});
	it('returns 4 colors for test', () => {
    expect(calculateNum(splitTestData, 'shiny gold')).toEqual(4);
	});
	it('returns 126 colors for test2', () => {
    expect(calculateNum2(parse(splitInput(test2)), 'shiny gold')).toEqual(126);
  });
});
