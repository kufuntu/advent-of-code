import { calculatePosition, calculatePosition2, Command, splitInput } from './app';

const testData = `forward 5
down 5
forward 8
up 3
down 8
forward 2`;

const splitTestData: Command[] = [
  { type: 'forward', amount: 5 },
  { type: 'down', amount: 5 },
  { type: 'forward', amount: 8 },
  { type: 'up', amount: 3 },
  { type: 'down', amount: 8 },
  { type: 'forward', amount: 2 }
];

describe('Main entry', () => {
  it('returns the split input for the testData', () => {
    expect(splitInput(testData)).toEqual(splitTestData);
  });
  it('calculates the position', () => {
    expect(calculatePosition(splitTestData)).toEqual(150);
  });
  it('calculates the position2', () => {
    expect(calculatePosition2(splitTestData)).toEqual(900);
  });
});
