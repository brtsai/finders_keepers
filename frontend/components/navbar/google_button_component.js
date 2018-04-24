import React from 'react';
import { Link } from 'react-router-dom';

class GoogleButton extends React.Component {
	constructor(props){
		super(props);
	}


	render(){
		console.log(this.props)
		return(
  			<a href="/auth/google">Sign In</a>
		)

	}
}



export default GoogleButton;