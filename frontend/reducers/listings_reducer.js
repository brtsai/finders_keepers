import merge from "lodash/merge";

import {
	RECEIVE_LISTINGS,
	RECEIVE_LISTING,
	REMOVE_LISTING,
} from "../actions/types";

const listingsReducer = (state = {}, action) => {
	switch (action.type) {
		case RECEIVE_LISTINGS:
			return action.listings;
		case RECEIVE_LISTING:
			return merge({}, state, { [action.listing.id]: action.listing });
		case REMOVE_LISTING:
			let newState = merge({}, state);
			delete newState[action.listing.id];
			return newState;
		default:
			return state;
	}
};

export default listingsReducer;
