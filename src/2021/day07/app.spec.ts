import { find2, fuel, fuel2, median, splitInput } from './app';

const testData = `16,1,2,0,4,2,7,1,2,14`;

const splitTestData = [16,1,2,0,4,2,7,1,2,14];

describe('Main entry', () => {
  it('returns the split input for the testData', () => {
    expect(splitInput(testData)).toEqual(splitTestData);
  });
  it('calculates median', () => {
    expect(median(splitTestData)).toEqual(2);
  });
  it('calculates fuel', () => {
    expect(fuel(splitTestData, 2)).toEqual(37);
  });
  it('calculates fuel2', () => {
    expect(fuel2(splitTestData, 5)).toEqual(168);
  });
  it('calculates median2', () => {
    expect(find2(splitTestData)).toEqual(168);
  });
});
