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

	createNewMarker(lat, lng, map, imageUrl, marker) {

		const categoryMarkers = {
			"food": "https://image.freepik.com/free-icon/restaurant-cutlery-circular-symbol-of-a-spoon-and-a-fork-in-a-circle_318-61086.jpg",
			"survival": "http://www.netanimations.net/Animated-jumping-red-exclamation-point-picture.gif",
			"furniture": "http://www.netanimations.net/Animated-jumping-red-exclamation-point-picture.gif",
			"misc": "http://www.netanimations.net/Animated-jumping-red-exclamation-point-picture.gif",
			"clothing": "http://www.netanimations.net/Animated-jumping-red-exclamation-point-picture.gif",
			"toys": "http://www.netanimations.net/Animated-jumping-red-exclamation-point-picture.gif",
			"media": "http://www.netanimations.net/Animated-jumping-red-exclamation-point-picture.gif",
			"survival": "http://www.netanimations.net/Animated-jumping-red-exclamation-point-picture.gif",
		}

		return new google.maps.Marker({
			position: { lat, lng },
			map,
			icon: {
				url: categoryMarkers[marker],
				scaledSize: new google.maps.Size(20, 60),
				origin: new google.maps.Point(0, 0),
			},
		});
	}

	addListingToMap(listing) {
		if (listing === null) return;
		const marker = this.createNewMarker(
			listing.latitude,
			listing.longitude,
			this.map,
			listing.imageUrl,
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
