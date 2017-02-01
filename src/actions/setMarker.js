import {SET_MARKER} from '../constants';

export default function getCoordinates(coordinates) {
    return {
        type: SET_MARKER,
        coordinates
    }
}