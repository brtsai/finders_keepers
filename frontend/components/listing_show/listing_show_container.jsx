import React from "react";
import { connect } from "react-redux";
import ListingShow from './listing_show';

const mapStateToProps = (state) => ({
  listing: state.entities.listings[state.ui.currentListing]
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingShow);