import React from "react";

class ListingIndexItem extends React.Component {

	constructor(props) {
		super(props);
		this.state ={};
		this.handleMouseEnter = this.handleMouseEnter.bind(this);
	}

	handleMouseEnter() {
		this.props.setCurrentListing(this.props.listing._id);
	}

	handleMouseLeave() {
		this.props.clearCurrentListing();
	}

	render(){
		let {listing} = this.props;
		return (
			<div className="feed-index-wrapper" 
				onMouseLeave={this.handleMouseLeave} 
				onMouseEnter={this.handleMouseEnter}>
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

//setCurrentListing, clearCurrentListing, listing