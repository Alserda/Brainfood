import { createReducer } from 'redux-create-reducer';

export const types = {
  GET_POSTS_REQUEST: 'POST/GET_POSTS_REQUEST',
};

export const actions = {
  fetch: () => ({ type: types.GET_POSTS_REQUEST })
};

function fetchPostsHandler(state, action) {
  console.log('fetchPostsHandler ', state, action);
  const newState = state.push('henk');
  console.log('new state:' , newState);
  return newState;

}

const handlers = {
  [types.GET_POSTS_REQUEST]: fetchPostsHandler
};

export default createReducer(['hihi'], handlers);