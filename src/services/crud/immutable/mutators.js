import pipe from 'services/redux/pipe';

const setFetchingMap = v => s => s.setIn(['status', 'fetching'], v);
const setSuccessMap = v => s => s.setIn(['status', 'success'], v);
const setFailedMap = v => s => s.setIn(['status', 'failed'], v);
const setPayloadMap = v => s => s.setIn(['status', 'payload'], v);

const resetStatus = state => pipe([
  setFetchingMap(false),
  setSuccessMap(false),
  setFailedMap(false),
  setPayloadMap(null)
], state);


export const setFetching = state => pipe([
  resetStatus,
  setFetchingMap(true),
], state);

export const setSuccess = state => pipe([
  setFetchingMap(false),
  setSuccessMap(true),
], state);

export const setFailed = (state, payload) => pipe([
  setFetchingMap(false),
  setFailedMap(true),
  setPayloadMap(payload),
], state);
