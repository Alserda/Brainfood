import pipe from 'utils/redux/pipe';
import { types } from '../constants';

const unset = val => (state, key) => (
  state.setIn(['status', key], val)
);

const resetStatus = state => state.withMutations(
  s => Object.keys(types).reduce(unset(false), s)
);

const setFetchingMap = s => s.setIn(['status', 'fetching'], true);
const setSuccessMap = s => s.setIn(['status', 'success'], true);

export const setFetching = s => pipe([resetStatus, setFetchingMap], s);
export const setSuccess = s => pipe([resetStatus, setSuccessMap], s);
