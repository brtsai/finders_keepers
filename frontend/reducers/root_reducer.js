import { combineReducers } from "redux";
import errors from "./errors_reducer";
import entities from "./entities_reducer";
import auth from "./auth_reducer";
import ui from './ui_reducer';

const rootReducer = combineReducers({
	entities,
	auth,
  errors,
  ui
});

export default rootReducer;
