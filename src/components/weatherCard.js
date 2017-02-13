import React from 'react'
import '../styles/weatherCard.css';

const WeatherCard = ({weather, settings, date, tempToC, tempToF}) => (
    <div className="weather-card" style={{fontStyle: settings.fontStyle}}>
        <h2 className="weather-card__place">{weather.city}, {weather.country}</h2>
        <p className="weather-card__date">{weather.date}</p>
        <h4 className="weather-card__description">Today is {weather.base}</h4>
        <div className="temp-block">
            <img src={`http://openweathermap.org/img/w/${weather.icon}.png`} alt="weather"
                 className="temp-block__image"/>
            <p className="temp-block__temp">{Math.floor(weather.temp)}&deg;{weather.measure}</p>
            <div className="measure">
                <button className="measure__C temp-button" onClick={() => tempToC()}>C
                </button>
                <button className="measure__F temp-button" onClick={() => tempToF()}>F
                </button>
            </div>
        </div>
        <ul className="value-list">
            {settings.humidityChecked &&
            <li className="value-list__item">Humidity
                <span className="value-list__item__value">  {weather.humidity}</span>%
            </li>
            }
            {settings.windChecked &&
            <li className="value-list__item">Wind
                <span className="value-list__item__value">  {weather.wind}</span>m/s
            </li>
            }
            {settings.pressureChecked &&
            <li className="value-list__item">Pressure
                <span className="value-list__item__value">  {weather.pressure}</span>hPa
            </li>
            }
        </ul>
    </div>
);

export default WeatherCard;
