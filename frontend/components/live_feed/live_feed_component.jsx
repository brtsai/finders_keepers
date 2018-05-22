import React from "react";
import Slide from "react-reveal/Slide";
import ListingIndexItemContainer from "./listing_index_item_container";
import ListingShowContainer from "../listing_show/listing_show_container";
import TransitionGroup from "react-transition-group/TransitionGroup";

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

		// this.groupProps = {
		// 	appear: true,
		// 	enter: true,
		// 	exit: true,
		// };
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
				<ListingShowContainer closeListingShowModal={this.props.closeListing} />
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
				<div className="feed-index">
					<div className="feed-background">
						<div className="feed-header-title">
							<h1> Live Feed </h1>
						</div>

						{/* <TransitionGroup {...this.groupProps}> */}
						{this.props.listings
							.sort((listingA, listingB) => {
								let dateA = new Date(listingA.updatedAt);
								let dateB = new Date(listingB.updatedAt);

								return dateB - dateA;
							})
							.map(listing => {
								return (
									<div key={listing._id} className="listing-item-wrapper">
										{/* <Slide  key={listing._id} collapse right> */}
										<div
											className="Test"
											onClick={() => this.handleOpenListing(listing)}
										>
											<ListingIndexItemContainer listing={listing} />
										</div>
										{/* </Slide> */}
									</div>
								);
							})}
						{/* </TransitionGroup> */}
					</div>
				</div>
			</div>
		);
	}
}

export default LiveFeed;
