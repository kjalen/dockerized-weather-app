'use strict';
require('dotenv').config();
const fetch = require("isomorphic-unfetch")
const { Headers } = require('node-fetch');
const express = require('express');
const querystring = require("querystring");

class WeatherAPI {
    constructor(config) {
        this.api_key = config.api_key
        this.basePath = "https://api.openweathermap.org/data/2.5"
    }
    request(endpoint = "", options = {}) {
        let url = this.basePath + endpoint
        let headers = {
            'x-api-key': this.api_key
        };

        return fetch(url, {headers: headers}).then(r => {
            console.log(r.headers);
            console.log(url);
            if (r.ok) {
                return r.json()
            }
            throw new Error(console.log(r.Error))
        })

    }
    getWeather(options) {
        console.log('options: ' + options);
        let qs = options ? "?" + querystring.stringify(options) : ""
        console.log('qs: ' + qs);
        let url = "/find" + qs
        let config = {
            method: 'GET'
        }
        return this.request(url, config)
    }
}

const PORT = 8080;
const HOST = '0.0.0.0';


const app = express();

const api = new WeatherAPI({api_key: process.env.API_KEY})


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

// see if its working
api.getWeather({q: 'Victoria', units: 'metric'}).then(data => console.log(data))