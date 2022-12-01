import axios from 'axios'
import config from '../../config/app.config';

var promise;

export default class OpenweatherService {
    getWeatherinfo(data) {
        promise = axios.get(`${config.laravel_api.url}/weather?lon=${data.lon}&lat=${data.lat}`);
        return promise;
    }
}

export const openweatherService = new OpenweatherService();
