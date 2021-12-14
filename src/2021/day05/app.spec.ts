import { fillVents, findLargest, splitInput } from './app';

const testData = `0,9 -> 5,9
8,0 -> 0,8
9,4 -> 3,4
2,2 -> 2,1
7,0 -> 7,4
6,4 -> 2,0
0,9 -> 2,9
3,4 -> 1,4
0,0 -> 8,8
5,5 -> 8,2`;

const splitTestData = [
  { x1: 0, y1: 9, x2: 5, y2: 9 },
  { x1: 8, y1: 0, x2: 0, y2: 8 },
  { x1: 9, y1: 4, x2: 3, y2: 4 },
  { x1: 2, y1: 2, x2: 2, y2: 1 },
  { x1: 7, y1: 0, x2: 7, y2: 4 },
  { x1: 6, y1: 4, x2: 2, y2: 0 },
  { x1: 0, y1: 9, x2: 2, y2: 9 },
  { x1: 3, y1: 4, x2: 1, y2: 4 },
  { x1: 0, y1: 0, x2: 8, y2: 8 },
  { x1: 5, y1: 5, x2: 8, y2: 2 },
];

describe('Main entry', () => {
  it('returns the split input for the testData', () => {
    expect(splitInput(testData)).toEqual(splitTestData);
  });
  it('returns vents', () => {
    expect(fillVents(splitTestData)[0]).toEqual([undefined, undefined, undefined, undefined, undefined, undefined, undefined, 1]);
  });
  it('returns result', () => {
    expect(findLargest(fillVents(splitTestData))).toEqual(5);
  });
  it('returns vents2', () => {
    expect(fillVents(splitTestData, true)[0]).toEqual([1, undefined, 1, undefined, undefined, undefined, undefined, 1, 1]);
  });
});
