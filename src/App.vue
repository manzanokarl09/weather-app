<template>
  <div id="app">
    <WeatherComponent/>
  </div>
</template>

<script>
import WeatherComponent from './components/WeatherComponent.vue'

export default {
  name: 'App',
  components: {
    WeatherComponent
  }
}
</script>

<style>
#app {
    background-image: url('./assets/cold-temp.jpg');
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-position:  bottom;
    transition:  0.5s;
}
</style>
