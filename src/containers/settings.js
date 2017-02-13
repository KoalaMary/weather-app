import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setFontStyle, setBackground} from '../actions/settingsAction';
import {humidityChecked, windChecked, pressureChecked} from '../actions/settingsAction';
import ThemeColor from '../components/backgroundColor';
import FontStyle from '../components/fontStyle';
import FeatureSettings from '../components/featureSettings';
import '../styles/settings.css';

class ModalSettings extends Component {
    constructor(props) {
        super(props);
        this.removeThisModal = this.removeThisModal.bind(this);
    }

    removeThisModal() {
        this.props.removeModal();
    }

    setBackground = (background) => {
        this.props.dispatch(setBackground(background));
    };

    setFontStyle = (style) => {
        this.props.dispatch(setFontStyle(style));
    };

    humidityChecked = () => {
        this.props.dispatch(humidityChecked());
    };

    windChecked = () => {
        this.props.dispatch(windChecked());
    };

    pressureChecked = () => {
        this.props.dispatch(pressureChecked());
    };

    render() {
        const {settings, fontStyle} = this.props;
        return (
            <div className="settings">
                <h2 className="title">Settings</h2>
                <section className="common-settings">
                    <h3 className="common-settings__title settings-title">Common settings</h3>
                    <ThemeColor
                        settings={settings}
                        setBackground={this.setBackground}/>
                </section>
                <section className="weather-card-settings">
                    <h3 className="weather-card__title settings-title">Weather card settings</h3>
                    <FontStyle
                        fontStyle={fontStyle}
                        setFontStyle={this.setFontStyle}/>
                    <FeatureSettings
                        settings={settings}
                        humidityChecked={this.humidityChecked}
                        windChecked={this.windChecked}
                        pressureChecked={this.pressureChecked}/>
                </section>
                <button className="close-modal button" onClick={this.removeThisModal}>Close modal</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        color: state.settings.color,
        fontStyle: state.settings.fontStyle,
        settings: state.settings
    }
}

export default connect(mapStateToProps)(ModalSettings);
