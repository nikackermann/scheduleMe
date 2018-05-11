import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../images/logo.svg';

class Navigation extends Component {
  render() {
    return (
      <div
        className="navbar"
        role="navigation"
        aria-label="main navigation"
        style={{ marginBottom: '1em' }}
      >
        <div className="navbar-brand">
          <a className="navbar-item">
            <img src={logo} alt=''/>
          </a>
          <Link to="/schedule" className="navbar-item">Schedule</Link>
          <Link to="/profile" className="navbar-item">Profile</Link>
          {/* <div className="navbar-item">
            <p className="field is-grouped">
              <a className="button is-primary">
                <span>Create</span>
              </a>
            </p>
          </div> */}
        </div>
        <div className="navbar-end">
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">
              {/* Prop with username to load username on login */}
              Nik Ackermann
            </a>
            <div className="navbar-dropdown is-right">
              <a className="navbar-item">Logout</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navigation;
