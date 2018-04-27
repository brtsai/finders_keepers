import React from "react";
import Fade from "react-reveal/Fade";
import GoogleButton from "./google_button_component";
import UserIcon from "./user_icon_component";
import AddFreebieFormContainer from "../forms/add_freebie_form_container";

class Navbar extends React.Component {
	constructor(props) {
		super(props);

		this.state = { showingAddFreebieModal: false };

		this.openAddFreebieForm = this.openAddFreebieForm.bind(this);
		this.closeAddFreebieForm = this.closeAddFreebieForm.bind(this);
	}

	renderUserIcon(auth) {
		if (auth) {
			return <UserIcon auth={auth} />;
		}
	}

	renderModal() {
		if (this.state.showingAddFreebieModal === false) {
			return <div className="errors-and-form-wrapper" />;
		}

		return <AddFreebieFormContainer close={this.closeAddFreebieForm} />;
	}

	openAddFreebieForm(e) {
		this.setState({
			showingAddFreebieModal: !this.state.showingAddFreebieModal,
		});
	}

	closeAddFreebieForm(e) {
		this.setState({ showingAddFreebieModal: false });
	}

	render() {
		return (
			<nav className="navbar-container">
				<button
					className="add-freebie-button"
					onClick={this.openAddFreebieForm}
				>
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
