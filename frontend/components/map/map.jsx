import React from 'react';

class Map extends React.Component {
  componentDidMount() {
    const latitude = parseFloat(37.7867);
    const longitude = parseFloat(-122.4);
    // set the map to show SF
    const mapOptions = {
      center: { lat: latitude, lng: longitude }, // this is SF
      zoom: 13
    };

    // wrap the mapDOMNode in a Google Map
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    
    const marker = new google.maps.Marker({
      position: { lat: latitude, lng: longitude },
      map: this.map
    });
  }

  render () {
    return (
        <div className="google-map" ref={ map => this.mapNode = map }></div>
    );
  }
}

export default Map;
