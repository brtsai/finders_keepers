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
import * as actions from '../actions';

class App extends Component {

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
