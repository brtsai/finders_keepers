import merge from "lodash/merge";

import {
	RECEIVE_LISTINGS,
	RECEIVE_LISTING,
	REMOVE_LISTING,
} from "../actions/types";

const listingsReducer = (state = {}, action) => {
	Object.freeze(state);
	let newState;
	switch (action.type) {
		case RECEIVE_LISTINGS:
			newState = {};
			action.listings.forEach(listing => {
				newState[listing._id] = listing;
			});
			return newState;
		case RECEIVE_LISTING:
			return merge({}, state, { [action.listing._id]: action.listing });
		case REMOVE_LISTING:
			newState = merge({}, state);
			delete newState[action.listing._id];
			return newState;
		default:
			return state;
	}
};

export default listingsReducer;
