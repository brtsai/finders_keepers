import React from 'react';
import GoogleButton from './google_button_component';


class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  addFreebie (e) {
    e.preventDefault();
  }

  render() {
  	return(
  		<nav className="navbar-container">
        <button className="add-freebie-button" onClick={ this.addFreebie }><span className="add-freebie-plus">+</span> <span className="add-freebie-text">Add a Freebie</span></button>
      	<GoogleButton auth={this.props.auth} />
      </nav>
  	);
  }
}


export default Navbar;
