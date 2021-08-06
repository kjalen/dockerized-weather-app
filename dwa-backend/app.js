var createError = require('http-errors');
'use strict';


var express = require('express');
var cors = require('cors');

var router = express.Router();
const app = express();
app.use(cors())
var corsOptions = {
  origin: 'http://localhost:8080',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
let indexRouter = require('./routes/index');
let weatherByCityRouter = require('./routes/weatherByCity')
let weatherByIDRouter = require('./routes/weatherByID')

app.use('/',cors(corsOptions), indexRouter);
app.use('/weatherByCity', cors(corsOptions), weatherByCityRouter);
app.use('/weatherByID', cors(corsOptions), weatherByIDRouter);
const PORT = 8080;
const HOST = '0.0.0.0';
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);




// Home page route.
router.get('/',cors(corsOptions),  function (req, res) {
  res.send('Weather app!');
})


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

module.exports = app;