import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducer from 'data/reducer';

const enhancer = applyMiddleware(
  thunk,
  logger,
);

const store = createStore(
  reducer,
  enhancer
);

export default store;
