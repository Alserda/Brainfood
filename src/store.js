import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import reducer from 'data/reducer';
import sagas from 'data/sagas';

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();

  const enhancer = applyMiddleware(
    thunk,
    logger,
    sagaMiddleware,
  );

  const store = createStore(
    reducer,
    initialState,
    enhancer
  );

  if (module.hot) {
    module.hot.accept('./data/reducer', () => {
      const nextRootReducer = require('./data/reducer'); // eslint-disable-line global-require
      store.replaceReducer(nextRootReducer.default);
    });
  }

  sagaMiddleware.run(sagas);

  return store;
}
