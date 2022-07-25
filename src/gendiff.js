import { readFileSync } from 'node:fs';
import * as path from 'node:path';
import * as process from 'node:process';
import parse from './parsers.js';
import format from './formatters/index.js';
import buildDiff from './builder.js';

const getData = (filepath) => {
  const absolutePath = path.resolve(process.cwd(), filepath);
  return readFileSync(absolutePath);
};

const getDataFormat = (filePath) => path.extname(filePath).substring(1);

const genDiff = (filepath1, filepath2, outputFormat = 'stylish') => {
  const data1 = getData(filepath1);
  const data2 = getData(filepath2);

  const parsedData1 = parse(data1, getDataFormat(filepath1));
  const parsedData2 = parse(data2, getDataFormat(filepath2));

  const diff = buildDiff(parsedData1, parsedData2);

  return format(diff, outputFormat);
};

export default genDiff;
