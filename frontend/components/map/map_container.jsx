import { connect } from "react-redux";

import Map from "./map";
import { openListing } from '../../actions/ui_actions';

const mapStateToProps = state => ({
	listings: state.entities.listings,
	currentListing: state.ui.currentListing,
});

const mapDispatchToProps = dispatch => ({
  open: listingId => dispatch(openListing(listingId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);
