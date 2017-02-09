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

export function requestWeather(lat, lng) {
    return {
        type: REQUEST_WEATHER,
        lat, lng
    }
}

export function receiveWeather(data) {
    return {
        type: RECEIVE_WEATHER,
        data,
        date: Date.now()
    }
}

export function rejectWeather(error) {
    return {
        type: REJECT_WEATHER,
        error
    }
}

export function fetchWeather(lat, lng) {
    return dispatch => {
        dispatch(requestWeather(lat, lng))
        return fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=e3da0add071c501c514b5b35d62e8547`)
            .then(response => response.json())
            .then(json => dispatch(receiveWeather(json)))
            .catch(error => dispatch(rejectWeather(error)))
    }
}