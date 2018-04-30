import React from "react";
import Slide from "react-reveal/Slide";
import ListingIndexItemContainer from "./listing_index_item_container";
import ListingShowContainer from "../listing_show/listing_show_container";

class LiveFeed extends React.Component {
	constructor(props) {
		super(props);
		// this.state = {
		// 	showingDisplayModal: false,
		// 	clickedListing: null,
		// };
		this.renderListingShowModal = this.renderListingShowModal.bind(this);
		// this.openListingShowModal = this.openListingShowModal.bind(this);
		// this.closeListingShowModal = this.closeListingShowModal.bind(this);
		this.handleMouseLeave = this.handleMouseLeave.bind(this);

	}

	componentDidMount() {
		this.props.fetchListings();
	}

	handleOpenListing(listing) {
		this.props.closeListing();
		this.props.openListing(listing._id);
	}


	renderListingShowModal() {
		if (this.props.clickedListingId) {
			return (
				<ListingShowContainer
					closeListingShowModal={this.props.closeListing}
				/>
			);
		} else {
			return <div className="to-be-decided" />;
		}
	}

	handleMouseLeave() {
		this.props.clearCurrentListing();
	}

	render() {
		return (
			<div className="listing-show-level" onMouseLeave={this.handleMouseLeave}>
				{this.renderListingShowModal()}
				<Slide className="testing" right cascade>
					<div className="feed-index">
						{this.props.listings
							.map(listing => {
								return (
									<div onClick={() => this.handleOpenListing(listing)} key={listing._id}  >
										<ListingIndexItemContainer 
											listing={listing}
										/>
									</div>
								);
							})

							.reverse()}
					</div>
				</Slide>
			</div>
		);
	}
}

export default LiveFeed;
