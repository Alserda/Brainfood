import { Record } from 'immutable';

import { crudTypesCamelCased } from '../constants';

export const Status = Record({
  fetching: false,
  success: false,
  failed: false,
  payload: null,
});


export const crudStatusRecords = (
  Object.keys(crudTypesCamelCased).reduce(
    (statusses, type) => ({
      ...statusses,
      [type]: new Status(),
    }),
    {}
  )
);
