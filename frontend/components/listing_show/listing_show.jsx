import React from 'react';

class ListingShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <h1>this.props.listing._id</h1>
      </div>
    );    
  }
}

export default ListingShow;