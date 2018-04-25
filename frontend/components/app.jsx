import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { Route, Redirect, Switch, Link, BrowserRouter } from 'react-router-dom';
import { ProtectedRoute } from './util/route_util';
import AddFreebieFormContainer from './forms/add_freebie_form_container';

import Navbar from './navbar/navbar_container';
import Map from './map/map';
import { fetchUser } from '../actions/user_api_util';

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
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	fetchUser: () => dispatch(fetchUser()),
});

export default connect(null, mapDispatchToProps)(App);
