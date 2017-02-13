import {SET_FONT_STYLE} from '../constants';
import {HUMIDITY_CHECKED, WIND_CHECKED, PRESSURE_CHECKED} from '../constants';
import {SET_BACKGROUND} from '../constants';

export function setBackground(background) {
    return {
        type: SET_BACKGROUND,
        background
    }
}

export function setFontStyle(style) {
    return {
        type: SET_FONT_STYLE,
        style
    }
}

export function humidityChecked() {
    return {
        type: HUMIDITY_CHECKED
    }
}

export function windChecked() {
    return {
        type: WIND_CHECKED
    }
}

export function pressureChecked() {
    return {
        type: PRESSURE_CHECKED
    }
}
