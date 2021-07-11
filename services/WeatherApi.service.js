
const fetch = require("isomorphic-unfetch")
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
        let method = options.method

        return fetch(url, {method: method, headers: headers}).then(r => {
            if (r.ok) {
                return r.json()
            }
            throw new Error(console.log(r.statusText))
        })

    }
    getWeatherByCity(options) {
        console.log('options: ' + options);
        let qs = options ? "?" + querystring.stringify(options) : ""
        let url = "/find" + qs
        let config = {
            method: 'GET'
        }
        return this.request(url, config)
    }
}

module.exports = WeatherAPI;