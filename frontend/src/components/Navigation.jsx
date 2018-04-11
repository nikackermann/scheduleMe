import React from 'react';
import logo from '../images/schoolits-logo.png';

const Navigation = () => (
  <nav
    className="navbar"
    role="navigation"
    aria-label="main navigation"
    style={{ marginBottom: '1em' }}
  >
    <div className="navbar-brand">
      <a className="navbar-item">
        <img src={logo} alt="" width="" height="" />
      </a>
      <a className="navbar-item">Profile</a>
      <a className="navbar-item">Schedule</a>
    </div>
    <div class="navbar-end">
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          {/* Prop with username to load username on login */}
          Nik Ackermann
        </a>

        <div class="navbar-dropdown is-right">
          <a class="navbar-item">
            {/* Link to settings component for user customization */}
            Settings
          </a>
          <hr class="navbar-divider" />
          <a className="navbar-item">
            Logout
          </a>
        </div>
      </div>
    </div>  
  </nav>
);

export default Navigation;
