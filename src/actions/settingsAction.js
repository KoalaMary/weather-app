import {SET_FONT_STYLE_ITALIC, SET_FONT_STYLE_NORMAL} from '../constants';
import {HUMIDITY_CHECKED, WIND_CHECKED, PRESSURE_CHECKED} from '../constants';

export function setFontStyleNormal() {
    return {
        type: SET_FONT_STYLE_NORMAL,
        style: 'normal'
    }
}

export function setFontStyleItalic() {
    return {
        type: SET_FONT_STYLE_ITALIC,
        style: 'italic'
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
