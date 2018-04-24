import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter,
  BrowserRouter
} from 'react-router-dom';

import Navbar from './navbar/navbar_container';

const App = () => (
  <div>
    Hello World

    <BrowserRouter>
    	<div>
    		<Route path='/' component={Navbar} />
    	</div>
    </BrowserRouter>
  </div>
);

export default App;
