import { createSelector } from 'reselect';

const getPostsMap = state => state.getIn(['posts', 'collection']);

export const getPosts = createSelector(
  getPostsMap,
  (postsMap) => postsMap
);
