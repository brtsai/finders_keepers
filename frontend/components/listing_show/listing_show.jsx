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
          <div className="list-show-line"></div>
          <img className="listing-show-img" src={this.props.clickedListing.imageUrl}/>
          <div className="list-show-line"></div>
          <p className="listing-show-description">{this.props.clickedListing.description}</p>
          <button onClick={this.props.closeListingShowModal} className="list-show-close-button">X</button>
        </div>
    );    
  }
}

export default ListingShow;