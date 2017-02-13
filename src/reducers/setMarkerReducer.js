import {SET_MARKER} from "../constants";

const initialState = {
    marker: {
        position: {lat: 59.937105, lng: 30.314047},
    },
    center: {lat: 59.937105, lng: 30.314047},
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