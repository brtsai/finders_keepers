import {
  RECEIVE_LISTINGS,
  RECEIVE_LISTING,
  REMOVE_LISTING
} from "./types";
import * as ListingApiUtil from './listing_api_util';

const receiveListings = (listings) => dispatch => ({
      type: RECEIVE_LISTINGS,
      listings
  });

const receiveListing = (listing) => dispatch => ({
      type: RECEIVE_LISTING,
      listing
  });

const removeListing = (listing) => dispatch => ({
      type: REMOVE_LISTING,
      listing
  });

export const fetchListings = () => dispatch => (
	ListingApiUtil.fetchListings()
		.then(listings => dispatch(receiveListings(listings)))
);

export const createListing = (formListing) => dispatch => (
	ListingApiUtil.createListing(formListing)
		.then(listing => dispatch(receiveListing(listing)))
);

export const deleteListing = (listingId) => dispatch => (
	ListingApiUtil.deleteListing(listingId)
		.then(listing => dispatch(removeListing(listing)))
);