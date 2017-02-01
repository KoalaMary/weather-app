import {SET_BLUE_COLOR} from '../constants';
import {SET_RED_COLOR} from '../constants';
import {SET_FONT_SIZE} from '../constants';

const initialState = {
    color: 'green',
    size: 16
};

export default function settingsReducer(state = initialState, action) {
    switch (action.type) {
        case SET_BLUE_COLOR:
            console.log('color reducer', state);
            return Object.assign({}, state, {
                color: 'blue'
            });
        case SET_RED_COLOR:
            return Object.assign({}, state, {
                color: 'red'
            });
        case SET_FONT_SIZE:
            return Object.assign({}, state, {
                size: action.size
            });
        default:
            return state;
    }
}