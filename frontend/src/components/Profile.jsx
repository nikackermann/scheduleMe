import React, { Component } from 'react';

const Profile = () => (
  <div className="container">
    <h1 className="title has-text-weight-light">
      Hello, <span className="">'Name here!'</span>
    </h1>
    {/*Profile Tab*/}
    <div className="tile is-ancestor">
      <div className="tile is-4 is-vertical is-parent">
        <div className="tile is-child box">
          <p className="title is-4">Major</p>
          <span>Computer Science (CS-General)</span>
        </div>
        <div className="tile is-child box">
          <p className="title is-4">Progress</p>
          <p>
            <p>Estimated Progress</p>
            <progress className="progress is-primary" value="15" max="100">
              30%
            </progress>
          </p>
        </div>
      </div>
      <div className="tile is-parent">
        <div className="tile is-child box">
          <p className="title is-4">Let's talk about you</p>
          <p>Here are your preferred times and teachers</p>
        </div>
      </div>
    </div>

    {/*Preferences Tab*/}
    <div className="tile is-ancestor">
      <div className="tile is-4 is-vertical is-parent" />
      <div className="tile is-parent">
        <div className="tile is-child box">
          <p className="title is-4">Edit Completed Courses</p>
          <p>
            <h2>What classes have you taken already?</h2>
            <div className="field">
              <div className="control is-expanded">
                <div className="select is-fullwidth">
                  <select name="Course">
                    <option value="CSC">CSC</option>
                    <option value="MAT">MAT</option>
                    <option value="PHY">PHY</option>
                    <option value="ACC">ACC</option>
                    <option value="CHE">CHE</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="control">
              <button className="button is-primary">Submit</button>
            </div>
          </p>
        </div>
      </div>
    </div>

    {/*Edit Profile Tab*/}
    <div className="tile is-ancestor">
      <div className="tile is-4 is-vertical is-parent" />
      <div className="tile is-parent">
        <div className="tile is-child box">
          <p className="title is-4">Completed Courses</p>
          <p>Courses you've taken will appear here.</p>
        </div>
      </div>
    </div>
  </div>
);

export default Profile;
