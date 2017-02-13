//noinspection JSUnresolvedVariable
import {SET_FONT_STYLE} from '../constants';
import {HUMIDITY_CHECKED, WIND_CHECKED, PRESSURE_CHECKED} from '../constants';
import {SET_BACKGROUND} from '../constants';

const initialState = {
    background: '#fff',
    fontStyle: 'normal',
    humidityChecked: true,
    windChecked: true,
    pressureChecked: true,
};

export default function settingsReducer(state = initialState, action) {
    switch (action.type) {
        case SET_BACKGROUND:
            return Object.assign({}, state, {
                background: action.background
            });
        case SET_FONT_STYLE:
            return Object.assign({}, state, {
                fontStyle: action.style
            });
        case HUMIDITY_CHECKED:
            return Object.assign({}, state, {
                humidityChecked: !state.humidityChecked
            });
        case WIND_CHECKED:
            return Object.assign({}, state, {
                windChecked: !state.windChecked
            });
        case PRESSURE_CHECKED:
            return Object.assign({}, state, {
                pressureChecked: !state.pressureChecked
            });
        default:
            return state;
    }
}