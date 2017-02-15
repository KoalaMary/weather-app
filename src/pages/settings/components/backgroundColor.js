import React, {PropTypes} from 'react';
import '../../../styles/settings.css';

const BackgroundColor = ({settings, setBackground}) => (
    <section className="background-color-settings">
        <h4 className="settings-name">Background color</h4>
        <ul className="background-color-settings__list settings-list">
            <li className="background-color-settings__list__item white" onClick={() => setBackground('#fff')}> </li>
            <li className="background-color-settings__list__item gray" onClick={() => setBackground('#ecf0f1')}> </li>
            <li className="background-color-settings__list__item dark" onClick={() => setBackground('#4e4d4a')}> </li>
        </ul>
    </section>
);

BackgroundColor.propTypes = {
    settings: PropTypes.object.isRequired,
    setBackground: PropTypes.func.isRequired
};

export default BackgroundColor;
