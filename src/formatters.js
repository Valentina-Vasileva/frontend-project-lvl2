import formatToStylish from './formatters/stylish.js';
import formatToPlain from './formatters/plain.js';

const format = (data, form) => {
  switch (form) {
    case 'stylish':
      return formatToStylish(data);
    case 'plain':
      return formatToPlain(data);
    case 'json':
      return JSON.stringify(data);
    default:
      throw new Error(`The file format '${form}' is not supported`);
  }
};

export default format;
