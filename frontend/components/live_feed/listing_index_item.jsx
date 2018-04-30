import React from "react";

class ListingIndexItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.handleMouseEnter = this.handleMouseEnter.bind(this);
	}

	handleMouseEnter() {
		this.props.setCurrentListing(this.props.listing._id);
	}

	render() {
		let { listing } = this.props;
		return (
			<div className="feed-index-wrapper" 
				onMouseEnter={this.handleMouseEnter}>
				<div className="feed-index-item">
					<div className="date-feed">
						<p className="feed-date">
							{new Date(listing.created_at).toLocaleString()}
						</p>
					</div>
					<div className="feed-data">
						<img className="feed-img" src={listing.imageUrl} alt="" />
						<h1 className="feed-title">{listing.title}</h1>
					</div>
				</div>
			</div>
		);
	}
}

export default ListingIndexItem;
