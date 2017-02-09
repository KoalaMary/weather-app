import {ADD_PLACE} from '../constants';

const initialState = [
    {
        city: 'Semey',
        country: 'KZ',
        lat: 50.397,
        lng: 80.644
    }
];

export function addPlaceReducer(state = initialState, action) {
    switch (action.type) {
        case(ADD_PLACE):
            return [...state,
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
