import { simulate, splitInput } from './app';

const testData = `3,4,3,1,2`;

const splitTestData = [3,4,3,1,2];

describe('Main entry', () => {
  it('returns the split input for the testData', () => {
    expect(splitInput(testData)).toEqual(splitTestData);
  });
  it('run for one day', () => {
    expect(simulate(splitTestData, 1)).toEqual([2,3,2,0,1].length);
  });
  it('run for two days', () => {
    expect(simulate(splitTestData, 2)).toEqual([1,2,1,6,0,8].length);
  });
  it('run for ten days', () => {
    expect(simulate(splitTestData, 10)).toEqual([0,1,0,5,6,0,1,2,2,3,7,8].length);
  });
  it('run for eighteen days', () => {
    expect(simulate(splitTestData, 18)).toEqual([6,0,6,4,5,6,0,1,1,2,6,0,1,1,1,2,2,3,3,4,6,7,8,8,8,8].length);
  });
});
