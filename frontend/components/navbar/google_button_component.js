import React from 'react';
import { Link } from 'react-router-dom';

class GoogleButton extends React.Component {
	constructor(props) {
		super(props);
	}

	renderContent() {
		switch (this.props.auth) {
			case null:
				return;
			case false:
				return <a href="/auth/google">login with google</a>;
			default:
				return <a href="/api/logout">Log Out</a>;
		}
	}

	render() {
		return <li>{this.renderContent()}</li>;
	}
}

export default GoogleButton;
