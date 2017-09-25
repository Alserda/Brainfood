// import { statusTypes as type } from '../constants';
import * as mutate from '../immutable/mutators';

const createCrudReducer = (reducerFn, namespace) => (state, action) => {
  const actionNamespace = action.type.split('/')[0];

  if (!action.crud || (actionNamespace !== namespace)) {
    return reducerFn(state, action);
  }


  // console.log('Action: ', action);
  // console.log('Namespace: ', namespace);
  // console.log('Action namespace: ', actionNamespace);
  // console.log('------------------');

  return reducerFn(mutate.updateStatus(state, action.crud), action);

  // switch (action.crud.status) {
  //   case type.fetching:
  //     return reducerFn(mutate.setFetching(state), action);

  //   case type.success:
  //     return reducerFn(mutate.setSuccess(state), action);

  //   case type.failed:
  //     return reducerFn(mutate.setFailed(state, action.error), action);

  //   default: throw new Error('Unspecified status type?');
  // }
};

export default createCrudReducer;
