import React, {Component} from 'react';
import {setBlueColor, setRedColor} from '../actions/settingsAction';
import {connect} from 'react-redux';
import '../styles/css/settings.css';
import {setFontStyleNormal, setFontStyleItalic} from '../actions/settingsAction';
import {humidityChecked, windChecked, pressureChecked} from '../actions/settingsAction';

class ModalSettings extends Component {
    constructor(props) {
        super(props);
        this.setBlueColor = this.setBlueColor.bind(this);
        this.setRedColor = this.setRedColor.bind(this);
        this.removeThisModal = this.removeThisModal.bind(this);
        this.setFontStyleItalic = this.setFontStyleItalic.bind(this);
        this.setFontStyleNormal = this.setFontStyleNormal.bind(this);
        this.humidityChecked = this.humidityChecked.bind(this);
        this.windChecked = this.windChecked.bind(this);
        this.pressureChecked = this.pressureChecked.bind(this);
    }

    removeThisModal() {
        this.props.removeModal();
    }

    setBlueColor() {
        this.props.dispatch(setBlueColor());
    }

    setRedColor() {
        this.props.dispatch(setRedColor());
    }

    setFontStyleNormal() {
        this.props.dispatch(setFontStyleNormal());
    }

    setFontStyleItalic() {
        this.props.dispatch(setFontStyleItalic());
    }

    humidityChecked() {
        this.props.dispatch(humidityChecked());
    }

    windChecked() {
        this.props.dispatch(windChecked());
    }

    pressureChecked() {
        this.props.dispatch(pressureChecked());
    }

    render() {
        return (
            <div className="settings">
                <h2 className="settings__title">Settings</h2>
                <section className="common-settings">
                    <h3 className="common-settings__title settings-title">Common settings</h3>
                    <section className="theme-color-settings">
                        <h4 className="theme-color-settings__name">Theme color</h4>
                        <ul className="theme-color-settings__list">
                            <li className="theme-color-settings__list__item">Red</li>
                            <li className="theme-color-settings__list__item">Blue</li>
                            <li className="theme-color-settings__list__item">Yellow</li>
                        </ul>
                    </section>
                </section>
                <section className="weather-card-settings">
                    <h3 className="weather-card__title settings-title">Weather card settings</h3>
                    <section className="font-style-settings">
                        <h4 className="font-style-settings__name" style={{fontStyle: this.props.fontStyle}}>Font
                            style</h4>
                        <ul className="font-style-settings__list">
                            <li className="font-style-settings__list__item" onClick={this.setFontStyleNormal}>Normal
                            </li>
                            <li className="font-style-settings__list__item" onClick={this.setFontStyleItalic}>Italic
                            </li>
                        </ul>
                    </section>
                    <section className="feature-settings">
                        <h4 className="feature-settings__name">Features list</h4>
                        <ul className="feature-settings__list">
                            <li className="feature-settings__list__item">
                                <label><input type="checkbox" name="humidity" defaultChecked onChange={this.humidityChecked}/>Humidity</label>
                            </li>
                            <li className="feature-settings__list__item">
                                <label><input type="checkbox" name="wind" defaultChecked onChange={this.windChecked}/>Wind</label>
                            </li>
                            <li className="feature-settings__list__item">
                                <label><input type="checkbox" name="pressure" defaultChecked onChange={this.pressureChecked}/>Pressure</label>
                            </li>
                        </ul>
                    </section>
                </section>
                <button onClick={this.removeThisModal}>Close modal</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        size: state.settings.size,
        color: state.settings.color,
        fontStyle: state.settings.fontStyle,
        // themeColor: state.settings.themeColor
    }
}

// export let themeColor = this.props.themeColor;

export default connect(mapStateToProps)(ModalSettings);
