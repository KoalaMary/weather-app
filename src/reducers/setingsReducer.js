import {SET_FONT_STYLE_ITALIC, SET_FONT_STYLE_NORMAL} from '../constants';
import {HUMIDITY_CHECKED, WIND_CHECKED, PRESSURE_CHECKED} from '../constants';

const initialState = {
    color: 'green',
    fontStyle: 'normal',
    themeColor: 'red',
    humidityChecked: true,
    windChecked: true,
    pressureChecked: true,
};

export default function settingsReducer(state = initialState, action) {
    switch (action.type) {
        case SET_FONT_STYLE_NORMAL:
            return Object.assign({}, state, {
                fontStyle: action.style
            });
        case SET_FONT_STYLE_ITALIC:
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