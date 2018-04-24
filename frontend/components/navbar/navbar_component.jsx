import React from 'react';
import GoogleButton from './google_button_component';


class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
  	return(
  		<nav className="navbar-container">
      		<GoogleButton auth={this.props.auth} />
      	</nav>
  	);
  }
}


export default Navbar;
