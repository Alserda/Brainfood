import { call, put } from 'redux-saga/effects';
import { fetch } from './api';
import { types } from './duck';

export function* fetchPosts() {
  try {
    const { data } = yield call(fetch);

    yield put({ type: types.GET_POSTS_SUCCESS, data });
  } catch (err) {
    yield put({ type: types.GET_POSTS_FAILED });
  }
}
