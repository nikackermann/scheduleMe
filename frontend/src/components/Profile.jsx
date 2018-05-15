import React, { Component } from 'react';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instructors: [],
      courses: [],
      completedCourses: [],
      completedCourse: '',
      error: false,
      courseAddError: '',
      preferredInstructor: '',
      preferredInstructorError: '',
      // ---------------------------
      times: {
        morning: false,
        afternoon: false,
        evening: false,
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        saturday: false
      }
    };
  }

  componentDidMount() {
    this.fetchInstructors()
      .then(res => this.setState({ instructors: res }))
      .catch(err => console.log(err));
    this.fetchCourseShortName()
      .then(res => this.setState({ courses: res }))
      .catch(err => console.log(err));
    this.fetchCompletedCourses()
      .then(res => this.setState({ completedCourses: res }))
      .catch(err => console.log(err));
    this.fetchPreferredInstructor()
      .then(res => this.setState({ preferredInstructor: res }))
      .catch(err => console.log(err));
    this.fetchTimes()
      .then(res => this.setState({ times: res }))
      .catch(err => console.log(err));
  }

  handleSelectInput = e => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      times: {
        ...prevState.times,
        [name]: !this.state.times[`${name}`]
      }
    }));
  };

  fetchTimes = async () => {
    const response = await fetch(
      'http://' + window.location.hostname + ':5000/getTimes/1'
    );
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    let obj = body[0];
    for (let key in obj) {
      if(obj[key] === 1) {
        obj[key] = true;
      } else {
        obj[key] = false;
      }
    }
    console.log(obj);
    return body[0];
  }

  addTimes = async () => {
    const times = {
      ...this.state.times
    };

    console.log(times)

    const settings = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(times)
    };

    const response = await fetch(
      'http://' + window.location.hostname + ':5000/addTimes/1',
      settings
    );
    const data = await response.text();
    console.log(data);
  };

  fetchCompletedCourses = async () => {
    const response = await fetch(
      'http://' + window.location.hostname + ':5000/getCompletedCourses/1'
    );
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body.sort();
  };

  fetchInstructors = async () => {
    const response = await fetch(
      'http://' + window.location.hostname + ':5000/instructors'
    );
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body.sort();
  };

  fetchPreferredInstructor = async () => {
    const response = await fetch(
      'http://' + window.location.hostname + ':5000/getPreferredInstructors/1'
    );
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  addPreferredInstructor = async instructor => {
    this.setState({
      preferredInstructorError: ''
    });
    if (this.state.preferredInstructor.includes(instructor)) {
      this.setState({
        preferredInstructorError: 'Course has been completed'
      });
    } else {
      this.setState(prevState => ({
        preferredInstructor: instructor
      }));
    }
    const profile = {
      ...this.state
    };
    const settings = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ preferredInstructor: instructor })
    };

    const response = await fetch(
      'http://' +
        window.location.hostname +
        ':5000/updatePreferredInstructor/1',
      settings
    );
    const data = await response.text();
    console.log(data);
  };

  fetchCourseShortName = async () => {
    const response = await fetch(
      'http://' + window.location.hostname + ':5000/courses'
    );
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body.sort();
  };

  onSelect = e => {
    this.setState({ completedCourse: e.target.value });
  };

  onSelect2 = e => {
    this.setState({ preferredInstructor: e.target.value });
  };

  addCompletedCourse = async course => {
    this.setState({
      courseAddError: ''
    });
    if (this.state.completedCourses.includes(course)) {
      this.setState({
        courseAddError: 'Course has been completed'
      });
    } else {
      this.setState(prevState => ({
        completedCourses: [...prevState.completedCourses, course]
      }));
    }

    const profile = {
      ...this.state
    };
    const settings = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ completedCourse: course })
    };

    const response = await fetch(
      'http://' + window.location.hostname + ':5000/addCompletedCourse/1/',
      settings
    );
    const data = await response.text();
    console.log(data);
  };

  render() {
    return (
      <div className="container">
        <h1 className="title has-text-weight-light">
          Hello, <span className="">Nik Ackermann</span>
        </h1>

        <div className="tile is-ancestor">
          <div className="tile is-vertical is-parent">
            <div className="tile is-child box">
              <p className="title is-4">Let's talk about you</p>
              <p>
                In order to maximize the potential for the best fitting
                schedule, we need to know a little bit more about your
                preferences.{' '}
              </p>{' '}
              <br />
              <div className="columns">
                <div className="column is-two-fifths">
                  <label className="label">Time Availability</label>
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      name="morning"
                      onChange={this.handleSelectInput}
                      checked={this.state.times.morning}
                    />{' '}
                    Morning
                  </label>
                  <br />
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      name="afternoon"
                      onChange={this.handleSelectInput}
                      checked={this.state.times.afternoon}
                    />{' '}
                    Afternoon
                  </label>
                  <br />
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      name="evening"
                      onChange={this.handleSelectInput}
                      checked={this.state.times.evening}
                    />{' '}
                    Evening
                  </label>
                  <br />
                </div>
                <div className="column2 is-two-fifths">
                  <label className="label">Day Availiability</label>
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      name="monday"
                      onChange={this.handleSelectInput}
                      checked={this.state.times.monday}
                    />{' '}
                    Monday
                  </label>
                  <br />
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      name="tuesday"
                      onChange={this.handleSelectInput}
                      checked={this.state.times.tuesday}
                    />{' '}
                    Tuesday
                  </label>
                  <br />
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      name="wednesday"
                      onChange={this.handleSelectInput}
                      checked={this.state.times.wednesday}
                    />{' '}
                    Wednesday
                  </label>
                  <br />
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      name="thursday"
                      onChange={this.handleSelectInput}
                      checked={this.state.times.thursday}
                    />{' '}
                    Thursday
                  </label>
                  <br />
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      name="friday"
                      onChange={this.handleSelectInput}
                      checked={this.state.times.friday}
                    />{' '}
                    Friday
                  </label>
                  <br />
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      name="saturday"
                      onChange={this.handleSelectInput}
                      checked={this.state.times.saturday}
                    />{' '}
                    Saturday
                  </label>
                </div>
              </div>
              <div className="buttons has-addons">
                <p className="control">
                  <a className="button is-primary" onClick={this.addTimes}>Submit</a>
                </p>
              </div>
            </div>

            <div className="tile is-child box">
              <p className="title is-4">Preferred Professor</p>
              <div className="columns is-1">
                <div className="column">
                  <div className="select is-rounded">
                    <select
                      style={{
                        width: '100 %',
                        maxWidth: '190px'
                      }}
                      onChange={this.onSelect2}
                      value={this.preferredInstructor}
                    >
                      <option>Select a professor</option>
                      {this.state.instructors.map(instructor => (
                        <option key={instructor}>{instructor}</option>
                      ))}
                    </select>
                  </div>
                  <a
                    className="button is-primary"
                    style={{ marginLeft: '1rem' }}
                    onClick={() =>
                      this.addPreferredInstructor(
                        this.state.preferredInstructor
                      )
                    }
                  >
                    Submit
                  </a>
                </div>
              </div>
              <p className="help">Professor you would like to take again</p>
              <span class="tag is-primary">
                {this.state.preferredInstructor}
              </span>
            </div>

            <div className="tile is-child box">
              <p className="title is-4">Completed Courses</p>
              <div className="columns is-1">
                <div className="column">
                  <div className="select is-rounded">
                    <select
                      name="completed-course"
                      onChange={this.onSelect}
                      value={this.completedCourse}
                    >
                      <option>Select a course</option>
                      {this.state.courses.map(course => (
                        <option key={course}>{course}</option>
                      ))}
                    </select>
                  </div>
                  <a
                    className="button is-primary"
                    style={{ marginLeft: '1rem' }}
                    onClick={() =>
                      this.addCompletedCourse(this.state.completedCourse)
                    }
                  >
                    Submit
                  </a>
                  {this.state.courseAddError === '' ? null : (
                    <span
                      className="tag is-danger"
                      style={{ marginLeft: '1rem' }}
                    >
                      {this.state.courseAddError}
                    </span>
                  )}
                </div>
              </div>
              <p className="help">Courses already taken</p>
              <ul>
                {this.state.completedCourses.map(course => (
                  <li key={course}>
                    <span class="tag is-primary">{course}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
