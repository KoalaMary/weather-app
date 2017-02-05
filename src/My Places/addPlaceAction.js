import {ADD_PLACE} from '../constants';

export default function addPlace(city, country, lat, lng) {
    return {
        type: ADD_PLACE,
        city,
        country,
        lat,
        lng
    }
}