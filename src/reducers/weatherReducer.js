import {REQUEST_WEATHER, RECEIVE_WEATHER, REJECT_WEATHER, MEASURE_TEMP_C, MEASURE_TEMP_F} from '../constants';

const initialState = {
    mainWeather: {
        api: {
            isFetching: false,
            fetched: false,
            error: null
        },
        data: {}
    },
    placeWeather: {
        api: {
            isFetching: false,
            fetched: false,
            error: null
        },
        data: {}
    }
};

export default function weatherReducer(state = initialState, action) {
    switch (action.type) {
        case REQUEST_WEATHER:
            return Object.assign({}, state, {
                [action.field]: {
                    api: {
                        isFetching: true,
                        fetched: false,
                        error: null
                    }
                }
            });
        case
        REJECT_WEATHER:
            return Object.assign({}, state, {
                [action.field]: {
                    api: {
                        isFetching: false,
                        fetched: false,
                        error: action.error
                    }
                }
            });
        case
        RECEIVE_WEATHER:
            let info = action.data;
            return Object.assign({}, state, {
                [action.field]: {
                    api: {
                        isFetching: false,
                        fetched: true,
                        error: null
                    },
                    data: {
                        id: info.id,
                        temp: Math.floor(info.main.temp - 273) || 'no info',
                        humidity: info.main.humidity || 'no info',
                        wind: info.wind.speed || 'no info',
                        pressure: info.main.pressure || 'no info',
                        base: info.weather[0].main || 'no info',
                        city: info.name || 'No city',
                        country: info.sys.country || 'no country',
                        icon: `http://openweathermap.org/img/w/${info.weather[0].icon}.png`,
                        date: action.date.toLocaleString("en-US", {month: 'long', day: 'numeric'}),
                        measure: 'C',
                        lat: info.coord.lat,
                        lng: info.coord.lon
                    }
                }
            });
        case
        MEASURE_TEMP_F:
            let tempC = state[action.field].data.temp;
            if (state[action.field].data.measure !== 'F') {
                return Object.assign({}, state, {
                        [action.field]: {
                            ...state[action.field],
                            data: {
                                ...state[action.field].data,
                                temp: Math.round(9 / 5 * tempC + 32),
                                measure: 'F'
                            }
                        }
                    }
                )
            }
            else return state;
        case
        MEASURE_TEMP_C:
            let tempF = state[action.field].data.temp;
            if (state[action.field].data.measure !== 'C') {
                return Object.assign({}, state, {
                        [action.field]: {
                            ...state[action.field],
                            data: {
                                ...state[action.field].data,
                                temp: Math.round(5 / 9 * (tempF - 32)),
                                measure: 'C'
                            }
                        }
                    }
                )
            }
            else return state;
        default:
            return state
    }
}