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
		this.closeListingShowModal = this.closeListingShowModal.bind(this);
		// this.handleMouseEnter = this.handleMouseEnter.bind(this);

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
			return <ListingShowContainer 
					clickedListing={this.state.clickedListing}
					closeListingShowModal={this.closeListingShowModal}
				/>;
		}
		else {
			return <div className = "to-be-decided"></div>;
		}
	}

	render() {
		console.log(this.state)
		return (
			<div className="listing-show-level">
				{this.renderListingShowModal()}
				<Slide className="testing" right cascade>
					<div className="feed-index">
						{this.props.listings
							.map(listing => {
								return (
									<div onClick={(e) => this.openListingShowModal(e, listing) } >
										<ListingIndexItemContainer 
											key={listing._id} 
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
