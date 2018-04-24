import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import Navbar from './navbar/navbar_container';
import Map from './map/map';

const App = () => (
  <div>
    Hello World
    <Navbar />
    <Map />
  </div>
);

export default App;
