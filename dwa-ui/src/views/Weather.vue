<template>
  <div >
    <HelloWeather msg="Welcome to the weather" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWeather from "../components/HelloWeather.vue";

@Options({
  components: {
    HelloWeather,
  },
})
export default class Weather extends Vue {}
</script>
