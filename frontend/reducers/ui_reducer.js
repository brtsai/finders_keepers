import merge from 'lodash/merge';
import { SET_CURRENT_LISTING, CLEAR_CURRENT_LISTING } from "../actions/types";


const UIReducer = (state = {currentListing: null}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type){
    case SET_CURRENT_LISTING:
      newState = merge({}, state);
      newState.currentListing = action.listingId;
      return newState;
    case CLEAR_CURRENT_LISTING:
      newState = merge({}, state);
      newState.currentListing = null;
      return newState;
    default: 
      return state;
  }
};

export default UIReducer;