import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import Router from 'components/Router';
import configureStore from './store';

if (module.hot) {
  module.hot.accept();
}

const target = document.getElementById('app');

const store = configureStore();

render(
  <Provider store={store}>
    <Router />
  </Provider>,
  target
);
