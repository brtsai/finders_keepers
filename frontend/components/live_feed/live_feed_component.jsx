import React from "react";
import Slide from "react-reveal/Slide";
import ListingIndexItem from "./listing_index_item";

class LiveFeed extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.fetchListings();
	}

	render() {
		return (
			<div>
				<Slide right cascade>
					<div className="feed-index">
						{this.props.listings
							.map(listing => (
								<ListingIndexItem key={listing._id} listing={listing} />
							))
							.reverse()}
					</div>
				</Slide>
			</div>
		);
	}
}

export default LiveFeed;
