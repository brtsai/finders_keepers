import React from 'react';

class UserIcon extends React.Component {
	render() {
		return (
			<ul>
				<a>{this.props.auth._id}</a>
				<a>{this.props.auth.googleId}</a>
				<a>{this.props.auth.__v}</a>
				<a>{Object.values(this.props.auth)}</a>
			</ul>
		);
	}
}

export default UserIcon;
