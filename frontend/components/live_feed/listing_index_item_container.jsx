import React from 'react';
import { connect } from 'react-redux';
import { setCurrentListing } from "../../actions/ui_actions";
import ListingIndexItem from './listing_index_item';

const mapStateToProps = state => ({
	currentListing: state.ui.currentListing,
});

const mapDispatchToProps = dispatch => ({
	setCurrentListing: (listingId) => dispatch(setCurrentListing(listingId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingIndexItem);
