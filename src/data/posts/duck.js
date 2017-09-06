import { createReducer } from 'redux-create-reducer';
import { Map } from 'immutable';
// import { Status } from '../models';

export const types = {
  GET_POSTS_REQUEST: 'POST/GET_POSTS_REQUEST',
  GET_POSTS_SUCCESS: 'POST/GET_POSTS_SUCCESS',
  GET_POSTS_FAILED: 'POST/GET_POSTS_FAILED',
};

export const actions = {
  fetch: () => ({ type: types.GET_POSTS_REQUEST })
};

// const initialState = new Record({
//   status: new Status(),
//   posts: new Map(),
// });

const getPostsSuccessHandler = (state, action) => (
  state.merge(action.posts)
);

const handlers = {
  [types.GET_POSTS_SUCCESS]: getPostsSuccessHandler
};

export default createReducer(new Map(), handlers);
