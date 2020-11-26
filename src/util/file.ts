import { readFileSync } from "fs"

export const readInput = (filename: string = 'input.txt') => {
  const callerFileName = require.main.filename;
  const resolvedPath = callerFileName
    .split("/")
    .slice(0, -1)
    .concat(filename)
    .join("/");

  return readFileSync(resolvedPath).toString();
};
