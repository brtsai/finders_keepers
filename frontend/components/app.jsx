import React, { Component } from "react";
import { Provider, connect } from "react-redux";
import { Route, Redirect, Switch, Link, BrowserRouter } from "react-router-dom";
import Slide from "react-reveal/Slide";

import { ProtectedRoute } from "./util/route_util";
import AddFreebieFormContainer from "./forms/add_freebie_form_container";

import Navbar from "./navbar/navbar_container";
import Map from "./map/map";
import { fetchUser } from "../util/user_api_util";
import LiveFeed from "./live_feed/live_feed_container";

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.fetchUser();
	}

	render() {
		return (
			<div className="app">
				<Map />
				<Navbar />

				<Slide right>
					<LiveFeed />
				</Slide>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	fetchUser: () => dispatch(fetchUser()),
});

export default connect(null, mapDispatchToProps)(App);
