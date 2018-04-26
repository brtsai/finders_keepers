import { combineReducers } from 'redux';
import errors from './errors_reducer';
import entities from './entities_reducer';
import auth from './auth_reducer';

const rootReducer = combineReducers({
  entities,
  auth,
  // errors
});

export default rootReducer;
