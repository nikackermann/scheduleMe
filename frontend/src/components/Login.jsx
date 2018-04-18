import React, { Component } from 'react';
import logo from '../images/schoolits-logo.png';

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
                    <button className="button is-primary is-fullwidth">
                      <span class="icon is-medium">
                        <i class="fab fa-google" />
                      </span>
                      <span>Login with Google</span>
                    </button>
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
