import React, { Component } from 'react';

import Card from './Card';

class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
      schedule: [],
      instructor: '',
      times: {},
      completed: []
    };
  }

  componentDidMount() {
    this.fetchSchedule()
      .then(res => this.setState({ courses: res }))
      .catch(err => console.log(err));
    this.fetchCompletedCourses()
      .then(res => this.setState({ completed: res }))
      .catch(err => console.log(err));
    this.fetchPreferredInstructor()
      .then(res => this.setState({ instructor: res }))
      .catch(err => console.log(err));
    this.fetchTimes()
      .then(res => this.setState({ times: res }))
      .catch(err => console.log(err));
  }

  fetchCompletedCourses = async () => {
    const response = await fetch(
      'http://' + window.location.hostname + ':5000/getCompletedCourses/1'
    );
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body.sort();
  };

  fetchTimes = async () => {
    const response = await fetch(
      'http://' + window.location.hostname + ':5000/getTimes/1'
    );
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    let obj = body[0];
    for (let key in obj) {
      if (obj[key] === 1) {
        obj[key] = true;
      } else {
        obj[key] = false;
      }
    }
    console.log(obj);
    return body[0];
  };

  fetchPreferredInstructor = async () => {
    const response = await fetch(
      'http://' + window.location.hostname + ':5000/getPreferredInstructors/1'
    );
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  shuffle = array => {
    let counter = array.length;
    // While there are elements in the array
    while (counter > 0) {
      // Pick a random index
      let index = Math.floor(Math.random() * counter);
      // Decrease counter by 1
      counter--;
      // And swap the last element with it
      let temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
    }
    return array;
  };

  fetchSchedule = async () => {
    const response = await fetch(
      'http://' + window.location.hostname + ':5000/1/createSchedule'
    );
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  createSchedule = () => {
    this.setState({
      schedule: []
    });
    const semester1 = ['CSC 152', 'MAT 112', 'ENG 110', 'INQ 101'];
    const { courses } = this.state;
    for (let i = 0; i < 4; i++) {
      let course = courses.find(course => course.short_name === semester1[i]);

      this.setState(prevState => ({
        schedule: this.shuffle([...prevState.schedule, course])
      }));
    }
  };

  orderSchedule = () => {
    let { schedule } = this.state;

    for (let i = 0; i < schedule.length; i++) {
      if (schedule[i].days === 'MWF') {
      }
    }
  };

  render() {
    const { schedule } = this.state;
    return (
      <div class="container is-fluid">
        <a className="button is-primary" onClick={this.createSchedule}>
          <span>Create</span>
        </a>
        <a
          className="button is-primary is-outlined"
          style={{ marginLeft: '1rem' }}
        >
          <span>Save</span>
        </a>
        {/* Time-slot #1 i.e 8:00AM */}
        <div className="columns is-0 is-centered">
          {/* Monday */}
            {schedule.map(course => (
              <div className="column">
                <Card
                  name={course.long_name}
                  start={course.start_time}
                  end={course.end_time}
                  credits={course.credits}
                  crn={course.crn}
                  days={course.days}
                  instructor={course.instructor}
                />
              </div>
            ))}
          </div>
        </div>
    );
  }
}

export default Schedule;
