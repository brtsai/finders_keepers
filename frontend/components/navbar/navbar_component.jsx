import React from 'react';
import GoogleButton from './google_button_component';
import { connect } from 'react-redux'


class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
  	return(
      <GoogleButton auth={this.props.auth} />
  	);
  }
}


export default Navbar;
