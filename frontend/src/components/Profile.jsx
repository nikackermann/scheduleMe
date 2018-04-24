import React, { Component } from 'react';
import 'bulma/sass/components/tabs.sass'

const Profile = () => (
  <div class="container is-fluid">
    <p>
    <div class="container">
      <h1 class="title">
        Hello 'Name Here'!
      </h1>

  <div class="tabs is-boxed">
  <ul>
    <li class="is-active">
      <a>
        <span class="icon is-small"><i class="fas fa-file-alt" aria-hidden="true"></i></span>
        <span>Profile</span>
      </a>
    </li>
    <li>
      <a>
        <span class="icon is-small"><i class="fas fa-file-alt" aria-hidden="true"></i></span>
        <span>Preferences</span>
      </a>
      
    </li>
    <li>
      <a>
        <span class="icon is-small"><i class="far fa-file-alt" aria-hidden="true"></i></span>
        <span>Edit Profile</span>
      </a>
    </li>
  </ul>
</div>
{/*Profile Tab*/}
<section class="section">
  <div class="tile is-ancestor">
    <div class="tile is-4 is-vertical is-parent">
      <div class="tile is-child box">
        <p class="title">Major</p>
           <p>Computer Science (CS-General)</p>
      </div>
        <div class="tile is-child box">
        <p class="title">Progress</p>
          <p>
            <p>Estimated Progress</p>
            <progress class="progress is-primary" value="15" max="100">30%</progress></p>
        </div>
    </div>
      <div class="tile is-parent">
        <div class="tile is-child box">
          <p class="title">Completed Courses</p>
          <p>Courses you've taken will appear here.</p>
        </div>
      </div>
  </div>



{/*Preferences Tab*/}
  <div class="tile is-ancestor">
    <div class="tile is-4 is-vertical is-parent">
      <div class="tile is-child box">
        <p class="title">Major</p>
           <p>Computer Science (CS-General)</p>
      </div>
        <div class="tile is-child box">
          <p class="title">Progress</p>
          <p>
            <p>Estimated Progress</p>
            <progress class="progress is-primary" value="15" max="100">30%</progress>
          </p>
        </div>
      </div>
        <div class="tile is-parent">
          <div class="tile is-child box">
            <p class="title">Let's talk about you</p>
            <p>Here are your preferred times and teachers</p>
          </div>
        </div> 
  </div>


{/*Edit Profile Tab*/}
        <div class="tile is-ancestor">
        <div class="tile is-4 is-vertical is-parent">
        <div class="tile is-child box">
        <p class="title">Major</p>
           <p>Computer Science (CS-General)</p>
      </div>
      <div class="tile is-child box">
        <p class="title">Progress</p>
        <p>
          <p>Estimated Progress</p>
          <progress class="progress is-primary" value="15" max="100">30%</progress>
        </p>
      </div>
    </div>
    <div class="tile is-parent">
      <div class="tile is-child box">
        <p class="title">Edit Completed Courses</p>
          <p><h2>What classes have you taken already?</h2>
          <div class="field has-addons">
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
  <div class="control">
    <button type="submit" class="button is-primary">Choose</button>
  </div>
</div>

          <div class="control">
            <button class="button is-primary">Submit</button>
          </div>
        </p>
      </div>
    </div>
  </div>
</section></div>
</p>
</div>


);

export default Profile;