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
		this.state = {
			markers: {},
		};
	}

	createNewMarker(lat, lng, map, marker) {

		const categoryMarkers = {
			"food": {icon: '<span class="map-icon map-icon-restaurant"></span>', color: '#0E77E9' },
			"furniture": {icon: '<span class="map-icon map-icon-furniture-store"></span>', color: '#7C238C'} ,
			"misc": {icon: '<span class="map-icon map-icon-search"></span>', color: '#7C72A0'},
			"clothing": {icon: '<span class="map-icon map-icon-clothing-store"></span>', color: '#DDFBD2'} ,
			"toys": {icon: '<span class="map-icon map-icon-amusement-park"></span>', color: '#6B7FD7'} ,
			"media": {icon: '<span class="map-icon map-icon-movie-theater"></span>', color: '#BCEDF6'} ,
			"survival": {icon: '<span class="map-icon map-icon-doctor"></span>', color: '#FCCA46' } ,
		};

		return new mapIcons.Marker({
			position: { lat, lng },
			map,
			icon: {
				path: mapIcons.shapes.MAP_PIN,
				fillColor: categoryMarkers[marker].color,
				fillOpacity: 1,
				strokeColor: '',
				strokeWeight: 0,
				scale: 4/5
			},
			map_icon_label: categoryMarkers[marker].icon
		});
	}

	addListingToMap(listing) {
		if (listing === null) return;
		const marker = this.createNewMarker(
			listing.latitude,
			listing.longitude,
			this.map,
			listing.marker,
		);
		this.setState({
			markers: {
				[listing._id]: marker,
			},
		});
	}

	componentWillReceiveProps(nextProps) {
		Object.values(nextProps.listings).forEach(listing => {
			this.addListingToMap(listing);
		});
	}

	render() {
		console.log("hello")
		console.log(this.props)
		return <div className="google-map" ref={map => (this.mapNode = map)} />;
	}
}

export default Map;
