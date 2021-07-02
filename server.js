const weatherApi = require('./www/weatherapi')
require('dotenv').config();

'use strict';


const express = require('express');


const PORT = 8080;
const HOST = '0.0.0.0';


const app = express();

const api = new weatherApi({api_key: process.env.API_KEY})


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

// see if its working
api.getWeather({q: 'Victoria', units: 'metric'}).then(data => console.log(data))