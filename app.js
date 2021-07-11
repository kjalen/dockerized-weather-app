var createError = require('http-errors');
'use strict';


var express = require('express');

var router = express.Router();
const app = express();

let indexRouter = require('./routes/index');
let weatherRouter = require('./routes/weather')

app.use('/', indexRouter);
app.use('/weather', weatherRouter);
const PORT = 8080;
const HOST = '0.0.0.0';
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


// Home page route.
router.get('/', function (req, res) {
  res.send('Weather app!');
})








// see if its working

module.exports = app;