import { Record } from 'immutable';

export const Status = Record({
  fetching: false,
  success: false,
  error: false,
  message: null,
});
