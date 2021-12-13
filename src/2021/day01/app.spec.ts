import { measureDepth, measureDepth2, splitInput } from './app';

const testData = `199
200
208
210
200
207
240
269
260
263`;

const splitTestData = [
  199,
  200,
  208,
  210,
  200,
  207,
  240,
  269,
  260,
  263,
];

const splitTestData2 = [
  607,
  618,
  618,
  617, 
  647,
  716,
  769,
  792,
];

describe('Main entry', () => {
  it('returns the split input for the testData', () => {
    expect(splitInput(testData)).toEqual(splitTestData);
  });
  it('returns the correct depth', () => {
    expect(measureDepth(splitTestData)).toEqual(7);
  });
  it('returns the correct depth2', () => {
    expect(measureDepth(splitTestData2)).toEqual(5);
  });
  it('returns the correct depth3', () => {
    expect(measureDepth2(splitTestData)).toEqual(5);
  });
});
