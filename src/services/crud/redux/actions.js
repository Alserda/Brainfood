import { types as statusType } from '../constants';

export const createCrudActions = types => ({
  /* Collection */
  fetchCollection: () => ({
    type: types.FETCH_COLLECTION,
    crud: statusType.fetching,
  }),
  fetchCollectionSuccess: (payload) => ({
    type: types.FETCH_COLLECTION_SUCCESS,
    payload,
    crud: statusType.success,
  }),
  fetchCollectionFailed: (error) => ({
    type: types.FETCH_COLLECTION_FAILED,
    error,
    crud: statusType.failed,
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

