import React from 'react';
import { Link } from 'react-router-dom';

class GoogleButton extends React.Component {
	constructor(props){
		super(props);
	}

	renderContent(){
		switch(this.props.auth){
			case null:
				return;
			case false:
				return <li><a href="/auth/google">login with google</a></li>
			default:
				return <li><a href="/api/logout">Log Out</a></li>
				
		}
	}


	render(){
		return(
			<div>
				{this.renderContent()}
			</div>
		)
	}
}



export default GoogleButton;