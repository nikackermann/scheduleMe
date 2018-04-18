import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router';

import './css/main.css';

import Navigation from './components/Navigation';
import Schedule from './components/Schedule';
import Login from './components/Login';

class App extends Component {
  render() {
    return (
      <div>
        <Login />
        {/* <Navigation />
        <Schedule /> */}
      </div>
    );
  }
}

export default App;
