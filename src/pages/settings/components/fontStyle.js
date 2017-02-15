import React, {PropTypes} from 'react';
import '../../../styles/settings.css';

const FontStyle = ({fontStyle, setFontStyle}) => (
    <section className="font-style-settings">
        <h4 className="settings-name" style={{fontStyle: fontStyle}}>Font
            style</h4>
        <ul className="font-style-settings__list settings-list">
            <li className="font-style-settings__list__item" onClick={() => setFontStyle('normal')}>Normal
            </li>
            <li className="font-style-settings__list__item" onClick={() => setFontStyle('italic')} style={{fontStyle: 'italic'}}>
                Italic
            </li>
        </ul>
    </section>
);

FontStyle.propTypes = {
    fontStyle: PropTypes.string.isRequired,
    setFontStyle: PropTypes.func.isRequired
};

export default FontStyle;
