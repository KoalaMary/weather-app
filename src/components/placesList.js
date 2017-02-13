import React from 'react'

const PlacesList = ({places, getPlaceWeather, deletePlace}) => (
    <ul className="places-list">
        {places.map((place) =>
            <li className="places-list__item" key={place.id} onClick={() => getPlaceWeather(place.lat, place.lng)}>
                <h4>{place.city}, {place.country}</h4>
                <p>Watched since {place.since}</p>
            <button onClick={() => deletePlace(place)}>Delete</button>
            </li>)}
    </ul>
);

export default PlacesList;
