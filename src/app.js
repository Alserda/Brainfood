import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import Router from 'components/Router';
import configureStore from './store';

if (module.hot) {
  module.hot.accept();
}

/* Constants */
const target = document.getElementById('app');
const store = configureStore();

/* Rendering the application to the target */
render(
  <Provider store={store}>
    <Router />
  </Provider>,
  target
);
