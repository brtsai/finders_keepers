import React from 'react';
import ListingIndexItem from './listing_index_item';

class LiveFeed extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    this.props.fetchListings();
  }

  render() {
    console.log(this.props.listings);
    return (
      <div className="feed-index">
        { 
          this.props.listings.map(listing => (
            <ListingIndexItem key={listing._id} listing={listing} />
          ))
        }
      </div>
    );
  }
}

export default LiveFeed;