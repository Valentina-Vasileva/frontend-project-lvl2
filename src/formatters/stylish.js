import _ from 'lodash';

const stringify = (value, level) => {
  if (_.isObject(value)) {
    const indent = ' '.repeat(level * 4);
    const keys = Object.keys(value);
    const formattedValue = keys.map((key) => {
      const childValue = stringify(value[key], level + 1);
      return `${indent}    ${key}: ${childValue}`;
    }).join('\n');
    return `{\n${formattedValue}\n${indent}}`;
  }

  return value;
};

const formatToStylish = (data, level) => {
  const indent = ' '.repeat((level - 1) * 4);
  const formattedString = data.map((node) => {
    const formattedOldValue = stringify(node.oldValue, level);
    const formattedNewValue = stringify(node.newValue, level);

    switch (node.type) {
      case 'added':
        return `${indent}  + ${node.key}: ${formattedNewValue}`;
      case 'deleted':
        return `${indent}  - ${node.key}: ${formattedOldValue}`;
      case 'changed': {
        const deletedNode = `${indent}  - ${node.key}: ${formattedOldValue}`;
        const addedNode = `${indent}  + ${node.key}: ${formattedNewValue}`;
        return [deletedNode, addedNode].join('\n');
      }
      case 'complex': {
        const children = formatToStylish(node.children, level + 1);
        return `${indent}    ${node.key}: ${children}`;
      }
      case 'unchanged':
        return `${indent}    ${node.key}: ${formattedOldValue}`;
      default:
        throw new Error(`The node type '${node.type}' is not identified`);
    }
  }).join('\n');
  return `{\n${formattedString}\n${indent}}`;
};

function format(data) {
  return formatToStylish(data, 1);
}

export default format;
