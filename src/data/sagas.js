import { takeEvery } from 'redux-saga/effects';
import { types as postsTypes } from './posts/duck';
import * as postsSagas from './posts/saga';

export default function* rootSaga() {
  yield [
    takeEvery(postsTypes.FETCH_COLLECTION, postsSagas.fetchPosts),
    takeEvery(postsTypes.FETCH_ONE, postsSagas.fetchPost)
  ];
}
