import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Home from 'scenes/Home';
import {
  PostsIndex,
  PostsNew,
  PostsDetail
} from 'scenes/Posts/scenes';

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
        <Route exact path='/posts/new' component={PostsNew} />
        <Route path='/posts/:id' component={PostsDetail} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Router;
