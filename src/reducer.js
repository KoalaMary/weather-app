import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import setMarkerReducer from "./reducers/setMarkerReducer";
import settingsReducer from './reducers/setingsReducer';
import getWeatherReducer from './reducers/getWeatherReducer';
import {addPlaceReducer} from './My Places/placeReducer';
import {reducer as modalReducer} from 'react-redux-modal'

export default combineReducers({
    routing: routerReducer,
    map: setMarkerReducer,
    settings: settingsReducer,
    weather: getWeatherReducer,
    places: addPlaceReducer,
    modals: modalReducer
});