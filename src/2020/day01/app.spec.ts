import { calculateExpenseReport1, calculateExpenseReport2, splitInput } from './app';

const testData = `1721
979
366
299
675
1456`;

const splitTestData = [
  1721,
  979,
  366,
  299,
  675,
  1456
];

describe('Main entry', () => {
  it('returns the split input for the testData', () => {
    expect(splitInput(testData)).toEqual(splitTestData);
  });
  it('returns for two interations 514579', () => {
    expect(calculateExpenseReport1(splitTestData)).toEqual(514579);
  });
  it('returns for three interations 241861950', () => {
    expect(calculateExpenseReport2(splitTestData)).toEqual(241861950);
  });
});
