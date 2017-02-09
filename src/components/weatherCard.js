import React from 'react'
import '../styles/sass/weatherCard.sass';

const WeatherCard = ({weather, settings, options, tempToC, tempToF}) => (
    <div className="weather-card" style={{fontStyle: settings.fontStyle}}>
        <h3 className="weather-card__place">{weather.city}, {weather.country}</h3>
        <p className="weather-card__date">{weather.date}</p>
        <h4 className="weather-card__description">Today is {weather.base}</h4>
        <div className="weather-card__temp-block">
            <img src={`http://openweathermap.org/img/w/${weather.icon}.png`} alt="weather"
                 className="weather-card__temp-block__image"/>
            <p className="weather-card__temp-block__temp">{Math.floor(weather.temp)}&deg;{weather.measure}</p>
            <div className="weather-card__temp-block__measure">
                <button className="weather-card__temp-block__measure__C temp-button" onClick={() => tempToC()}>C
                </button>
                <button className="weather-card__temp-block__measure__F temp-button" onClick={() => tempToF()}>F
                </button>
            </div>
        </div>
        <ul className="weather-card__value-list">
            {settings.humidityChecked &&
            <li className="weather-card__value-list__item">Humidity
                <span className="weather-card__value-list__item__value">  {weather.humidity}</span>%
            </li>
            }
            {settings.windChecked &&
            <li className="weather-card__value-list__item">Wind
                <span className="weather-card__value-list__item__value">  {weather.wind}</span>m/s
            </li>
            }
            {settings.pressureChecked &&
            <li className="weather-card__value-list__item">Pressure
                <span className="weather-card__value-list__item__value">  {weather.pressure}</span>hPa
            </li>
            }
        </ul>
    </div>
);

export default WeatherCard;
