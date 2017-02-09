import React from 'react'
import '../styles/css/weatherCard.css';

const AddPlaceButton = ({weather, settings, addPlace, tempToC, tempToF}) => (
        <button className="weather-card__add-to-my-place button"
                onClick={() => addPlace(weather.city, weather.country, weather.lat, weather.lng)}>Add
        </button>
);

export default AddPlaceButton;
