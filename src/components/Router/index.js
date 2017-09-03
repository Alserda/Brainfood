import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Home from 'scenes/Home';
import Posts from 'scenes/Posts';

const Router = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/posts'>Posts</Link></li>
      </ul>
      <hr />
      <Switch>
        <Route exact path='/' component={Posts} />
        <Route path='/posts' component={Home} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Router;
