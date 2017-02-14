import {ADD_PLACE, DELETE_PLACE} from '../constants';
import {getWeather} from './weatherAction';

export function addPlace(place) {
    return {
        type: ADD_PLACE,
        place
    }
}

function deletePlace(place) {
    return {
        type: DELETE_PLACE,
        place
    }
}

export function updatePlaces(place, firstPlace, field) {
    return dispatch => {
        dispatch(deletePlace(place));
        dispatch(getWeather(firstPlace.lat, firstPlace.lng, field))
    }
}