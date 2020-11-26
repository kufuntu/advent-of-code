import { readFileSync } from "fs"
import * as path from "path";

export const readFile = (filename: string) => {
  const resolvedPath = path.resolve(__dirname, filename);
  return readFileSync(resolvedPath).toString();
};
