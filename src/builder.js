import _ from 'lodash';

const createNode = (key, type, oldValue, newValue, children = null) => ({
  key,
  type,
  oldValue,
  newValue,
  children
});

const buildDiff = (object1, object2) => {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);
  const keys = _.union(object1Keys, object2Keys);

  const diff = keys.map((key) => {
    if (Object.hasOwn(object1, key) && !Object.hasOwn(object2, key)) {
      return createNode(key, 'deleted', object1[key], null, );
    }

    if (!Object.hasOwn(object1, key) && Object.hasOwn(object2, key)) {
      return createNode(key, 'added', null, object2[key]);
    }

    if (_.isObject(object1[key]) && _.isObject(object2[key])) {
      return createNode(key, 'complex', object1[key], object2[key], buildDiff(object1[key], object2[key]));
    }

    if (object1[key] !== object2[key]) {
      return createNode(key, 'changed', object1[key], object2[key]);
    }

    return createNode(key, 'unchanged', object1[key], object2[key]);
  });

  return _.sortBy(diff, 'key');
};

export default buildDiff;
