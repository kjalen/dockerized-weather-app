var express = require('express');
var router = express.Router();
let weather_controller = require('../controllers/weatherController')


router.get('/', weather_controller.index);

module.exports = router;