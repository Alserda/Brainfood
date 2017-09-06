import { createReducer } from 'redux-create-reducer';
import { Map, Record } from 'immutable';

import { pipe } from 'utils/redux';
import { Status } from 'data/models';

import { Post } from './models';
import * as mutate from './mutators';


const initialState = new Record({
  status: new Status(),
  collection: new Map(),
  detail: new Post(),
});

export const types = {
  FETCH_COLLECTION: 'POSTS/FETCH_COLLECTION',
  FETCH_ONE: 'POSTS/FETCH_ONE',
  FETCH_SUCCESS: 'POSTS/FETCH_SUCCESS',
  FETCH_FAILED: 'POSTS/FETCH_FAILED',
};

export const actions = {
  fetch: () => ({ type: types.FETCH_COLLECTION }),
  fetchOne: (id) => ({ type: types.FETCH_ONE, id }),
};

/* Action handlers */
const fetchPostsSuccessHandler = (state, action) => (
  pipe([mutate.setPosts(action.posts)], state)
);

const handlers = {
  [types.FETCH_SUCCESS]: fetchPostsSuccessHandler
};

export default createReducer(initialState(), handlers);
