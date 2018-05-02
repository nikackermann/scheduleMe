import React, { Component } from 'react';
const Profile = () => (
  <div className="container">
    <h1 className="title has-text-weight-light">
      Hello, <span className="">'Name here!'</span>
    </h1>

    <div className="tile is-ancestor">
      <div className="tile is-4 is-vertical is-parent">
        <div className="tile is-child box">
          <p className="title is-4">Major</p>
          <p>Bachelors Degree Program</p>
          <p>School of the Arts & Sciences</p>
          <p>Computer Science (CS-General)</p>
        </div>
        <div className="tile is-child box">
          <p className="title is-4">Progress</p>
          <p>
            <p>Estimated Progress Towards Graduation</p>
            <br/>
            <progress className="progress is-primary" value="15" max="100">30%</progress>
          </p>
        </div>
        <div className="tile is-child box">
          <p className="title is-4">Preferences</p>
          <p>
            <div class="dropdown is-hoverable">
              <div class="dropdown-trigger">
                <button
                  class="button"
                  aria-haspopup="true"
                  aria-controls="dropdown-menu">
                  <span>Professors</span>
                </button>
              </div>

              <div class="dropdown-menu" id="dropdown-menu" role="menu">
                <div class="dropdown-content">
                  <a href="#" class="dropdown-item">Dr. Lancor</a>
                  <a class="dropdown-item">Dr. Antonios</a>
                </div>
              </div>
            </div>

            <div class="dropdown is-hoverable">
              <div class="dropdown-trigger">
                <button
                  class="button"
                  aria-haspopup="true"
                  aria-controls="dropdown-menu">
                  <span>Times</span>
                </button>
              </div>
              <div class="dropdown-menu" id="dropdown-menu" role="menu">
                <div class="dropdown-content">
                  <a href="#" class="dropdown-item">Morning</a>
                  <a class="dropdown-item">Afternoon</a>
                </div>
              </div>
            </div>

            <div class="dropdown is-hoverable">
              <div class="dropdown-trigger">
                <button
                  class="button"
                  aria-haspopup="true"
                  aria-controls="dropdown-menu">
                  <span>Days</span>
                </button>
              </div>

              <div class="dropdown-menu" id="dropdown-menu" role="menu">
                <div class="dropdown-content">
                  <a href="#" class="dropdown-item">Monday</a>
                  <a class="dropdown-item">Wednesday</a>
                  <a class="dropdown-item">Friday</a>
                </div>
              </div>
            </div>
            </p>
      </div>
      <div className="tile is-child box">
          <p className="title is-4">Completed Courses</p>
          <p>
            <div class="dropdown is-hoverable">
              <div class="dropdown-trigger">
                <button
                  class="button"
                  aria-haspopup="true"
                  aria-controls="dropdown-menu"
                >
                  <span>Computer Science</span>
                </button>
              </div>
              <div class="dropdown-menu" id="dropdown-menu" role="menu">
                <div class="dropdown-content">
                  <a href="#" class="dropdown-item">
                    CSC 207
                  </a>
                  <a class="dropdown-item">CSC 212</a>
                </div>
              </div>
            </div>

            <div class="dropdown is-hoverable">
              <div class="dropdown-trigger">
                <button
                  class="button"
                  aria-haspopup="true"
                  aria-controls="dropdown-menu"
                >
                  <span>Mathematics</span>
                </button>
              </div>
              <div class="dropdown-menu" id="dropdown-menu" role="menu">
                <div class="dropdown-content">
                  <a href="#" class="dropdown-item">
                    MAT 178
                  </a>
                  <a class="dropdown-item">MAT 139</a>
                </div>
              </div>
            </div>

            <div class="dropdown is-hoverable">
              <div class="dropdown-trigger">
                <button
                  class="button"
                  aria-haspopup="true"
                  aria-controls="dropdown-menu">
                  <span>Physics</span>
                </button>
              </div>

              <div class="dropdown-menu" id="dropdown-menu" role="menu">
                <div class="dropdown-content">
                  <a href="#" class="dropdown-item">PHY 200{' '}</a>
                  <a class="dropdown-item">PHY 201</a>
                  <a class="dropdown-item">PHY 230</a>
                </div>
              </div>
            </div>
          </p>
      </div>
    </div>

      <div className="tile is-6 is-parent">
        <div className="tile is-child box">
          <p className="title is-4">Let's talk about you</p>
          <p>
            In order to maximize the potential for the best fitting schedule, we
            need to know a little bit more about your preferences.{' '}
          </p> <br></br>

          <div class="columns">
            <div class="column">
                <div class="field">
                  <label class="label">Time Availability</label>
                  <label class="checkbox"><input type="checkbox"/>Morning</label><br></br>
                  <label class="checkbox"><input type="checkbox"/>Afternoon</label><br></br>
                  <label class="checkbox"><input type="checkbox"/>Evening</label><br></br>
                </div>

              <div class="field">
                <label class="label">Day Availiability</label>
                <label class="checkbox"><input type="checkbox"/>Monday</label><br></br>
                <label class="checkbox"><input type="checkbox"/>Tuesday</label><br></br>
                <label class="checkbox"><input type="checkbox"/>Wednesday</label><br></br>
                <label class="checkbox"><input type="checkbox"/>Thursday</label><br></br>
                <label class="checkbox"><input type="checkbox"/>Friday</label><br></br>
                <label class="checkbox"><input type="checkbox"/>Saturday</label>
              </div>
            </div>

            <div class="column">
              <div class="column2">
              <div class="field">
              <label class="label">Preferred Professors(optional)</label>
              <div class="control">
                <input class="input" type="text" placeholder="i.e. John Doe" />
              </div>
              <p class="help">Professor you would like to take again</p>
              </div>

              <div class="field">
                <label class="label">Courses Taken</label>
                <div class="control">
                  <input class="input" type="text" placeholder="i.e. CSC 424" />
                </div>
                <p class="help">Courses already taken</p>
              </div>
            </div>
          </div>
        </div>

          
          <div class="field is-grouped">
            <p class="control">
              <a class="button is-primary">Submit</a>
            </p>
            <p class="control">
              <a class="button is-light">Cancel</a>
            </p>
          </div> 

        </div>
      </div>
      </div>
  </div>
);

export default Profile;
