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
                <img src={logo} className="login-logo" style={{ marginBottom: ".4em"}}/>
                <div className="field">
                  <div className="control">
                    <input className="input" type="text" placeholder="Email" />
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <button className="button is-primary is-fullwidth">
                      Log-in
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
