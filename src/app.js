import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import Router from 'components/Router';
import store from './store';

if (module.hot) {
  module.hot.accept();
}

const target = document.getElementById('app');

render(
  <Provider store={store}>
    <Router />
  </Provider>,
  target
);
