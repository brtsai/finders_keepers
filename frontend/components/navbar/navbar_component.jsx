import React from 'react';
import GoogleButton from './google_button_component';
import UserIcon from './user_icon_component';

class Navbar extends React.Component {
	constructor(props) {
		super(props);
	}

	renderUserIcon(auth) {
		if (auth) {
			console.log('In renderUserIcon!');
			console.log(auth);

			return <UserIcon auth={auth} />;
		}
	}

	render() {
		const auth = this.props.auth;

		return (
			<nav className="navbar-container">
				{this.renderUserIcon(auth)}
				<GoogleButton auth={auth} />
			</nav>
		);
	}
}

export default Navbar;
