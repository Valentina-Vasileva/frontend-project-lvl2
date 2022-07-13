const formatToStylish = (data) => {
  const formattedString = data.map((node) => {
    const indent = ' '.repeat(2);

    switch (node.type) {
      case 'added':
        return `${indent}+ ${node.key}: ${node.newValue}`;
      case 'deleted':
        return `${indent}- ${node.key}: ${node.oldValue}`;
      case 'changed': {
        const deletedNode = `${indent}- ${node.key}: ${node.oldValue}`;
        const addedNode = `${indent}+ ${node.key}: ${node.newValue}`;
        return [deletedNode, addedNode].join('\n');
      }
      case 'unchanged':
        return `${indent}  ${node.key}: ${node.oldValue}`;
      default:
        throw new Error(`The node type '${node.type}' is not identified`);
    }
  }).join('\n');
  return `{\n${formattedString}\n}`;
};

export default formatToStylish;
