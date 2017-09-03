import { call, put } from 'redux-saga/effects';
import { fetch } from './api';
import { types } from './duck';
import { Post } from './models';

export function* fetchPosts() {
  try {
    const { data } = yield call(fetch);

    const posts = data.reduce((prev, current) => {
      prev[current.id] = new Post(current);

      return prev;
    }, {});
    // Transform the posts
    // const posts = new Map();
    // data.forEach(post => posts.set(post.id, new Post(post)));

    yield put({ type: types.GET_POSTS_SUCCESS, posts });
  } catch (err) {
    yield put({ type: types.GET_POSTS_FAILED });
  }
}
