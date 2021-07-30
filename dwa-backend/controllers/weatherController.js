const WeatherApi = require('../services/WeatherApi.service')
require('dotenv').config();

let api = new WeatherApi({api_key: process.env.API_KEY})

exports.weather_by_city = function(req, res) {
    api.getWeatherByCity({q: req.params.city, units: 'metric'}).then(data => res.send(data));
}

exports.weather_by_id = function(req, res) {
    api.getWeatherByID({id: req.params.id, units: 'metric'}).then(data => res.send(data));
}