import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {reducer as modalReducer} from 'react-redux-modal'
import setMarkerReducer from "./reducers/setMarkerReducer";
import settingsReducer from './reducers/setingsReducer';
import getWeatherReducer from './reducers/weatherReducer';
import placeReducer from './reducers/placeReducer';

export default combineReducers({
    routing: routerReducer,
    map: setMarkerReducer,
    settings: settingsReducer,
    weather: getWeatherReducer,
    places: placeReducer,
    modals: modalReducer
});