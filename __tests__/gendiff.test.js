import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import * as fs from 'fs';
import gendiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const extensions = ['json', 'yml'];

test.each(extensions)('stylish', (extension) => {
  const file1 = getFixturePath(`file1.${extension}`);
  const file2 = getFixturePath(`file2.${extension}`);

  expect(gendiff(file1, file2, 'stylish')).toEqual(readFile('stylish'));
  expect(gendiff(file1, file2, 'plain')).toEqual(readFile('plain'));
  expect(gendiff(file1, file2, 'json')).toEqual(readFile('json'));
});
