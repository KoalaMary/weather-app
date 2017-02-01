import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import setMarkerReducer from "./reducers/setMarkerReducer";
import settingsReducer from './reducers/setingsReducer';

export default combineReducers({
    routing: routerReducer,
    map: setMarkerReducer,
    settings: settingsReducer
});