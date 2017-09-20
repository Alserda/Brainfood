import { statusTypes as type } from '../constants';
import * as mutate from '../immutable/mutators';

const pindakaas = (state, action) => {
  console.log('pindakaas middleware');
  // console.log('reducer: ', reducer);
  console.log('state: ', state);
  console.log('action: ', action);
}

// const pindakaas = ding => {
//   console.log('ding: ', ding);
// }

const createCrudReducer = reducerFn => (state, action) => {
  if (!action.crud) {
    return reducerFn(state, action);
  }

  console.log('Create crud reducer action: ', action);

  switch (action.crud.status) {
    case type.fetching:
      return reducerFn(pindakaas(state, action), action);

    case type.success:
      return reducerFn(mutate.setSuccess(state), action);

    case type.failed:
      return reducerFn(mutate.setFailed(state, action.error), action);

    default: throw new Error('Unspecified status type?');
  }
};

export default createCrudReducer;
