import {ADD_PLACE} from '../constants';

const initialState = [];

export default function getWeatherReducer(state = initialState, action) {
    switch (action.type) {
        case(ADD_PLACE):
            return  [...state,
                {
                    city: action.city,
                    country: action.country,
                    lat: action.lat,
                    lng: action.lng
                }
            ];
        default:
            return state
    }
}