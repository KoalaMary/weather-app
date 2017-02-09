import React from 'react'

const PlacesList = ({places, getPlaceWeather}) => (
    <ul>
        {places.map((place, i) =>
            <li key={i} onClick={() => getPlaceWeather(place)}>
                {place.city}, {place.country}
            </li>)}
    </ul>
);

export default PlacesList;
