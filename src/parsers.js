const parse = (data, extension) => {
  switch (extension) {
    case 'json':
      return JSON.parse(data);
    default:
      throw new Error(`The file format '${extension}' is not supported`);
  }
};

export default parse;
