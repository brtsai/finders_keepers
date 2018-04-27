import React from 'react';
import { connect } from 'react-redux';
import { setCurrentListing, clearCurrentListing } from "../../actions/ui_actions";
import ListingIndexItem from './listing_index_item';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
	setCurrentListing: (listingId) => dispatch(setCurrentListing(listingId)),
	clearCurrentListing: () => dispatch(clearCurrentListing)
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingIndexItem);