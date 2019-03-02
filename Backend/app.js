var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cacheControl = require('express-cache-controller')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var cors = require('cors');


var app = express();
app.use(cors());

app.use(cacheControl({
    maxAge: 0
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
