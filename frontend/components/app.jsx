import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter,
  BrowserRouter
} from 'react-router-dom';

import Navbar from './navbar/navbar_container';
<<<<<<< HEAD
import Map from './map/map';

const App = () => (
  <div className ="app">
    <Map />
    <Navbar />
  </div>
);
=======
import * as actions from '../actions';

class App extends Component {
>>>>>>> google_button

	componentDidMount() {
		this.props.fetchUser();
	}

	render() {
		return(
			<div>
	    		Hello World
			    <Navbar />
		  	</div>
		);
	}
};

export default connect(null, actions)(App);
