import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import * as fs from 'fs';
import gendiff from '../src/gendiff.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('json to stylish', () => {
  const file1 = getFixturePath('file1.json');
  const file2 = getFixturePath('file2.json');
  const stylishOutput = readFile('stylish');
  expect(gendiff(file1, file2)).toEqual(stylishOutput);
});
