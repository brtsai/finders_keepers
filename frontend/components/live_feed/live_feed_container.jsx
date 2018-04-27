import React from "react";
import { connect } from "react-redux";
import { fetchListings } from "../../actions/listing_actions";
import LiveFeedComponent from "./live_feed_component";

const mapStateToProps = state => {
	return {
		listings: Object.values(state.entities.listings),
	};
};

const mapDispatchToProps = dispatch => ({
	fetchListings: () => dispatch(fetchListings()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LiveFeedComponent);
