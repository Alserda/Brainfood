import { Record } from 'immutable';

export const Status = Record({
  fetching: false,
  success: false,
  failed: false,
  payload: null,
});
