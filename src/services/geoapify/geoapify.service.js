import axios from 'axios'
import config from '../../config/app.config';

var promise;

export default class GeoapifyService {
    getLocationInfo(location) {
        promise = axios.get(`${config.api_geoapify.url}/search?text=${location}&apiKey=${config.api_geoapify.key}`);
        return promise;
    }
}

export const geoapifyService = new GeoapifyService();
