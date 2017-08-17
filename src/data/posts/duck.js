import { createReducer } from 'redux-create-reducer';

export const types = {
  GET_POSTS_REQUEST: 'POST/GET_POSTS_REQUEST',
};

export const actions = {
  fetch: () => ({ type: types.GET_POSTS_REQUEST })
};

const fetchPostsHandler = state => state.concat('henk');

const handlers = {
  [types.GET_POSTS_REQUEST]: fetchPostsHandler
};

export default createReducer(['hihi'], handlers);
