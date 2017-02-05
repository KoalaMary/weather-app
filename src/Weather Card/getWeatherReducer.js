import {REQUEST_WEATHER, RECEIVE_WEATHER, REJECT_WEATHER} from '../constants';

const initialState = {
    isFetching: false,
    fetched: false,
    weather: {},
    error: null,
};

export default function getWeatherReducer(state = initialState, action) {
    switch (action.type) {
        case REQUEST_WEATHER:
            return Object.assign({}, state, {
                isFetching: true
            });
        case REJECT_WEATHER:
            return Object.assign({}, state, {
                isFetching: false,
                error: action.error
            });
        case RECEIVE_WEATHER:
            let data = action.data;
            return Object.assign({}, state, {
                isFetching: false,
                fetched: true,
                weather: {
                    temp: data.main.temp,
                    humidity: data.main.humidity,
                    wind: data.wind.speed,
                    pressure: data.main.pressure,
                    base: data.weather[0].main,
                    city: data.name,
                    country: data.sys.country,
                    icon: data.weather[0].icon,
                    date: action.date
                }
            });
        default:
            return state
    }
}