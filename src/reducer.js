import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import setMarkerReducer from "./reducers/setMarkerReducer";
import settingsReducer from './reducers/setingsReducer';
import getWeatherReducer from './reducers/getWeatherReducer';

export default combineReducers({
    routing: routerReducer,
    map: setMarkerReducer,
    settings: settingsReducer,
    api: getWeatherReducer
});