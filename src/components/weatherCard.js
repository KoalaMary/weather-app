import React, {Component} from 'react'
import {connect} from 'react-redux';
import '../styles/weatherCard.css';

class WeatherCard extends Component {

    render() {
        return (
            <div className="weatherCard">
                <ul className="weather" style={{color: this.props.color}}>
                    <li><img src="" alt="weather"/></li>
                    <li>City {this.props.city}</li>
                    <li>Country {this.props.country}</li>
                    <li>Temperature {this.props.temp}</li>
                    <li>Humidity {this.props.humidity}</li>
                    <li>Base {this.props.base}</li>
                    <li>Date {new Date(this.props.date).toLocaleDateString()}</li>
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        color: state.settings.color,
        city: state.api.weather.city,
        country: state.api.weather.country,
        temp: state.api.weather.temp,
        humidity: state.api.weather.humidity,
        base: state.api.weather.base,
        date: state.api.weather.date
    }
}

export default connect(mapStateToProps)(WeatherCard);
