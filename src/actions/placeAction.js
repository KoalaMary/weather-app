import {ADD_PLACE, DELETE_PLACE} from '../constants';

export function addPlace(place) {
    return {
        type: ADD_PLACE,
        place
    }
}

export function deletePlace(place) {
    return {
        type: DELETE_PLACE,
        place
    }
}
