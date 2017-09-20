import { combineReducers } from 'redux-immutable';
import { reducer as formReducer } from 'redux-form';
import createCrudReducer from 'services/crud/redux/createCrudReducer';
import posts from './posts/duck';
import users from './users/duck';

export default combineReducers({
  posts: createCrudReducer(posts),
  users: createCrudReducer(users),
  form: formReducer,
});
