import React from "react";
import { connect } from "react-redux";
import { fetchListings } from "../../actions/listing_actions";
import { 
	clearCurrentListing, 
	openListing, 
	closeListing 
} from "../../actions/ui_actions";
import LiveFeedComponent from "./live_feed_component";

const mapStateToProps = state => {
	console.log("about to map state");
	return {
		listings: Object.values(state.entities.listings),
		currentListing: state.ui.currentListing,
		clickedListingId: state.ui.clickedListingId
	};
};

const mapDispatchToProps = dispatch => ({
	fetchListings: () => dispatch(fetchListings()),
	clearCurrentListing: () => dispatch(clearCurrentListing()),
	openListing: (listingId) => dispatch(openListing(listingId)),
	closeListing: () => dispatch(closeListing())
});

export default connect(mapStateToProps, mapDispatchToProps)(LiveFeedComponent);
