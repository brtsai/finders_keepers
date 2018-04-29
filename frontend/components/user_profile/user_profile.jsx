import React from "react";


class UserProfile extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		console.log(this.props.userListings);
		return (
			<div>
				<h1>Hello this is the user profile</h1>
			</div>
		)
	}
}


export default UserProfile;