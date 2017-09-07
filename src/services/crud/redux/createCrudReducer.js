import { types as type } from '../constants';
import * as mutate from '../immutable/mutators';

const createCrudReducer = reducerFn => (state, action) => {
  if (!action.crud) {
    return reducerFn(state, action);
  }

  switch (action.crud) {
    case type.fetching:
      return reducerFn(mutate.setFetching(state), action);

    case type.success:
      return reducerFn(mutate.setSuccess(state), action);

    case type.failed:
      throw new Error('Unhandled failed request type in crud middleware')
      // return reducerFn(mutate.setFailed(state), action);

    default: throw new Error('Unspecified status type?');
  }
};

export default createCrudReducer;
