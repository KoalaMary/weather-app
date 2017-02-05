import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import setMarkerReducer from "./Map/setMarkerReducer";
import settingsReducer from './Settings/setingsReducer';
import getWeatherReducer from './Weather Card/getWeatherReducer';
import addPlaceReducer from './My Places/addPlaceReducer';

export default combineReducers({
    routing: routerReducer,
    map: setMarkerReducer,
    settings: settingsReducer,
    api: getWeatherReducer,
    places: addPlaceReducer
});