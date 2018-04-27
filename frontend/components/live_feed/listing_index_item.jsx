import React from "react";

class ListingIndexItem extends React.Component {

	constructor(props) {
		super(props);
	}

	render(){
		let {listing, setCurrentListing, clearCurrentLisitng} = this.props;
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
	}
}

export default ListingIndexItem;
