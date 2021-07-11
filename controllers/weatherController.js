const WeatherAPI = require('../services/WeatherApi.service')
require('dotenv').config();

//const api = new weatherApi({api_key: process.env.API_KEY})
exports.index = function(req, res) {
    
    res.send('weather api go here ' + req.query.city);
};

// see if its working
//api.getWeatherByCity({q: 'Victoria', units: 'metric'}).then(data => console.log(data))
