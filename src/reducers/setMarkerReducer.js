import {SET_MARKER} from "../constants";

const initialState = {
    marker: {
        position: {lat: 50.397, lng: 80.644},
    },
    center: {lat: 50.397, lng: 80.644},
};

export default function coordinatesReducer(state = initialState, action) {
    switch (action.type) {
        case SET_MARKER:
            return Object.assign({}, state, {
                marker: {
                    position: {
                        lat: action.coordinates.lat(),
                        lng: action.coordinates.lng()
                    }
                }
            });
        default:
            return state;
    }
}