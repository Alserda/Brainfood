import { combineReducers } from 'redux-immutable';
import { statusMiddleware } from 'services/crud/redux/middleware';
import posts from './posts/duck';

export default combineReducers({
  posts: statusMiddleware(posts),
});
