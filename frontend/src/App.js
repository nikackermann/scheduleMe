import React, { Component } from 'react';

import Navigation from './components/Navigation';
import Schedule from './components/Schedule';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Schedule />
      </div>
    );
  }
}

export default App;
