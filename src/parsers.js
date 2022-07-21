import YAML, { FAILSAFE_SCHEMA } from 'js-yaml';

const parse = (data, extension) => {
  switch (extension) {
    case 'json':
      return JSON.parse(data);
    case 'yml':
    case 'yaml':
      return YAML.load(data, FAILSAFE_SCHEMA);
    default:
      throw new Error(`The file format '${extension}' is not supported`);
  }
};

export default parse;
