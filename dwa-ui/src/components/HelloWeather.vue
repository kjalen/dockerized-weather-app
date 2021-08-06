<template>
  <div class="weather">
    <input type="text" v-model="city" name="City" id="city">
    <input type="button" v-on:click="submitCity" value="Submit">
     <p>{{ weatherData }}</p> 
    <p>{{ city }}</p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import WeatherDataService from "../services/WeatherAPIService";

@Options({
  props: {
    msg: String,
    city: String,
  },
  methods: {
    submitCity: function () {
      console.log('in submitcity method');
      
      WeatherDataService.getWeatherByCity(this.city).then( (response: any) => {
        this.weatherData = response.data.main;
      });
    }
  },
  data: function() {
    return {
      city: 'Vancouver',
      weatherData: {},
    }
  }
})

export default class HelloWeather extends Vue {
  name!: "get-weather-by-city";
  msg!: String;
  city!: String;
  
}
</script>