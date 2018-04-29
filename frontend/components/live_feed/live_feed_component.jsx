import React from "react";
import Slide from "react-reveal/Slide";
import ListingIndexItemContainer from "./listing_index_item_container";
import ListingShowContainer from '../listing_show/listing_show_container';

class LiveFeed extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			showingDisplayModal: false,
			clickedListing: null
		};
		this.renderListingShowModal = this.renderListingShowModal.bind(this);
		this.openListingShowModal = this.openListingShowModal.bind(this);
		this.handleMouseLeave = this.handleMouseLeave.bind(this);

	}

	componentDidMount() {
		this.props.fetchListings();
	}

	openListingShowModal(e, listing) {
		this.setState({showingDisplayModal: true, clickedListing: listing});
	}

	closeListingShowModal() {
		this.setState({showingDisplayModal: false});
	}

	renderListingShowModal() {
		if (this.state.showingDisplayModal) {
			return <ListingShowContainer clickedListing={this.state.clickedListing}/>;
		}
		else {
			return <div className = "to-be-decided"></div>;
		}
	}

	handleMouseLeave() {
		this.props.clearCurrentListing();
	}

	render() {
		return (
			<div className="listing-show-level" onMouseLeave={this.handleMouseLeave}>
				{this.renderListingShowModal()}
				<Slide right cascade>
					<div className="feed-index">
						{this.props.listings
							.map(listing => {
								return (
									<div onClick={(e) => this.openListingShowModal(e, listing) } key={listing._id}  >
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
