import React from 'react';
import { connect } from 'react-redux';
import NavbarComponent from './navbar_component';

const mapStateToProps = (state) => ({
	auth: state.auth

});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(NavbarComponent);