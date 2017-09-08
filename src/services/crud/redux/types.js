const crudTypeGroup = (type, context) => ({
  [type]: `${context}/${type}`,
  [`${type}_SUCCESS`]: `${context}/${type}_SUCCESS`,
  [`${type}_FAILED`]: `${context}/${type}_FAILED`,
});


export function createCrudTypes(namespace) {
  const context = namespace.toUpperCase();

  const crudTypes = [
    'FETCH_COLLECTION',
    'FETCH_ONE',
    'CREATE',
    'UPDATE',
    'DELETE'
  ];

  const transformed = crudTypes.reduce(
    (types, type) => ({
      ...types,
      ...crudTypeGroup(type, context)
    }), {});

  return transformed;
}
