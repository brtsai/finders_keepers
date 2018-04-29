import React from "react";
import { connect } from "react-redux";
import { fetchListings } from "../../actions/listing_actions";
import { clearCurrentListing } from "../../actions/ui_actions";
import LiveFeedComponent from "./live_feed_component";

const mapStateToProps = state => {
	return {
		listings: Object.values(state.entities.listings),
		currentListing: state.ui.currentListing
	};
};

const mapDispatchToProps = dispatch => ({
	fetchListings: () => dispatch(fetchListings()),
	clearCurrentListing: () => dispatch(clearCurrentListing())
});

export default connect(mapStateToProps, mapDispatchToProps)(LiveFeedComponent);
