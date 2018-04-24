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

	addFreebie(e) {
		e.preventDefault();
	}

	render() {
		return (
			<nav className="navbar-container">
				<button
					className="add-freebie-button"
					onClick={this.addFreebie}>
					<span className="add-freebie-plus">+</span>{' '}
					<span className="add-freebie-text">Add a Freebie</span>
				</button>
				<GoogleButton auth={this.props.auth} />
			</nav>
		);
	}
}

export default Navbar;
