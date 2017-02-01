import React, {Component} from 'react'
import {connect} from 'react-redux';
import '../styles/weatherCard.css';

class WeatherCard extends Component {

    render() {
        return (
            <div className="weatherCard">
                <ul className="weather" style={{color: this.props.color}}>
                    <li><img src="" alt="weather"/></li>
                    <li>City</li>
                    <li>Country</li>
                    <li>Temperature</li>
                    <li>Humidity</li>
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        color: state.settings.color
    }
}

export default connect(mapStateToProps)(WeatherCard);
