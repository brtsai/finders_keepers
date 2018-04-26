import React from 'react';
import { connect } from 'react-redux';
import AddFreebieForm from './add_freebie_form';
import { createListing } from '../../actions/listing_actions';


const mapStateToProps =(state) => ({


});

const mapDispatchToProps = (dispatch) => ({
	createListing: (listing) => dispatch(createListing(listing))

});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AddFreebieForm);