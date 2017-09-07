import { combineReducers } from 'redux-immutable';
import createCrudReducer from 'services/crud/redux/createCrudReducer';
import posts from './posts/duck';

export default combineReducers({
  posts: createCrudReducer(posts),
});
