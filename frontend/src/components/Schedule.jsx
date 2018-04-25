import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import courses from './courses';

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

// import Card from './Card';

class Schedule extends Component {
  render() {
    return (
      <div class="container is-fluid">
        {/* Time-slot #1 i.e 8:00AM */}
        {/* <div className="columns is-centered">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div> */}
        <BigCalendar
          events={courses}
          view="week"
          views={['week']}
          toolbar={false}
          step={15}
          min={new Date(2018, 4, 20, 7, 0)}
          max={new Date(2018, 4, 20, 18, 0)}
          defaultDate={new Date(2018, 4, 21)}
          eventPropGetter={(event, start, end, isSelected) => {
            let newStyle = {
              backgroundColor: '#16CFB3',
              color: 'white',
              borderRadius: '3px',
              border: 'none'
            };

            if (event.isMine) {
              newStyle.backgroundColor = 'lightgreen';
            }

            return { className: '', style: newStyle };
          }}
        />
      </div>
    );
  }
}

export default Schedule;
