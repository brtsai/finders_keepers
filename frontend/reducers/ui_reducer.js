import merge from "lodash/merge";
import {
	SET_CURRENT_LISTING,
	CLEAR_CURRENT_LISTING,
	OPEN_LISTING,
	CLOSE_LISTING,
} from "../actions/types";

const defaultState = {
	currentListing: null,
	clickedListingId: null,
};

const UIReducer = (state = defaultState, action) => {
	Object.freeze(state);
	let newState;
	switch (action.type) {
		case SET_CURRENT_LISTING:
			newState = merge({}, state);
			newState.currentListing = action.listingId;
			return newState;
		case CLEAR_CURRENT_LISTING:
			newState = merge({}, state);
			newState.currentListing = null;
			return newState;
		case OPEN_LISTING:
			newState = merge({}, state);
			newState.clickedListingId = action.listingId;
			return newState;
		case CLOSE_LISTING:
			newState = merge({}, state);
			newState.clickedListingId = null;
			return newState;
		default:
			return state;
	}
};

export default UIReducer;
