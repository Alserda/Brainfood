import { call, put } from 'redux-saga/effects';
import { Map } from 'immutable';
import { fetch } from './api';
import { types } from './duck';
import { Post } from './models';

export function* fetchPosts() {
  try {
    const { data } = yield call(fetch);

    // Transform the posts to Immutable objects
    const posts = data.reduce((map, current) => (
      map.merge({ [current.id]: new Post(current) })
    ), new Map());

    yield put({ type: types.GET_POSTS_SUCCESS, posts });
  } catch (err) {
    yield put({ type: types.GET_POSTS_FAILED });
  }
}
