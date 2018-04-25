const express = require('express');
const mysql = require('mysql');
// importing config database data
const config = require('./auth/config.json');

// User authentication imports
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./auth/keys');
const bodyParser = require('body-parser');

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
app.get('/users/:email', (req, res) => {
  let sql = ``;
});

// create schedule
app.get('/users/:userId/createSchedule', (req, res) => {

});

// test PUT add completed course
app.get('/addCompletedCourse/:studentId/:course', (request, response) => {
  // get completed course from request params.
  let completedCourse = request.params.course;
  let studentId = request.params.studentId;
  // respond with completed course: http://localhost:5000/addCompletedCourse/acc200
  response.send(completedCourse);
  // created variable with insert sql statement
  let insertSql = `INSERT INTO completed_courses (student_id, short_name) VALUES('${studentId}', '${completedCourse}')`;
  // make sql query
  let query = connection.query(insertSql, (error, result) => {
    if (error) throw error;
    console.log(result);
  });
});

app.get('/getCompletedCourses/:studentId', (request, result) => {
  let student_id = request.params.studentId;
  let info = `SELECT * FROM completed_courses WHERE student_id = '${student_id}'`;
  result.send(student_id);
  connection.query(info, (error, result) => {
    if(error) throw error;
    const data = result.map(shortName => shortName.short_name);
    console.log(data);
  });

});

app.get('/getCourses', (request, result) => {
  let get_courses = `SELECT DISTINCT short_name FROM courses`;
  connection.query(get_courses, (error, result) => {
    if(error) throw error;
    console.log(result);
  });
});


// check underlying environment
// use provided port based on env.
const PORT = process.env.PORT || 5000;
console.log(PORT);
app.listen(PORT);
