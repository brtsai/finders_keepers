import {CLEAR_CURRENT_LISTING, SET_CURRENT_LISTING} from "./types";

export const setCurrentListing = (listingId) => ({
  type: SET_CURRENT_LISTING,
  listingId
});

export const clearCurrentListing = () => ({
  type: CLEAR_CURRENT_LISTING
});
