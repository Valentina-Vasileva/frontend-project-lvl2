import _ from 'lodash';

const stringify = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }

  if (_.isString(value)) {
    return `'${value}'`;
  }

  return value;
};

const formatToPlain = (data, ancestry) => data.map((node) => {
  const formattedOldValue = stringify(node.oldValue);
  const formattedNewValue = stringify(node.newValue);
  const property = `${ancestry}${node.key}`;

  switch (node.type) {
    case 'added':
      return `Property '${property}' was added with value: ${formattedNewValue}`;
    case 'deleted':
      return `Property '${property}' was removed`;
    case 'changed': {
      return `Property '${property}' was updated. From ${formattedOldValue} to ${formattedNewValue}`;
    }
    case 'complex': {
      return formatToPlain(node.children, `${property}.`);
    }
    case 'unchanged':
      return [];
    default:
      throw new Error(`The node type '${node.type}' is not identified`);
  }
}).flat().join('\n');

function format(data) {
  return formatToPlain(data, '');
}

export default format;
