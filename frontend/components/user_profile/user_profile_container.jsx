import React from "react";
import { connect } from "react-redux";
import UserProfile from "./user_profile";
import { deleteListing } from "../../actions/listing_actions";

const mapStateToProps = state => {
	const listings = Object.values(state.entities.listings);
	const userListings = listings.filter(listing => {
		return state.auth._id === listing.userId;
	});

	return {
		userListings: userListings,
		auth: state.auth,
	};
};

const mapDispatchToProps = dispatch => ({
	deleteListing: listingId => dispatch(deleteListing(listingId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
