import React from "react";

class Map extends React.Component {
	componentDidMount() {
		const latitude = parseFloat(37.7867);
		const longitude = parseFloat(-122.4);
		// set the map to show SF
		const mapOptions = {
			center: { lat: latitude, lng: longitude }, // this is SF
			zoom: 13,
		};
		// wrap the mapDOMNode in a Google Map
		this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.state = ({
      markers: {}
    });
	}

  createNewMarker (lat, lng, map) {
    return new google.maps.Marker({
      position: { lat, lng },
      map: map
    });
  }

  addListingToMap (listing) {
    if (listing === null) return;
    const marker = this.createNewMarker(listing.latitude, listing.longitude, this.map);
    this.setState({
      markers: {
        [listing._id]: marker
      }
    });
  }

  componentWillReceiveProps(nextProps) {
    Object.values(nextProps.listings).forEach(listing => {
      this.addListingToMap(listing);
    });
  }

	render() {
		return <div className="google-map" ref={map => (this.mapNode = map)} />;
	}
}

export default Map;
