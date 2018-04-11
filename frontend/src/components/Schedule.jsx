import React, { Component } from 'react';

import Card from './Card';

class Schedule extends Component {
  render() {
    return (
      <div class="container is-fluid">
        {/* Time-slot #1 i.e 8:00AM */}
        <div className="columns is-centered">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    );
  }
}

export default Schedule;
