import {REQUEST_WEATHER, RECEIVE_WEATHER, REJECT_WEATHER, MEASURE_TEMP_F, MEASURE_TEMP_C} from '../constants';
import fetch from 'isomorphic-fetch';

export function measureTempF(field) {
    return {
        type: MEASURE_TEMP_F,
        field
    }
}

export function measureTempC(field) {
    return {
        type: MEASURE_TEMP_C,
        field
    }
}

export function requestWeather(lat, lng, field) {
    return {
        type: REQUEST_WEATHER,
        lat, lng, field
    }
}

export function receiveWeather(data, field) {
    return {
        type: RECEIVE_WEATHER,
        date: new Date(),
        data, field
    }
}

export function rejectWeather(error, field) {
    return {
        type: REJECT_WEATHER,
        error, field
    }
}

export function getWeather(lat, lng, field) {
    return dispatch => {
        dispatch(requestWeather(lat, lng, field))
        return fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=e3da0add071c501c514b5b35d62e8547`)
            .then(response => response.json())
            .then(json => dispatch(receiveWeather(json, field)))
            .catch(error => dispatch(rejectWeather(error, field)))
    }
}