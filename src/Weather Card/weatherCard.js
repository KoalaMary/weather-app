import React, {Component} from 'react'
import {connect} from 'react-redux';
import {fetchWeather} from './getWeatherAction';
import addPlace from '../My Places/addPlaceAction';
import './weatherCard.css';

class WeatherCard extends Component {
    constructor(props) {
        super(props);
        this.getWeather = this.getWeather.bind(this);
        this.addPlace = this.addPlace.bind(this);
        let options = {weekday: 'long', month: 'long', day: 'numeric'};
        this.date = new Date(this.props.date).toLocaleDateString('en-US', options);
        this.temp = Math.floor(this.props.temp - 273);
    }

    getWeather() {
        this.props.dispatch(fetchWeather(this.props.lat, this.props.lng));
    }

    addPlace() {
        this.props.dispatch(addPlace(this.props.city, this.props.country, this.props.lat, this.props.lng));
    }

    render() {
        return (
            <div className="weather-card">
                <button className="weather-card__add-to-my-place button" onClick={this.addPlace}>Add</button>
                <h3 className="weather-card__place">{this.props.city}, {this.props.country}</h3>
                <p className="weather-card__date">{this.date}</p>
                <h4 className="weather-card__description">Today is {this.props.base}</h4>
                <div className="weather-card__temp-block">

                    <img src={`http://openweathermap.org/img/w/${this.props.icon}.png`} alt="weather"
                         className="weather-card__temp-block__image"/>
                    <p className="weather-card__temp-block__temp">{this.temp}&deg;C</p>
                </div>
                <ul className="weather-card__value-list">
                    <li className="weather-card__value-list__item">Humidity
                        <span className="weather-card__value-list__item__value">  {this.props.humidity}</span>%
                    </li>
                    <li className="weather-card__value-list__item">Wind
                        <span className="weather-card__value-list__item__value">  {this.props.wind}</span>m/s
                    </li>
                    <li className="weather-card__value-list__item">Pressure
                        <span className="weather-card__value-list__item__value">  {this.props.pressure}</span></li>
                </ul>
                <button onClick={this.getWeather} className="weather-card__button button">Get Weather</button>
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
        wind: state.api.weather.wind,
        pressure: state.api.weather.pressure,
        base: state.api.weather.base,
        date: state.api.weather.date,
        icon: state.api.weather.icon,
        lat: state.map.marker.position.lat,
        lng: state.map.marker.position.lng,
        isFetching: state.api.isFetching
    }
}

export default connect(mapStateToProps)(WeatherCard);
