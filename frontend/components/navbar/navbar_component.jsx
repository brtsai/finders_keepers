import React from 'react';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  renderGoogleButton(){
  	return(
  		<a href="/auth/google">Sign In</a>
  	);
  }

  render() {
  	return(
  	<div>
  		{this.renderGoogleButton()}
  	</div>
  	)
  }
}

export default Navbar;
