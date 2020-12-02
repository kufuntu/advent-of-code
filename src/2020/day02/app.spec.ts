import { checkPasswords, checkPasswords2, parsePasswordWithRules, PasswordWithRule } from "./app";

const testData = `1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc`;

const parsedData: PasswordWithRule[] = [
	{ min: 1, max: 3, char: 'a', password: 'abcde'},
	{ min: 1, max: 3, char: 'b', password: 'cdefg'},
	{ min: 2, max: 9, char: 'c', password: 'ccccccccc'},
];

describe('Main entry', () => {
  it('returns the parsed data for the testData', () => {
    expect(parsePasswordWithRules(testData)).toEqual(parsedData);
	});
	it('returns number of valid passwords', () => {
		expect(checkPasswords(parsedData)).toEqual(2);
	})
	it('returns number of valid passwords for second algo', () => {
		expect(checkPasswords2(parsedData)).toEqual(1);
	})
});
