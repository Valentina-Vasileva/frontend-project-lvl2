import { readFileSync } from 'node:fs';
import * as path from 'node:path';
import * as process from 'node:process';
import parse from './parsers.js';
import format from './formatters.js';
import buildDiff from './builder.js';

const getData = (filepath) => {
  const absolutePath = path.resolve(process.cwd(), filepath);
  return readFileSync(absolutePath);
};

const genDiff = (filepath1, filepath2) => {
  const data1 = getData(filepath1);
  const data2 = getData(filepath2);

  const parsedData1 = parse(data1, filepath1.split('.').pop());
  const parsedData2 = parse(data2, filepath1.split('.').pop());

  const diff = buildDiff(parsedData1, parsedData2);

  return format(diff);
};

export default genDiff;
