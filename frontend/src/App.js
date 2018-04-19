import React, { Component } from 'react';
import { Router, Route, Switch, BrowserRouter } from 'react-router-dom';

import './css/main.css';

import Navigation from './components/Navigation';
import Schedule from './components/Schedule';
import Login from './components/Login';
import Profile from './components/Profile';

// we split the app into containers to hide the navigation bar
// for the login portion of the application.
const LoginContainer = () => (
  <div>
    <Route exact path="/" component={Login} />
  </div>
);

// this portion has the Navigation component so when you
// access a route that is contained in the AppContainer
// function it will render the component with the navigation.
const AppContainer = () => (
  <div>
    <Navigation />
    <Route path="/profile" component={Profile} />
    <Route path="/schedule" component={Schedule} />
  </div>
);

class App extends Component {
  render() {
    return(
    <BrowserRouter>
      <Switch>
        <div>
          <Route exact path="/" component={LoginContainer} />
          <Route component={AppContainer} />
        </div>
      </Switch>
    </BrowserRouter>
    );
  }
}

export default App;
