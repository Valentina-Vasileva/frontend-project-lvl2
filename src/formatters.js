import formatToStylish from './formatters/stylish.js';

const format = (data, form = 'stylish') => {
  switch (form) {
    case 'stylish':
      return formatToStylish(data);
    case 'json':
      return JSON.stringify(data);
    default:
      throw new Error(`The file format '${form}' is not supported`);
  }
};

export default format;
