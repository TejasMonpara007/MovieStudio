var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
require('./APP_SERVER/model/db');

var app = express();
// app.use(cors());
app.use( function(req, res, next) {   
  //Enabling CORS 
  res.header("Access-Control-Allow-Origin", "*"); 
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE,UPDATE"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization"); 
  next(); 

}); 

var indexRouter = require('./APP_SERVER/routes/index');
var usersRouter = require('./APP_SERVER/routes/users');
var apiRouter = require('./APP_API/routes/moviePlaceholder');



// view engine setup
app.set('views', path.join(__dirname, 'APP_SERVER' ,'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'APP_PUBLIC','build')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
