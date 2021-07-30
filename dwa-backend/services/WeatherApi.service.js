
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
        }).catch(error => {console.log(error);})

    }
    getWeatherByCity(options) {
        console.log('options: ' + JSON.stringify(options));
        let qs = options ? "?" + querystring.stringify(options) : ""
        let url = "/weather" + qs
        let config = {
            method: 'GET'
        }
        console.log(`URL: ${url}`)
        return this.request(url, config)
    }
    getWeatherByID(options) {
        console.log('options: ' + JSON.stringify(options));
        let qs = options ? "?" + querystring.stringify(options) : ""
        let url = "/weather" + qs
        let config = {
            method: 'GET'
        }
        console.log(`URL: ${url}`)
        return this.request(url, config)
    }
}

module.exports = WeatherAPI;