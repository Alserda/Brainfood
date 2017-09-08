import { call, put } from 'redux-saga/effects';
import { Map } from 'immutable';
import * as api from './api';
import { actions } from './duck';
import { Post } from './models';

export function* fetchPosts() {
  try {
    const { data } = yield call(api.fetchCollection);

    const posts = new Map().withMutations(map => (
      data.forEach(post => map.set(post.id, new Post(post)))
    ));

    yield put(actions.fetchCollectionSuccess(posts));
  } catch (error) {
    yield put(actions.fetchCollectionFailed(error));
  }
}

export function* fetchPost(action) {
  try {
    const { id } = action;
    const { data } = yield call(api.fetchOne, id);

    const post = new Post(data);

    yield put(actions.fetchOneSuccess(post));
  } catch (error) {
    yield put(actions.fetchOneFailed(error));
  }
}
