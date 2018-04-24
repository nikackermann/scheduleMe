import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../images/logo.svg';

const Login = () => (
  <div className="layout-default">
    <div className="hero is-fullheight is-medium is-primary is-bold">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <article className="card">
              <div className="card-content">
                <img
                  src={logo}
                  className="login-logo"
                  style={{ marginBottom: '.4em' }}
                />
                <div className="field">
                  <div className="control">
                    <Link to="/profile">
                    <button className="button is-primary is-fullwidth">
                      <span className="icon is-medium">
                        <i className="fab fa-google" />
                      </span>
                      <span>Login with Google</span>
                    </button>
                  </Link>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Login;
