import React, {PropTypes} from 'react';
import '../../styles/settings.css';

const ItemSettings = ({settings, humidityChecked, windChecked, pressureChecked}) => (
    <section className="feature-settings">
        <h4 className="settings-name">Features list</h4>
        <ul className="feature-settings__list settings-list">
            <li className="feature-settings__list__item" style={{color: settings.humidityChecked ? '#d26c22' : '#4e4d4a'}}>
                <span className="humidity" onClick={() => humidityChecked()}>Humidity</span>
            </li>
            <li className="feature-settings__list__item" style={{color: settings.windChecked ? '#d26c22' : '#4e4d4a'}}>
                <span className="wind"
                      onClick={() => windChecked()}>Wind</span>
            </li>
            <li className="feature-settings__list__item" style={{color: settings.pressureChecked ? '#d26c22' : '#4e4d4a'}}>
                <span className="pressure-checkbox"
                      onClick={() => pressureChecked()}>Pressure</span>
            </li>
        </ul>
    </section>
);

ItemSettings.propTypes = {
    settings: PropTypes.object.isRequired,
    humidityChecked: PropTypes.func.isRequired,
    windChecked: PropTypes.func.isRequired,
    pressureChecked: PropTypes.func.isRequired
};

export default ItemSettings;
