import {ADD_PLACE} from '../constants';
import {
    REQUEST_PLACE_WEATHER,
    RECEIVE_PLACE_WEATHER,
    REJECT_PLACE_WEATHER,
    MEASURE_TEMP_C,
    MEASURE_TEMP_F
} from '../constants';
import fetch from 'isomorphic-fetch';

export function measureTempF() {
    return {
        type: MEASURE_TEMP_F
    }
}

export function measureTempC() {
    return {
        type: MEASURE_TEMP_C
    }
}

export default function addPlace(city, country, lat, lng) {
    return {
        type: ADD_PLACE,
        city,
        country,
        lat,
        lng
    }
}

export function requestPlaceWeather(city, country) {
    return {
        type: REQUEST_PLACE_WEATHER,
        city, country
    }
}

export function receivePlaceWeather(data) {
    return {
        type: RECEIVE_PLACE_WEATHER,
        data,
    }
}

export function rejectPlaceWeather(error) {
    return {
        type: REJECT_PLACE_WEATHER,
        error
    }
}

export function fetchPlaceWeather(city, country) {
    return dispatch => {
        dispatch(requestPlaceWeather(city, country))
        return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=e3da0add071c501c514b5b35d62e8547`)
            .then(response => response.json())
            .then(json => dispatch(receivePlaceWeather(json)))
            .catch(error => dispatch(rejectPlaceWeather(error)))
    }
}