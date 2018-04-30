import React from "react";
import UserListingItem from "./user_listing_item";


class UserProfile extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			currentlistingTab: "currentListing",
		};
		this.currentListingLink = this.currentListingLink.bind(this);
		this.pastListingLink = this.pastListingLink.bind(this);
	}


	renderUserListings(){
		if(this.state.currentlistingTab === "currentListing"){
			const renderListings = this.props.userListings.map((listing) => {
				 return <UserListingItem key={listing._id} deleteListing={this.props.deleteListing} listing={listing} />
			})
			return renderListings
		}else {
			return <h1>Hello</h1>
		}
	}

	currentListingLink(e){
		e.preventDefault();
		this.setState({ currentlistingTab: "currentListing"})

	}

	pastListingLink(e){
		e.preventDefault();
		this.setState({currentlistingTab: "pastListing"})
	}

	render(){
		console.log(this.props)
		const profileImage = this.props.auth.profileImage;
		const profileUrl = profileImage.slice(0, profileImage.length - 2) + "200";
		
		return (
			<div className="user-profile-modal-container">
				<div className="user-profile-header">
					<img src ={profileUrl} />
					<h1>{this.props.auth.displayName}</h1>
				</div>

				<div className="user-profile-links-container">
					<div className="current-listing-link">
						<a onClick={this.currentListingLink} href="">Current Listings</a>
					</div>
					<div className="past-listing-links">
						<a onClick={this.pastListingLink} href="">Past Listings</a>
					</div>
				</div>

				<div className="user-profile-listings-wrapper">
					<ul className="user-profile-list">
						{this.renderUserListings()}
					</ul>
				</div>
			</div>
		)
	}
}


export default UserProfile;