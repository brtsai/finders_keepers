import React from 'react';

class ListingShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    console.log(this.props);
    return (
        <div className="listing-show">
          <h1 className="listing-show-title">{this.props.clickedListing.title}</h1>
          <img className="listing-show-img" src={this.props.clickedListing.imageUrl}/>
          <p className="listing-show-description">{this.props.clickedListing.description}</p>
        </div>
    );    
  }
}

export default ListingShow;