import { crudTypes } from '../constants';

const crudTypeGroup = (type, context) => ({
  [type]: `${context}/${type}`,
  [`${type}_SUCCESS`]: `${context}/${type}_SUCCESS`,
  [`${type}_FAILED`]: `${context}/${type}_FAILED`,
});

/**
 * Creates namespaced CRUD action types.
 * @param  {[type]} namespace [description]
 * @return {[type]}           [description]
 */
export const createCrudTypes = namespace => (
  Object.values(crudTypes).reduce(
    (types, type) => ({
      ...types,
      ...crudTypeGroup(type, namespace.toUpperCase())
    }),
    {}
  )
);
