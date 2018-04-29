import React from "react";


class UserProfile extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		const profileImage = this.props.auth.profileImage;
		const profileUrl = profileImage.slice(0, profileImage.length - 2) + "300";
		console.log(profileUrl);
		
		return (
			<div className="user-profile-modal-container">
				<div className="user-profile-header">
					<img src ={profileUrl} />
					<h1>{this.props.auth.displayName}</h1>
				</div>
			</div>
		)
	}
}


export default UserProfile;