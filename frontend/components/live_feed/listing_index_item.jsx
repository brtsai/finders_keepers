import React from "react";

const ListingIndexItem = ({ listing }) => {
	return (
		<div className="feed-index-wrapper">
			<div className="feed-index-item">
				<img className="feed-img" src={listing.imageUrl} alt="" />
				<h1 className="feed-title">{listing.title}</h1>
				<p className="feed-date">
					{new Date(listing.created_at).toDateString()}
				</p>
			</div>
			<div className="feed-line" />
		</div>
	);
};

export default ListingIndexItem;
