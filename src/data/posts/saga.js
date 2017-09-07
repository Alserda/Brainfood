import { call, put } from 'redux-saga/effects';
import { Map } from 'immutable';
import { fetch } from './api';
import { types, actions } from './duck';
import { Post } from './models';

export function* fetchPosts() {
  try {
    const { data } = yield call(fetch);

    // Transform the posts to Immutable objects
    // https://tech.affirm.com/redux-patterns-and-anti-patterns-7d80ef3d53bc
    const posts = new Map().withMutations(map => (
      data.forEach(post => map.set(post.id, new Post(post)))
    ));
    yield put(actions.fetchCollectionSuccess(posts));
    // yield put({ type: types.FETCH_COLLECTION_SUCCESS, posts });
  } catch (err) {
    yield put({ type: types.FETCH_COLLECTION_FAILED });
  }
}
