<template>
    <div id="weather-app" :class="typeof weatherIcon != 'undefined' && temperature > 16 ? 'warm' : ''">
        <main>
            <div class="search-box">
                <input type="text" class="search-bar" placeholder="Search..." v-model="location" @keypress="getLocationInfo"/>
            </div>
            <div class="weather-wrap" v-if="weatherIcon">
                <div class="location-box">
                    <div class="location">{{ location }}</div>
                    <div class="icon"><img :src="weatherIcon" alt=""></div>
                </div>

                <div class="weather-box">
                    <div class="temp">{{ temperature }}<span>&#176;</span>c</div>
                    <div class="weather">{{description }}</div>
                </div>
            </div>
        </main>
    </div>
</template>
<script>
import {geoapifyService} from "../services/geoapify/geoapify.service";
import {openweatherService} from "../services/openweather/openweather.service";
import config from '../config/app.config';

export default{
    name: 'weather-app',
    data(){
        return{
            weather:{},
            description: '',
            weatherIcon: '',
            temperature: '',
            location: ''
        }
    },
    methods: {
        getLocationInfo(e) {
            if(e.key == "Enter") {
                geoapifyService.getLocationInfo(this.location).then(res => {
                    openweatherService.getWeatherinfo(res.data.features[0].properties).then(response => {
                        this.description = response.data.weather[0].description;
                        this.weatherIcon = config.api_openweathermap.icon_url+'/'+response.data.weather[0].icon+'@2x.png';
                        this.temperature = response.data.main.temp;
                    })
                });
            }
        }
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box
}

#weather-app.warm {
    background-image: url('../assets/warm-temp.jpg');
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-position:  bottom;
    transition:  0.5s;
}

body {
    font-family: 'montserrat', sans-serif;
}

main {
    min-height: 100vh;
    padding: 25px;
    
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.75));
}

.search-box {
    width: 100%;
    margin-bottom: 30px;
}

.search-box .search-bar {
    display: block;
    width: 100%;
    padding: 15px;

    color: #313131;
    font-size: 10px;

    appearance: none;
    border: none;
    outline: none;
    background: none;

    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.25);
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 0px 15px 0px 15px;
    transition: 0.4s;
}

.search-box .search-bar:focus {
    box-shadow: 0px 0px 15px rgb(0, 0, 0, 0.25);
    background-color: rgba(255, 255, 255, 0.75);
    border-radius: 15px 0px 15px 0px;
}

.location-box .location {
    color: #fff;
    font-size: 11px;
    font-weight: 500;
    text-align: center;
    text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
    text-transform: capitalize;
}

.location-box .icon {
    color: #fff;
    font-size: 15px;
    font-weight: 300;
    text-align: center;
    text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
    font-style: italic;
    text-align: center;
    width: 100%;
}

.weather-box {
    text-align: center;
}

.weather-box .temp {
    display: inline-block;
    padding: 10px 10px;
    color: #FFF;
    font-size: 50px;
    font-weight: 900;

    text-shadow: 1px 3px rgba(255, 255, 255, 0.25);
    border-radius: 16px;
    margin: 15px 0px;

    box-shadow: 1px 3px rgba(0, 0, 0, 0.25);
}

.weather-box {
    color: #FFF;
    font-size: 20px;
    font-weight: 900;
    font-style: italic;
    text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
    text-transform: capitalize;
}
</style>
