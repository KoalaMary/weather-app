import {GET_COORDINATES} from '../constants';

export default function getCoordinates(position) {
    return {
        type: GET_COORDINATES,
        position
    }
}