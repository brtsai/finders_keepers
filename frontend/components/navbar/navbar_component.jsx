import React from "react";
import Fade from "react-reveal/Fade";
import GoogleButton from "./google_button_component";
import UserIcon from "./user_icon_component";
import AddFreebieFormContainer from "../forms/add_freebie_form_container";
import UserProfileContainer from '../user_profile/user_profile_container';

class Navbar extends React.Component {
	constructor(props) {
		super(props);

		this.state = { 
			showingAddFreebieModal: false,
			showUserProfileModal: false
		 };

		this.openAddFreebieForm = this.openAddFreebieForm.bind(this);
		this.closeAddFreebieForm = this.closeAddFreebieForm.bind(this);
		this.openUserModal = this.openUserModal.bind(this);
		this.closeUserModal = this.closeUserModal.bind(this);
	}

	renderUserIcon(auth) {
		if (auth) {
			return <UserIcon openUserModal={this.openUserModal} auth={auth} />;
		}
	}

	openUserModal(e){
		this.setState({showUserProfileModal: true})
	}

	closeUserModal(e){
		this.setState({ showUserProfileModal: false})
	}


	renderUserProfileModal(){
		if(this.state.showUserProfileModal === true){
			return (
				<UserProfileContainer close = { this.closeUserModal } />
			);
		}else {
			return null;
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
				{this.renderUserProfileModal()}
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
