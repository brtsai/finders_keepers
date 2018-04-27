import React from "react";
import { connect } from "react-redux";
import AddFreebieForm from "./add_freebie_form";
import { createListing, receiveListingErrors } from "../../actions/listing_actions";

const mapStateToProps = state => ({
	userId: state.auth._id,
});

const mapDispatchToProps = dispatch => ({
	createListing: listing => dispatch(createListing(listing)),
  forwardErrors: errors => dispatch(receiveListingErrors(errors))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddFreebieForm);
