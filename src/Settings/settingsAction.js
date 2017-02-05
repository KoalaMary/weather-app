import {SET_BLUE_COLOR} from '../constants';
import {SET_RED_COLOR} from '../constants';
import {SET_FONT_SIZE} from '../constants';

export function setBlueColor() {
    return {
        type: SET_BLUE_COLOR
    }
}

export function setRedColor() {
    return {
        type: SET_RED_COLOR
    }
}

export function setFontSize(size) {
    return {
        type: SET_FONT_SIZE,
        size
    }
}