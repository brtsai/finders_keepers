import {
	CLEAR_CURRENT_LISTING,
	SET_CURRENT_LISTING,
	OPEN_LISTING,
	CLOSE_LISTING,
} from "./types";

export const setCurrentListing = listingId => ({
	type: SET_CURRENT_LISTING,
	listingId,
});

export const clearCurrentListing = () => ({
	type: CLEAR_CURRENT_LISTING,
});

export const openListing = listingId => ({
	type: OPEN_LISTING,
	listingId,
});

export const closeListing = () => ({
	type: OPEN_LISTING,
});
