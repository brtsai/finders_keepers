import React from 'react';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  renderGoogleSignIn () {
  	return (
  	  	<a href="/auth/google">Sign In</a>
  	);
  }

  render() {
  	renderGoogleSignIn();
  }
}

export default Navbar;