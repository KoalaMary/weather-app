import {SET_FONT_SIZE} from '../constants';

const initialState = {
    size: 16
};

export default function setColorReducer(state = initialState, action) {
    switch (action.type) {
        case SET_FONT_SIZE:
            console.log('Action size', state)
            return Object.assign({}, state, {
                size: action.size
            });
        default:
            return state;
    }
}