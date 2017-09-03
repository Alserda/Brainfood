import { createReducer } from 'redux-create-reducer';

export const types = {
  GET_POSTS_REQUEST: 'POST/GET_POSTS_REQUEST',
  GET_POSTS_SUCCESS: 'POST/GET_POSTS_SUCCESS',
  GET_POSTS_FAILED: 'POST/GET_POSTS_FAILED',
};

export const actions = {
  fetch: () => ({ type: types.GET_POSTS_REQUEST })
};

const getPostsSuccessHandler = (state, action) => {
  const nextState = { ...state, ...action.posts };
  // console.log('state:' , state);
  // console.log('action:' , action);
  return nextState;
};

const handlers = {
  [types.GET_POSTS_SUCCESS]: getPostsSuccessHandler
};

export default createReducer({}, handlers);
