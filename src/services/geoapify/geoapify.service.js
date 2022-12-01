import axios from 'axios'
import config from '../../config/app.config';

var promise;

export default class GeoapifyService {
    getLocationInfo(location) {
        promise = axios.get(`${config.laravel_api.url}/location?text=${location}`);
        return promise;
    }
}

export const geoapifyService = new GeoapifyService();
