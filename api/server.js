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
app.use(bodyParser.urlencoded({
  extended: true
}));
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

app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

app.get('/auth/google/callback', passport.authenticate('google'));

const semester1 = ['CSC 152', 'MAT 112', 'ENG 110', 'INQ 101'];
// const semester2 = ['CSC 212', 'MAT 122', 'ENG 112', 'SPA 101'];
// const semester3 = ['CSC 207', 'CSC 235', 'MAT 150', 'SPA 200'];
// const semester4 = ['CSC 265', 'CSC 229', 'MAT 178', 'MAT 151'];
// const semester5 = ['CSC 321', 'CSC 324', 'CSC 305', 'PHY 200'];
// const semester6 = ['CSC 330', 'PHY 201']

// let test = (result) => {
//   let list = [];
//   list.push(result);
//   console.log(list)
// }

// create schedule
app.get('/:userId/createSchedule', (req, res) => {
  let studentId = req.params.studentId;
  let sql = `SELECT * FROM courses WHERE short_name IN ('CSC 152', 'MAT 112', 'ENG 110', 'INQ 101')`;
  let query = connection.query(sql, (error, result) => {
    if (error) throw error;
    console.log(result);
    res.send(result);
  })
});


// test PUT add completed course
app.post('/addCompletedCourse/:studentId/', (request, response) => {
  // get completed course from request params.
  let course = request.body.completedCourse;
  let studentId = request.params.studentId;
  // respond with completed course: http://localhost:5000/addCompletedCourse/acc200
  response.send(request.body);
  // created variable with insert sql statement
  let insertSql = `INSERT INTO completed_courses (student_id, short_name) VALUES('${studentId}', '${course}')`;
  // make sql query
  let query = connection.query(insertSql, (error, result) => {
    if (error) throw error;
    console.log(result);
  });
});

app.get('/getTimes/:studentId', (req, res) => {
  let studentId = req.params.studentId;
  let info = `SELECT morning, afternoon, evening, monday, tuesday, wednesday, thursday, friday, saturday FROM student_preferences WHERE student_id = '${studentId}'`;
  let query = connection.query(info, (error, result) => {
    if (error) throw error;
    res.send(result);
  });
})

app.post('/addTimes/:studentId/', (req, res) => {
  let times = req.body;
  let studentId = req.params.studentId;
  console.log(times.morning)
  res.send(times)
  let insertSql = `UPDATE student_preferences SET morning = '${~~req.body.morning}', afternoon = '${~~req.body.afternoon}', evening = '${~~req.body.evening}', monday = '${~~req.body.monday}', tuesday = '${~~req.body.tuesday}', wednesday = '${~~req.body.wednesday}', thursday = '${~~req.body.thursday}', friday = '${~~req.body.friday}', saturday = '${~~req.body.saturday}'  WHERE student_id = '${studentId}'`;
  let query = connection.query(insertSql, (error, result) => {
    if (error) throw error;
    console.log(result);
  });
});

//get completed courses
app.get('/getCompletedCourses/:studentId', (req, res) => {
  let student_id = req.params.studentId;
  let info = `SELECT * FROM completed_courses WHERE student_id = '${student_id}'`;
  let query = connection.query(info, (error, result) => {
    if(error) throw error;
    const data = result.map(shortName => shortName.short_name);
    const newSet = [...new Set(data)]
    res.send(newSet);
  });

});

 // get all courses
app.get('/courses', (req, res) => {
  let get_courses = `SELECT DISTINCT short_name FROM courses`;
  let query = connection.query(get_courses, (error, result) => {
    if(error) throw error;
    let courses = result.map(course => course.short_name);
    res.send(courses);
  });
});

app.get('/instructors', (req, res) => {
  let getInstructors = `SELECT DISTINCT instructor FROM courses`;
  let query = connection.query(getInstructors, (error, result) => {
    if (error) throw error;
    let instructors = result.map(prof => prof.instructor);
    res.send(instructors);
  });
})

//get preferred instructor
app.get('/getPreferredInstructors/:student_id', (req, res) => {
  let student_id = req.params.student_id;
  let instructor = `SELECT instructor FROM student_preferences WHERE student_id = '${student_id}'`;
  connection.query(instructor, (error, result) => {
    if(error) throw error;
    const data = result.map(prof => prof.instructor);
    res.send(data);
  });

});

// //get preferred times
// app.get('/getPreferredTimes/:student_id', (request, result) => {
//   let student_id = request.params.student_id;
//   let times = `SELECT preferred_time FROM student_preferences WHERE student_id = '${student_id}'`;
//   result.send(student_id);
//   connection.query(times, (error, result) => {
//     if(error) throw error;
//     const data = result.map(t => t.preferred_time);
//     console.log(data);
//   });
// });

// UPDATE preferred teacher
//limit one per student
app.post('/updatePreferredInstructor/:studentId/', (req, res) => {
  let instructor = req.body.preferredInstructor;
  console.log(req.body)
  let student_id = 1;
  let insertSql = `UPDATE student_preferences SET instructor = '${instructor}' WHERE student_id = '${student_id}'`;
  // make sql query
  res.send(instructor);
  let query = connection.query('UPDATE student_preferences SET ? WHERE ?', [{ instructor: instructor }, {student_id: student_id }], (error, result) => {
    if (error) throw error;
    console.log(result);
  });
});


// add preferred time of day 
// app.get('/addPreferredTimeOfDay/:studentId/preferences', (request, response) => {
//   let morning = request.params.morning;
//   let afternoon = request.params.afternoon;
//   let evening = request.params.evening;

//   //let preferred_time = request.params.preferred_time;
//   let studentId = request.params.student_id;
//   response.send(preferred_time);
//   let insertSql = `INSERT INTO student_preferences (morning, afternoon, evening) VALUES('${studentId}', '${preferred_time}')`;
//   let query = connection.query(insertSql, (error, result) => {
//     if (error) throw error;
//     console.log(result);
//   });
// });

//add prefered times of day 
app.get('/addPreferredTimeOfDay/:studentId/:morning/:afternoon/:evening', (request, response) => {
  let morn = request.params.morning;
  let noon = request.params.afternoon;
  let eve = request.params.evening;
  let studentId = request.params.student_id;
  response.send('successfully inserted times of day');

  let insertSql = `INSERT INTO student_preferences (morning, afternoon, evening) VALUES('${morn}', '${noon}', '${eve}') WHERE student_id = '${studentId}'`;
  connection.query(insertSql, (error, result) => {
    if (error) throw error;
    console.log(result);

  });
});

// get days of the week //
app.get('/getDaysOfWeek/:student_id', (request, result) => {
  let student_id = request.params.student_id;
  let days = `SELECT monday, tuesday, wednesday, thursday, friday, saturday FROM student_preferences WHERE student_id = '${student_id}'`;

  connection.query(days, (error, result) => {
    if(error) throw error;
    //const data = result.map(t => t.days);
    console.log(result);
    result.send(student_id);

  });
});

// get times of day // 
app.get('/getTimeOfDay/:student_id', (request, result) => {
  let student_id = request.params.student_id;
  let tod = `SELECT morning, afternoon, evening FROM student_preferences WHERE student_id = '${student_id}'`;
  
  connection.query(tod, (error, result) => {
    if(error) throw error;
    //const data = result.map(t => t.tod);
    console.log(result);
    result.send(student_id);

  });
});


// check underlying environment
// use provided port based on env.
const PORT = process.env.PORT || 5000;
console.log(PORT);
app.listen(PORT);