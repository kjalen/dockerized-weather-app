var express = require('express');
var router = express.Router();
let weather_controller = require('../controllers/weatherController')


router.get('/:id', weather_controller.weather_by_id);

module.exports = router;