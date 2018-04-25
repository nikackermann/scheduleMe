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
          <span>Bachelors Degree Program</span><br></br>
          <span>School of the Arts & Sciences</span><br></br>
          <span>Computer Science (CS-General)</span>
        </div>
        <div className="tile is-child box">
          <p className="title is-4">Progress</p>
          <p>
            <p>Estimated Progress Towards Graduation</p><br></br>
            <progress className="progress is-primary" value="15" max="100">
              30%
            </progress>
          </p>
        </div>
      
 
    <div className="tile is-child box">
      <p className="title is-4">Preferences</p>
      <p>
        <div class="dropdown is-hoverable">
          <div class="dropdown-trigger">
            <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
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
            <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
              <span>Times</span>
            </button>
          </div>
          <div class="dropdown-menu" id="dropdown-menu" role="menu">
          <div class="dropdown-content">
            <a href="#" class="dropdown-item">5:00pm-7:00pm</a>
            <a class="dropdown-item">4:45pm-6:00pm</a>
          </div>
          </div>
        </div>

        <div class="dropdown is-hoverable">
          <div class="dropdown-trigger">
            <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
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
            <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
              <span>Computer Science</span>
            </button>
          </div>
          <div class="dropdown-menu" id="dropdown-menu" role="menu">
          <div class="dropdown-content">
            <a href="#" class="dropdown-item">CSC 207</a>
            <a class="dropdown-item">CSC 212</a>
          </div>
          </div>
        </div>

        <div class="dropdown is-hoverable">
          <div class="dropdown-trigger">
            <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
              <span>Mathematics</span>
            </button>
          </div>
          <div class="dropdown-menu" id="dropdown-menu" role="menu">
          <div class="dropdown-content">
            <a href="#" class="dropdown-item">MAT 178</a>
            <a class="dropdown-item">MAT 139</a>
          </div>
          </div>
        </div>

        <div class="dropdown is-hoverable">
          <div class="dropdown-trigger">
            <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
              <span>Physics</span>
            </button>
          </div>
          <div class="dropdown-menu" id="dropdown-menu" role="menu">
          <div class="dropdown-content">
            <a href="#" class="dropdown-item">PHY 200 </a>
            <a class="dropdown-item">PHY 201</a>
            <a class="dropdown-item">PHY 230</a>
          </div>
          </div>
        </div>


      </p>
    </div>


    </div>

    <div className="tile is-parent">
      <div className="tile is-child box">
        <p className="title is-4">Let's talk about you</p>
        <p>In order to maximize the potential for the best fitting schedule, we need to know a little bit more about your preferences. </p>
 
        <div class="field">
          <label class="label">Preferred Professors</label>
          <div class="control">
            <input class="input is-primary" type="text" placeholder="i.e. John Doe"/></div>
           <p class="help">Professor you would like to take again</p>
        </div> 

        <div class="field">
          <label class="label">Professors to Avoid</label>
          <div class="control">
            <input class="input is-primary" type="text" placeholder="i.e. John Doe"/></div>
           <p class="help">Professor you would not like to take again</p>
          </div>

          <div class="field">
          <label class="label">Availablility</label>
          <div class="control">
            <input class="input is-primary" type="text" placeholder="i.e. 5:00pm-7:00pm"/></div>
           <p class="help">Class times you can attend</p>
          </div>

          <div class="field">
          <label class="label">Preferred Day</label>
          <div class="control">
            <input class="input is-primary" type="text" placeholder="i.e. Monday"/></div>
           <p class="help">Class days you can attend</p>
          </div>

          <div class="field">
          <label class="label">Courses Taken</label>
          <div class="control">
            <input class="input is-primary" type="text" placeholder="i.e. CSC 424"/></div>
           <p class="help">Courses already taken</p>
          </div>
            <div className="control">
              <button className="button is-primary">Submit</button>
            </div>
        </div>
      </div>
    </div>
  </div>


);


export default Profile;
