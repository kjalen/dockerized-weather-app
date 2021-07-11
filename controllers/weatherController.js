const { weatherApi } = require('../services')
const WeatherAPI = require('../services/WeatherApi.service')
require('dotenv').config();

const getWeather = async (req, res, next) => {
    const api = new weatherApi({api_key: process.env.API_KEY})
}

const api = new weatherApi({api_key: process.env.API_KEY})


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

// see if its working
api.getWeatherByCity({q: 'Victoria', units: 'metric'}).then(data => console.log(data))