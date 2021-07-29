var express = require('express');
var router = express.Router();
let weather_controller = require('../controllers/weatherController')


router.get('/:city', weather_controller.weather_by_city);

module.exports = router;