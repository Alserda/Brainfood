import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import configureStore from './store';
import RootApp from './RootApp';

const target = document.getElementById('app');
const store = configureStore();

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    target
  );
};

render(RootApp);

module.hot.accept('./RootApp', () => {
  render(RootApp);
});
