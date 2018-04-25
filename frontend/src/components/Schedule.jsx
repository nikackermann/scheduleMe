import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import events from './events';

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

// import Card from './Card';

class Schedule extends Component {
  render() {
    return <div class="container is-fluid">
        {/* Time-slot #1 i.e 8:00AM */}
        {/* <div className="columns is-centered">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div> */}
        <BigCalendar events={events} view="week" views={["week"]} toolbar={false} step={60} showMultiDayTimes />
      </div>;
  }
}

export default Schedule;
