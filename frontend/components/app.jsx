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

const App = () => (
  <div>
    Hello World
    <Navbar />
  </div>
);

export default App;
