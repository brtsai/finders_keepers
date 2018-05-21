import { connect } from "react-redux";

import Map from "./map";
import {
	openListing,
	setCurrentListing,
	clearCurrentListing,
} from "../../actions/ui_actions";

const mapStateToProps = state => ({
	listings: state.entities.listings,
	currentListing: state.ui.currentListing,
});

const mapDispatchToProps = dispatch => ({
	open: listingId => dispatch(openListing(listingId)),
	set: listingId => dispatch(setCurrentListing(listingId)),
	clear: () => dispatch(clearCurrentListing()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);
