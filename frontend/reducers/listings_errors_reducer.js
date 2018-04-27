import { RECEIVE_LISTING_ERRORS } from "../actions/types";

const listingsErrorsReducer = (state = {}, action) => {
	console.log(action);
	switch (action.type) {
		case RECEIVE_LISTING_ERRORS:
			return action.errors;

		default:
			return state;
	}
};

export default listingsErrorsReducer;
