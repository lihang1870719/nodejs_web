var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var routes = require('./routes/home');
var teaching=require('./routes/teaching');
var research=require('./routes/research');
var frontier=require('./routes/frontier');
var activity=require('./routes/activity');
var politics=require('./routes/politics');
var about=require('./routes/about');
var admin=require('./routes/admin');
var list=require('./routes/list')

var reg=require('./routes/reg');
var login=require('./routes/login');
var logout=require('./routes/logout');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser('Wilson'));
app.use(session({secret:'wilson'}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/teaching',teaching);
app.use('/research',research);
app.use('/frontier',frontier);
app.use('/activity',activity);
app.use('/politics',politics);
app.use('/about',about);

app.use('/reg',reg);
app.use('/login',login);
app.use('/logout',logout);

app.use('/admin',admin);
app.use('/list',list);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});
module.exports = app;
