import React, { Component } from 'react';

const Profile = () => (
  <div class="container">
    <h1 class="title has-text-weight-light">
      Hello, <span className="">'Name here!'</span>
    </h1>
    {/*Profile Tab*/}
    <div class="tile is-ancestor">
      <div class="tile is-4 is-vertical is-parent">
        <div class="tile is-child box">
          <p class="title is-4">Major</p>
          <span>Computer Science (CS-General)</span>C
        </div>
        <div class="tile is-child box">
          <p class="title is-4">Progress</p>
          <p>
            <p>Estimated Progress</p>
            <progress class="progress is-primary" value="15" max="100">
              30%
            </progress>
          </p>
        </div>
      </div>
      <div class="tile is-parent">
        <div class="tile is-child box">
          <p class="title is-4">Completed Courses</p>
          <p>Courses you've taken will appear here.</p>
        </div>
      </div>
    </div>

    {/*Preferences Tab*/}
    <div class="tile is-ancestor">
      <div class="tile is-4 is-vertical is-parent">
        <div class="tile is-child box">
          <p class="title is-4">Major</p>
          <p>Computer Science (CS-General)</p>
        </div>
        <div class="tile is-child box">
          <p class="title is-4">Progress</p>
          <p>
            <p>Estimated Progress</p>
            <progress class="progress is-primary" value="15" max="100">
              30%
            </progress>
          </p>
        </div>
      </div>
      <div class="tile is-parent">
        <div class="tile is-child box">
          <p class="title is-4">Let's talk about you</p>
          <p>Here are your preferred times and teachers</p>
        </div>
      </div>
    </div>

    {/*Edit Profile Tab*/}
    <div class="tile is-ancestor">
      <div class="tile is-4 is-vertical is-parent">
        <div class="tile is-child box">
          <p class="title is-4">Major</p>
          <p>Computer Science (CS-General)</p>
        </div>
        <div class="tile is-child box">
          <p class="title is-4">Progress</p>
          <p>
            <p>Estimated Progress</p>
            <progress class="progress is-primary" value="15" max="100">
              30%
            </progress>
          </p>
        </div>
      </div>
      <div class="tile is-parent">
        <div class="tile is-child box">
          <p class="title is-4">Edit Completed Courses</p>
          <p>
            <h2>What classes have you taken already?</h2>
            <div class="field">
              <div class="control is-expanded">
                <div class="select is-fullwidth">
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

            <div class="control">
              <button class="button is-primary">Submit</button>
            </div>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Profile;
