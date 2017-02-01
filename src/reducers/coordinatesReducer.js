import {GET_COORDINATES} from "../constants";

const initialState = {
        position: {lat: 50.397, lng: 80.644}
};

export default function coordinatesReducer(state = initialState, action) {
    switch (action.type) {
        case GET_COORDINATES:
            console.log('State', state);
            console.log('Action', action);
            return Object.assign({}, state, {
                position: action.position
            });
            return state;
        default:
            return state;
    }
}