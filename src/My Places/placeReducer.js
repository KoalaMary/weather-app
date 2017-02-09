import {ADD_PLACE} from '../constants';
import {
    REQUEST_PLACE_WEATHER,
    RECEIVE_PLACE_WEATHER,
    REJECT_PLACE_WEATHER,
    MEASURE_TEMP_F,
    MEASURE_TEMP_C
} from '../constants';

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

const initState = {
    isFetching: false,
    fetched: false,
    weather: {},
    error: null,
};

export function getPlaceWeatherReducer(state = initState, action) {
    switch (action.type) {
        case REQUEST_PLACE_WEATHER:
            return Object.assign({}, state, {
                isFetching: true
            });
        case REJECT_PLACE_WEATHER:
            return Object.assign({}, state, {
                isFetching: false,
                error: action.error
            });
        case RECEIVE_PLACE_WEATHER:
            let data = action.data;
            let measure = state.weather.measure;
            return Object.assign({}, state, {
                isFetching: false,
                fetched: true,
                weather: {
                    temp: data.main.temp - 273 || 'no info',
                    humidity: data.main.humidity || 'no info',
                    wind: data.wind.speed || 'no info',
                    pressure: data.main.pressure || 'no info',
                    base: data.weather[0].main || 'no info',
                    city: data.name || 'No city',
                    country: data.sys.country || 'no country',
                    icon: data.weather[0].icon,
                    date: data.dt,
                    measure: measure || 'C'
                }
            });
        case MEASURE_TEMP_F:
            let tempC = state.weather.temp;
            if (state.weather.measure !== 'F') {
                return Object.assign({}, state, {
                        weather: {
                            ...state.weather,
                            temp: 9 / 5 * tempC + 32,
                            measure: 'F'
                        }
                    }
                )
            }
            else return state;
        case MEASURE_TEMP_C:
            let tempF = state.weather.temp;
            if (state.weather.measure !== 'C') {
                return Object.assign({}, state, {
                        weather: {
                            ...state.weather,
                            temp: 5 / 9 * (tempF - 32),
                            measure: 'C'
                        }
                    }
                )
            }
            else return state;
        default:
            return state
    }
}