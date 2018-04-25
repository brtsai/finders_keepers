import { combineReducers } from 'redux';

import listings from './listings_errors_reducer';

const errorsReducer = combineReducers({
  listings
});

export default errorsReducer;
