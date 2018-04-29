import React from "react";
import { merge } from "lodash";

class Map extends React.Component {
	componentDidMount() {
		const latitude = parseFloat(37.7867);
		const longitude = parseFloat(-122.4);
		// set the map to show SF
		const mapOptions = {
			center: { lat: latitude, lng: longitude }, // this is SF
			zoom: 13,
			styles: [
				{
					featureType: "administrative",
					elementType: "labels.text.fill",
					stylers: [
						{
							lightness: "-23",
						},
						{
							saturation: "100",
						},
						{
							weight: "8.21",
						},
						{
							color: "#f0730e",
						},
					],
				},
				{
					featureType: "administrative",
					elementType: "labels.text.stroke",
					stylers: [
						{
							weight: "3.67",
						},
						{
							saturation: "64",
						},
						{
							lightness: "100",
						},
						{
							visibility: "on",
						},
						{
							gamma: "1.60",
						},
						{
							color: "#ffffff",
						},
					],
				},
				{
					featureType: "landscape",
					elementType: "all",
					stylers: [
						{
							lightness: "70",
						},
						{
							saturation: "-4",
						},
					],
				},
				{
					featureType: "landscape",
					elementType: "labels",
					stylers: [
						{
							visibility: "off",
						},
					],
				},
				{
					featureType: "landscape.man_made",
					elementType: "all",
					stylers: [
						{
							visibility: "on",
						},
						{
							color: "#d3d3d3",
						},
						{
							lightness: "60",
						},
						{
							saturation: "0",
						},
						{
							gamma: "2.00",
						},
					],
				},
				{
					featureType: "poi.medical",
					elementType: "geometry.fill",
					stylers: [
						{
							saturation: "80",
						},
					],
				},
				{
					featureType: "poi.park",
					elementType: "geometry.fill",
					stylers: [
						{
							color: "#c8e354",
						},
					],
				},
				{
					featureType: "road.arterial",
					elementType: "geometry.fill",
					stylers: [
						{
							hue: "#ff9700",
						},
						{
							saturation: "43",
						},
						{
							lightness: "-10",
						},
					],
				},
				{
					featureType: "transit",
					elementType: "labels.text.fill",
					stylers: [
						{
							color: "#0025bc",
						},
					],
				},
				{
					featureType: "transit",
					elementType: "labels.text.stroke",
					stylers: [
						{
							weight: "5",
						},
						{
							gamma: "1.85",
						},
						{
							color: "#ffffff",
						},
					],
				},
				{
					featureType: "water",
					elementType: "geometry",
					stylers: [
						{
							visibility: "on",
						},
						{
							hue: "#00b3ff",
						},
						{
							saturation: "69",
						},
						{
							lightness: "-38",
						},
					],
				},
				{
					featureType: "water",
					elementType: "labels.text.fill",
					stylers: [
						{
							lightness: "-97",
						},
						{
							saturation: "93",
						},
					],
				},
				{
					featureType: "water",
					elementType: "labels.text.stroke",
					stylers: [
						{
							weight: "3.5",
						},
						{
							lightness: "100",
						},
						{
							saturation: "0",
						},
						{
							gamma: "1.02",
						},
						{
							visibility: "on",
						},
						{
							color: "#ffffff",
						},
					],
				},
			],
		};
		// wrap the mapDOMNode in a Google Map
		this.map = new google.maps.Map(this.mapNode, mapOptions);
		this.state = {
			markers: {},
			currentListing: null,
		};
		this.addListingToMap = this.addListingToMap.bind(this);
		this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
	}

	createNewMarker(lat, lng, map, marker, id) {
		const categoryMarkers = {
			food: {
				icon: `<span id="label-for-listing-${id}" class="map-icon map-icon-restaurant"></span>`,
				color: "#0E77E9",
			},
			furniture: {
				icon: `<span id="label-for-listing-${id}" class="map-icon map-icon-furniture-store"></span>`,
				color: "#7C238C",
			},
			misc: {
				icon: `<span id="label-for-listing-${id}" class="map-icon map-icon-search"></span>`,
				color: "#502274",
			},
			clothing: {
				icon: `<span id="label-for-listing-${id}" class="map-icon map-icon-clothing-store"></span>`,
				color: "#DDFBD2",
			},
			toys: {
				icon: `<span id="label-for-listing-${id}" class="map-icon map-icon-amusement-park"></span>`,
				color: "#E57A44",
			},
			media: {
				icon: `<span id="label-for-listing-${id}" class="map-icon map-icon-movie-theater"></span>`,
				color: "#DE639A",
			},
			survival: {
				icon: `<span id="label-for-listing-${id}" class="map-icon map-icon-doctor"></span>`,
				color: "#F45B69",
			},
		};

		return new mapIcons.Marker({
			position: { lat, lng },
			map,
			icon: {
				path: mapIcons.shapes.MAP_PIN,
				fillColor: categoryMarkers[marker].color,
				fillOpacity: 1,
				strokeColor: "",
				strokeWeight: 0,
				scale: 9 / 10,
			},
			map_icon_label: categoryMarkers[marker].icon,
		});
	}

	addListingToMap(listing) {

		if (listing === null) return;
		const marker = this.createNewMarker(
			listing.latitude,
			listing.longitude,
			this.map,
			listing.marker,
			listing._id
		);

		this.setState(prevState => {
			const currentMarkers = prevState === null ? {} : prevState.markers;
			const combinedMarkers = merge({}, currentMarkers, {
				[listing._id]: marker,
			});

			return { markers: combinedMarkers };
		});
	}

	componentWillReceiveProps(nextProps) {
		Object.values(nextProps.listings).forEach(listing => {
			if (this.state === null || this.state.markers[listing._id] === undefined) {
				this.addListingToMap(listing);
			}
		});

		if (
			this.state !== null &&
			nextProps.currentListing !== this.state.currentListing
		) {
			const currentListing = this.state.currentListing;
			if (currentListing !== undefined && currentListing !== null) {
				const iconToSmallify = this.state.markers[currentListing].icon;
				iconToSmallify.scale = 0.9;
				this.state.markers[currentListing].setIcon(iconToSmallify);

				const query = `#label-for-listing-${currentListing}`;
				const markerLabel = document.querySelector(query);
				markerLabel.classList.remove("larger-map-icon");
			}

			const nextListing = nextProps.currentListing;
			if (nextListing !== null) {
				const iconToEnlarge = this.state.markers[nextListing].icon;
				iconToEnlarge.scale = 1.35;
				this.state.markers[nextListing].setIcon(iconToEnlarge);

				const query = `#label-for-listing-${nextListing}`;
				const markerLabel = document.querySelector(query);
				markerLabel.classList.add("larger-map-icon");
			}
			this.setState({
				currentListing: nextListing,
			});
		}
		if (
			this.state !== null &&
			nextProps.currentListing !== this.state.currentListing
		) {
			const currentListing = this.state.currentListing;

			if (currentListing !== undefined && currentListing !== null) {
				const iconToSmallify = this.state.markers[currentListing].icon;
				iconToSmallify.scale = 0.9;
				this.state.markers[currentListing].setIcon(iconToSmallify);
			}
			const nextListing = nextProps.currentListing;
			if (nextListing !== null) {
				const iconToEnlarge = this.state.markers[nextListing].icon;
				iconToEnlarge.scale = 1.35;
				this.state.markers[nextListing].setIcon(iconToEnlarge);
			}
			this.setState({
				currentListing: nextListing,
			});
		}
	}

	render() {
		return <div className="google-map" ref={map => (this.mapNode = map)} />;
	}
}

export default Map;
