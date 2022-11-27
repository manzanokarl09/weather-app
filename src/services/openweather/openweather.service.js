import axios from 'axios'
import config from '../../config/app.config';

var promise;

export default class OpenweatherService {
    getWeatherinfo(data) {
        promise = axios.get(`${config.api_openweathermap.url}/weather?lon=${data.lon}&lat=${data.lat}&apiKey=${config.api_openweathermap.key}&units=metric`);
        return promise;
    }
}

export const openweatherService = new OpenweatherService();
