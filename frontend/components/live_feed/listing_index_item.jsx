import React from "react";
import ListingShowContainer from '../listing_show/listing_show_container';

class ListingIndexItem extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			showingDisplayModal: false
		};
		// debugger;
		this.handleMouseEnter = this.handleMouseEnter.bind(this);
		this.handleModalOnClick = this.openListingShowModal.bind(this);
	}

	handleMouseEnter() {
		let _id = this.props.listing._id;
		this.props.setCurrentListing(_id);
	}

	openListingShowModal(e) {
		// debugger;
		this.setState({
			showingDisplayModal: !this.state.showingDisplayModal
		});
	}

	// closeListingShowModal

	renderListingShowModal() {
		if (this.state.showingDisplayModal === false) {
			return <div className = "to-be-decided" />;
		}

		return <ListingShowContainer  />;
	}

	render(){
		let {listing} = this.props;
		return (
			<div className="">
				<a onClick={this.openListingShowModal}>
					<div className="feed-index-wrapper" onMouseEnter={this.handleMouseEnter}>
						<div className="feed-index-item">
							<img className="feed-img" src={listing.imageUrl} alt="" />
							<h1 className="feed-title">{listing.title}</h1>
							<p className="feed-date">
								{new Date(listing.created_at).toDateString()}
							</p>
						</div>
						<div className="feed-line" />
					</div>
				</a>
			</div>
		);
	}
}

export default ListingIndexItem;

//setCurrentListing, clearCurrentListing, listing