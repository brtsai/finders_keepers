import React from "react";

const UserListingIndex = ({listing, deleteListing}) => {

	return (
		<li className="user-listing-item">
			<div className="user-profile-list-wrapper">
				<img src={listing.imageUrl}></img>
				<p>{listing.title}</p>
				<p>{listing.description}</p>
				<button onClick={deleteListing(listing._id)}>Delete Listing</button>
			</div>
		</li>
	)
}

export default UserListingIndex