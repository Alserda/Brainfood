import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducer from 'data/reducer';

const enhancer = applyMiddleware(
  thunk,
  logger,
);


export default function configureStore(initialState) {
  const store = createStore(reducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('./data/reducer', () => {
      const nextRootReducer = require('./data/reducer'); // eslint-disable-line global-require
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
// const store = createStore(
//   reducer,
//   enhancer
// );

// export default store;
