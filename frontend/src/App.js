import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import './css/main.css';

import Navigation from './components/Navigation';
import Schedule from './components/Schedule';
import Login from './components/Login';
import Profile from './components/Profile';

// we split the app into containers to hide the navigation bar
// for the login portion of the application.
const LoginContainer = () => (
  <div>
    <Route exact path="/" render={() => <Login />} />
  </div>
);

// this portion has the Navigation component so when you
// access a route that is contained in the AppContainer
// function it will render the component with the navigation.
const AppContainer = () => (
  <div>
    <Navigation />
    <Route path="/profile" render={() => <Profile />} />
    <Route path="/schedule" render={() => <Schedule />} />
  </div>
);

class App extends Component {
  render() {
    return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => LoginContainer()} />
        <Route render={() => AppContainer()} />
      </Switch>
    </BrowserRouter>
    );
  }
}

export default App;
