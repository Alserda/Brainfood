import { call, put } from 'redux-saga/effects';
import { fetch } from './api';
import { types } from './duck';
// import { Post } from './models';

export function* fetchPosts() {
  try {
    const { data } = yield call(fetch);

    // Transform the posts
    // const posts = new Map();
    // data.forEach(post => posts.set(post.id, new Post(post)));

    yield put({ type: types.GET_POSTS_SUCCESS, posts: data });
  } catch (err) {
    yield put({ type: types.GET_POSTS_FAILED });
  }
}
