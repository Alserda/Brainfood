import { createReducer } from 'redux-create-reducer';
import { Map, Record } from 'immutable';
import { Status } from 'data/models';
import { creators as crud } from 'utils/redux/crud';

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
  mutate.setPosts(action.posts)(state)
);

const handlers = {
  [types.FETCH_COLLECTION_SUCCESS]: fetchPostsSuccessHandler
};


// console.log('types: ', types);

export default createReducer(initialState(), handlers);


/* Todo: Separate success/fail for fetching a collection or one */
