import React from 'react'
import '../styles/css/weatherCard.css';

const GetWeatherButton = ({getWeather, marker}) => (
        <button onClick={() => getWeather(marker.lat, marker.lng)} className="weather-card__button button">Get Weather
        </button>
);

export default GetWeatherButton;