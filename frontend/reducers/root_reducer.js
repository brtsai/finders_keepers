import { combineReducers } from 'redux';

import entities from './entities_reducer';
import auth from './authReducer';

const rootReducer = combineReducers({
  entities,
  auth
});

export default rootReducer;
