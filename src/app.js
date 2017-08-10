import React from 'react';
import { render } from 'react-dom';

import Home from 'scenes/Home';

if (module.hot) {
  module.hot.accept();
}


const target = document.getElementById('app');


render(<Home />, target);
