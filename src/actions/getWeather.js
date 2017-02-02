import {REQUEST_WEATHER, RECEIVE_WEATHER, REJECT_WETHER} from '../constants';
import fetch from 'isomorphic-fetch';

export function requestWeather() {
    return {
        type: REQUEST_WEATHER
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
        type: REJECT_WETHER,
        error
    }
}

export function fetchWeather() {
    return dispatch => {
        dispatch(requestWeather())
        return fetch('http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=e3da0add071c501c514b5b35d62e8547')
            .then(response => response.json())
            .then(json => dispatch(receiveWeather(json)))
            .catch(error => dispatch(rejectWeather(error)))
    }
}