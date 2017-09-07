import { createReducer } from 'redux-create-reducer';
import { Map, Record } from 'immutable';
import { creators as crud } from 'utils/redux/crud';

import { Status } from 'data/status/models';
import { setFetching } from 'data/status/mutators';

import { Post } from './models';
import * as mutate from './mutators';

const initialState = new Record({
  status: new Status(),
  collection: new Map(),
  detail: new Post(),
});

export const types = crud.types('POSTS');
export const actions = crud.actions(types);

/* Action handlers */
const fetchPostsSuccessHandler = (state, action) => (
  mutate.setPosts(action.payload)(state)
);

const handlers = {
  [types.FETCH_COLLECTION]: setFetching,
  [types.FETCH_COLLECTION_SUCCESS]: fetchPostsSuccessHandler
};

export default createReducer(initialState(), handlers);
