import {
  crudTypesCamelCased as crudType,
  statusTypes as statusType,
} from '../constants';

export const createCrudActions = types => {
  console.log('create crud actions:', types);

  return ({
    /* Collection */
    fetchCollection: () => ({
      type: types.FETCH_COLLECTION,
      crud: {
        status: statusType.fetching,
        type: crudType.fetchCollection,
      },
    }),
    fetchCollectionSuccess: (payload) => ({
      type: types.FETCH_COLLECTION_SUCCESS,
      payload,
      crud: {
        status: statusType.success,
        type: crudType.fetchCollection,
      }
    }),
    fetchCollectionFailed: (error) => ({
      type: types.FETCH_COLLECTION_FAILED,
      error,
      crud: {
        status: statusType.failed,
        type: crudType.fetchCollection,
      }
    }),

    /* Fetching one record */
    fetchOne: (id) => ({
      type: types.FETCH_ONE,
      id,
      crud: statusType.fetching,
    }),

    fetchOneSuccess: (payload) => ({
      type: types.FETCH_ONE_SUCCESS,
      payload,
      crud: statusType.success,
    }),

    fetchOneFailed: (error) => ({
      type: types.FETCH_ONE_FAILED,
      error,
      crud: statusType.failed,
    }),
  });
}

