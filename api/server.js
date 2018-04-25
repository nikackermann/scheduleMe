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
app.get('/users/:userId', (req, res) => {
  let sql = ``;
});

// create schedule
app.get('/users/:userId/createSchedule', (req, res) => {

});

// add completed course
app.get('/users/:userId/addCourse/:courseId', (req, res) => {

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

app.get('/getCompletedCourses/:studentId', (req, res) => {
  let student_id = req.params.studentId;
  let info = `SELECT * FROM completed_courses WHERE student_id = '${student_id}'`;
  res.send(student_id);
  connection.query(info, (error, result) => {
    if(error) throw error;
    res.json(result.map(className => className.short_name));
  });

});

app.get('/getCourses', (req, res) => {
  let get_courses = `SELECT DISTINCT short_name FROM courses WHERE short_name LIKE '%j%' `;
  let query = connection.query(get_courses, (error, results) => {
    if(error) throw error;
    console.log(result);
    res.send(result);
  });

});


// check underlying environment
// use provided port based on env.
const PORT = process.env.PORT || 5000;
console.log(PORT);
app.listen(PORT);
