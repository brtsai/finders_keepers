import React from 'react';
import GoogleButton from './google_button_component';
import UserIcon from './user_icon_component';
import AddFreebieFormContainer from '../forms/add_freebie_form_container';

class Navbar extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			modal: false
		}

		this.addFreebie = this.addFreebie.bind(this)
	}

	renderUserIcon(auth) {
		if (auth) {
			return <UserIcon auth={auth} />;
		}
	}

	renderModal(){
		if (this.state.modal === false){
			return null
		}
		return (
			<AddFreebieFormContainer />
		)		
	}



	addFreebie(e) {
		console.log("click handler add freebie")
		this.setState({ modal: true })
	}

	render() {
		return (
			<nav className="navbar-container">
				<button
					className="add-freebie-button"
					onClick={this.addFreebie}>
					<span className="add-freebie-plus">+</span>
					<span className="add-freebie-text">Add a Freebie</span>
				</button>
				{this.renderModal()}
				{this.renderUserIcon(this.props.auth)}
				<GoogleButton auth={this.props.auth} />
			</nav>
		);
	}
}

export default Navbar;
