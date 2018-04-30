import React from "react";
import { connect } from "react-redux";
import ListingShow from "./listing_show";

const mapStateToProps = state => ({
  clickedListing: state.entities.listings[state.ui.clickedListingId]
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ListingShow);
