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
    return (
      <div>
        { 
          this.props.listings.map(listing => (
            <ListingIndexItem key={lisitng.id} listing={listing} />
          ))
        }
      </div>
    );
  }
}

export default LiveFeed;