const express = require('express');
const mysql = require('mysql');
const config = require('./auth/config.json');

// User authentication imports
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./auth/keys');

// Database connection
const connection = mysql.createConnection({
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database
});

// Create connection to database
connection.connect(error => {
  if (error) {
    throw error;
  }
  console.log('Mysql connection successful!');
});

// Create new express app
const app = express();
app.use(bodyParser.json());

// tells passport to use GoogleStrategy
// strategy in our program.
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      console.log('access token', accessToken);
      console.log('refresh token', refreshToken);
      console.log('profile', profile);
    }
  )
);

app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

app.get('/auth/google/callback', passport.authenticate('google'));

/// API Routes ///

// get user
app.get('/users/:userId', (req, res) => {
  let sql = ``;
});

// create schedule
app.get('/users/:userId/createSchedule', (req, res) => {

});

// add completed course
app.get('/users/:userId/addCourse/:courseId', (req, res) => {

});

// check underlying environment
// use provided port based on env.
const PORT = process.env.PORT || 5000;

app.listen(PORT);
