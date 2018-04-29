import React from 'react';

class ListingShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="listing-show">
        <h1>hello</h1>
        <p>{this.props.clickedListing._id}</p>
        <img src={this.props.clickedListing.imageUrl}/>
        <p>{this.props.clickedListing.userId}</p>
      </div>
    );    
  }
}

export default ListingShow;