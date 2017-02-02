import React, {Component} from 'react'
import {connect} from 'react-redux';
import {fetchWeather} from '../actions/getWeather';
import '../styles/weatherCard.css';

class WeatherCard extends Component {

    getWeather() {
        this.props.dispatch(fetchWeather(this.props.lat, this.props.lng));
    }

    render() {
        return (
            <div className="weatherCard">
                <button onClick={this.getWeather.bind(this)}>Get Weather</button>
                <ul className="weather" style={{color: this.props.color}}>
                    <li><img src="" alt="weather"/></li>
                    <li>City {this.props.city}</li>
                    <li>Country {this.props.country}</li>
                    <li>Temperature {Math.floor(this.props.temp - 273)}</li>
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
        date: state.api.weather.date,
        lat: state.map.marker.position.lat,
        lng: state.map.marker.position.lng
    }
}

export default connect(mapStateToProps)(WeatherCard);
