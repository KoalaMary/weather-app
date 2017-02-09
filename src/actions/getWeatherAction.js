import {REQUEST_WEATHER, RECEIVE_WEATHER, REJECT_WEATHER, MEASURE_TEMP_F, MEASURE_TEMP_C} from '../constants';
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

export function requestWeather(lat, lng, page) {
    return {
        type: REQUEST_WEATHER,
        lat, lng, page
    }
}

export function receiveWeather(data, page) {
    return {
        type: RECEIVE_WEATHER,
        data, page,
        date: Date.now()
    }
}

export function rejectWeather(error, page) {
    return {
        type: REJECT_WEATHER,
        error, page
    }
}

export function fetchWeather(lat, lng, page) {
    return dispatch => {
        dispatch(requestWeather(lat, lng, page))
        return fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=e3da0add071c501c514b5b35d62e8547`)
            .then(response => response.json())
            .then(json => dispatch(receiveWeather(json, page)))
            .catch(error => dispatch(rejectWeather(error, page)))
    }
}