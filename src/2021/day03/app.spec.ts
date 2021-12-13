import { co2, epsilon, gamma, oxygen, pair, splitInput } from './app';

const testData = `00100
11110
10110
10111
10101
01111
00111
11100
10000
11001
00010
01010`;

const splitTestData = [
  "00100",
  "11110",
  "10110",
  "10111",
  "10101",
  "01111",
  "00111",
  "11100",
  "10000",
  "11001",
  "00010",
  "01010"
];

const pairs = [
  [0,1,1,1,1,0,0,1,1,1,0,0],
  [0,1,0,0,0,1,0,1,0,1,0,1],
  [1,1,1,1,1,1,1,1,0,0,0,0],
  [0,1,1,1,0,1,1,0,0,0,1,1],
  [0,0,0,1,1,1,1,0,0,1,0,0]
];

describe('Main entry', () => {
  it('returns the split input for the testData', () => {
    expect(splitInput(testData)).toEqual(splitTestData);
  });
  it('returns the split pairs for the testData', () => {
    expect(pair(splitTestData)).toEqual(pairs);
  });
  it('returns the gamma', () => {
    expect(gamma(pairs)).toEqual(22);
  });
  it('returns the epsilon', () => {
    expect(epsilon(pairs)).toEqual(9);
  });
  it('returns the oxygen', () => {
    expect(oxygen(splitTestData)).toEqual(23);
  });
  it('returns the co2', () => {
    expect(co2(splitTestData)).toEqual(10);
  });
});
