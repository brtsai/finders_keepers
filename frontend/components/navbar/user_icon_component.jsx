import React from "react";

class UserIcon extends React.Component {
	render() {
		return (
			<div
				onClick={this.props.openUserModal}
				className="user-profile-container"
			>
				<img src={this.props.auth.profileImage} />
				<p>{this.props.auth.displayName}</p>
			</div>
		);
	}
}

export default UserIcon;
