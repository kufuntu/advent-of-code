import { getPositionForLine, multiply, parsePosition, Position, runTree, splitFile } from "./app";

const testData = `..##.......
#...#...#..
.#....#..#.
..#.#...#.#
.#...##..#.
..#.##.....
.#.#.#....#
.#........#
#.##...#...
#...##....#
.#..#...#.#`;

const lines = [
  '..##.......',
  '#...#...#..',
  '.#....#..#.',
  '..#.#...#.#',
  '.#...##..#.',
  '..#.##.....',
  '.#.#.#....#',
  '.#........#',
  '#.##...#...',
  '#...##....#',
  '.#..#...#.#'
];

describe('Main entry', () => {
  it('returns the parsed data for the testData', () => {
    expect(splitFile(testData)).toEqual(lines);
  });
  it('returns the parsed data for the testData', () => {
    expect(parsePosition('#')).toEqual(Position.TREE);
  });
  it('returns a tree for first line', () => {
    expect(getPositionForLine(lines[7], 22)).toEqual(Position.TREE);
  });
  it('returns a tree for second line', () => {
    expect(getPositionForLine(lines[1], 3)).toEqual(Position.SQUARE);
  });
  it('Right 3, down 1.', () => {
    expect(runTree(lines, 3, 1)).toEqual(7);
  });
  it('Right 1, down 1.', () => {
    expect(runTree(lines, 1, 1)).toEqual(2);
  });
  it('Right 5, down 1.', () => {
    expect(runTree(lines, 5, 1)).toEqual(3);
  });
  it('Right 7, down 1.', () => {
    expect(runTree(lines, 7, 1)).toEqual(4);
  });
  it('Right 1, down 2.', () => {
    expect(runTree(lines, 1, 2)).toEqual(2);
  });
  it('multiply', () => {
    expect(multiply(lines)).toEqual(336);
	});
});
