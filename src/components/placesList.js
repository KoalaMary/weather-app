import React from 'react'

const PlacesList = ({places, getPlaceWeather}) => (
    <ul>
        {places.map((place, i) =>
            <li key={i} onClick={() => getPlaceWeather(place.lat, place.lng)}>
                {place.city}, {place.country}
            </li>)}
    </ul>
);

export default PlacesList;
