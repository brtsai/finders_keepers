import { connect } from 'react-redux';

import Map from './map';

const mapStateToProps = state => ({
  listings: state.entities.listings,
  currentListing: state.ui.currentListing,
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Map);
