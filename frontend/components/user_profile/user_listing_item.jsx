import React from "react";

const UserListingIndex = ({listing, deleteListing}) => {
	return (
		<li className="user-listing-item">
			<div className="user-profile-list-wrapper">
				<img src={listing.imageUrl}></img>
				<div className="user-listing-info">
					<p>{listing.title}</p>
				</div>
				<div className="user-buttons-container" >
					<button className="user-listing-delete" onClick={() => deleteListing(listing._id)}>Delete Listing</button>
				</div>
			</div>
		</li>
	)
}

export default UserListingIndex