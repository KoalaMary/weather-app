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

export default function getWeatherReducer(state = initialState, action) {
    switch (action.type) {
        case REQUEST_WEATHER:
            let data = {
                api: {
                    isFetching: true
                }
            };
            if (action.page === 'main') {
                return Object.assign({}, state, {
                    mainWeather: data
                })
            } else if (action.page === 'place') {
                return Object.assign({}, state, {
                    placeWeather: data
                })
            }
            break;
        case
        REJECT_WEATHER:
            data = {
                api: {
                    isFetching: false,
                    error: action.error
                }
            };
            if (action.page === 'main') {
                return Object.assign({}, state, {
                    mainWeather: data
                })
            } else if (action.page === 'place') {
                return Object.assign({}, state, {
                    placeWeather: data
                })
            }
            break;
        case
        RECEIVE_WEATHER:
            let info = action.data;
            // let measure = state.weather.measure;
            data = {
                api: {
                    isFetching: false,
                    fetched: true,
                },
                data: {
                    temp: info.main.temp - 273 || 'no info',
                    humidity: info.main.humidity || 'no info',
                    wind: info.wind.speed || 'no info',
                    pressure: info.main.pressure || 'no info',
                    base: info.weather[0].main || 'no info',
                    city: info.name || 'No city',
                    country: info.sys.country || 'no country',
                    icon: info.weather[0].icon,
                    date: action.date,
                    // measure: measure || 'C',
                    lat: info.coord.lat,
                    lng: info.coord.lon
                }
            };
            if (action.page === 'main') {
                return Object.assign({}, state, {
                    mainWeather: data
                })
            } else if (action.page === 'place') {
                return Object.assign({}, state, {
                    placeWeather: data
                })
            }
        // case
        // MEASURE_TEMP_F:
        //     let tempC = state.weather.temp;
        //     if (state.weather.measure !== 'F') {
        //         return Object.assign({}, state, {
        //                 weather: {
        //                     ...state.weather,
        //                     temp: 9 / 5 * tempC + 32,
        //                     measure: 'F'
        //                 }
        //             }
        //         )
        //     }
        //     else return state;
        // case
        // MEASURE_TEMP_C:
        //     let tempF = state.weather.temp;
        //     if (state.weather.measure !== 'C') {
        //         return Object.assign({}, state, {
        //                 weather: {
        //                     ...state.weather,
        //                     temp: 5 / 9 * (tempF - 32),
        //                     measure: 'C'
        //                 }
        //             }
        //         )
        //     }
        //     else return state;
        default:
            return state
    }
}