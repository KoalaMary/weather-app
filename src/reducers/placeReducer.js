import {ADD_PLACE, DELETE_PLACE} from '../constants';

const initialState = [];

export default function placeReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_PLACE:
            let newPlace = action.place;
            let newState = state.filter((place) => {
                return place.id !== newPlace.id
            });
            return [...newState, newPlace];
        case DELETE_PLACE:
            let deletePlace = action.place;
            newState = state.filter((place) => {
                return place.id !== deletePlace.id
            });
            return newState;
        default:
            return state
    }
}
