import React from "react";
import { connect } from "react-redux";
import AddFreebieForm from "./add_freebie_form";
import { createListing } from "../../actions/listing_actions";
import { uploadImage } from "../../util/image_api_util";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  createListing: listing => dispatch(createListing(listing)),
  uploadImage: fileData => dispatch(uploadImage(fileData))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddFreebieForm);
