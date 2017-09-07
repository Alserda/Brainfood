import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Home from 'scenes/Home';
import PostsIndex from 'scenes/Posts/scenes/Index';

const Router = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/posts'>Posts</Link></li>
      </ul>
      <hr />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/posts' component={PostsIndex} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Router;
