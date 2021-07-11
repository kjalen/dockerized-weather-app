const WeatherApi = require('../services/WeatherApi.service')
require('dotenv').config();

let api = new WeatherApi({api_key: process.env.API_KEY})
//const api = new weatherApi({api_key: process.env.API_KEY})
exports.index = function(req, res) {
    api.getWeatherByCity({q: req.params.city, units: 'metric'}).then(data => res.send(data));
};

// see if its working
//api.getWeatherByCity({q: 'Victoria', units: 'metric'}).then(data => console.log(data))
