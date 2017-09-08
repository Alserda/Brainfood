import { createSelector } from 'reselect';

const getPostsMap = state => state.getIn(['posts', 'collection']);
const getPostRecord = state => state.getIn(['posts', 'detail']);

export const getPosts = createSelector(
  getPostsMap,
  (postsMap) => postsMap
);

export const getPost = createSelector(
  getPostRecord,
  (postRecord) => postRecord,
);
