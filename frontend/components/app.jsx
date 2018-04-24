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

import Map from './map/map';

const App = () => (
  <div className ="app">
    <Map />
    <Navbar />
  </div>
);

import * as actions from '../actions';

export default connect(null, actions)(App);
