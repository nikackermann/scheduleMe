import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../images/logo.svg';

class Navigation extends Component {
  render() {
    return (
      <nav
        className="navbar"
        role="navigation"
        aria-label="main navigation"
        style={{ marginBottom: '1em' }}
      >
        <div className="navbar-brand">
          <a className="navbar-item">
            <img src={logo} />
          </a>
          <Link to="/profile" className="navbar-item">Profile</Link>
          <Link to="/schedule" className="navbar-item">Schedule</Link>
          <div className="navbar-item">
            <p className="field is-grouped">
              <a class="button is-primary">
                <span>Create</span>
              </a>
            </p>
          </div>
        </div>
        <div class="navbar-end">
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              {/* Prop with username to load username on login */}
              Nik Ackermann
            </a>
            <div class="navbar-dropdown is-right">
              <a className="navbar-item">Logout</a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
