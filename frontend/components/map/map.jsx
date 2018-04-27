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
    console.log(this.props.listings);
		// wrap the mapDOMNode in a Google Map
		this.map = new google.maps.Map(this.mapNode, mapOptions);
		const marker = new google.maps.Marker({
			position: { lat: latitude, lng: longitude },
			map: this.map,
		});
	}

  createNewMarker (lat, lng) {
    return new google.maps.Marker({
      position: { lat, lng },
      map: null
    });
  }

  addListingToMap (listing) {
    if (listing === null) return;
    console.log('adding listing to map');
    console.log(listing);
  }

  componentWillReceiveProps(nextProps) {
    console.log('receiving new props');
    console.log(nextProps);

    console.log(Object.values(nextProps.listings));
    Object.values(nextProps.listings).forEach(listing => {
      this.addListingToMap(listing);
    });
  }

	render() {
		return <div className="google-map" ref={map => (this.mapNode = map)} />;
	}
}

export default Map;
