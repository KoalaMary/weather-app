import React, {PropTypes} from 'react';
import '../styles/placesList.css';

const PlacesList = ({places, getPlaceWeather, deletePlace}) => (
    <ul className="places-list">
        {places.map((place) =>
            <li className="places-list__item" key={place.id} onClick={() => getPlaceWeather(place.lat, place.lng)}>
                <h4 className="places-list__item__name">{place.city}, {place.country}</h4>
                <button className="places-list__item__button" onClick={() => deletePlace(place)}>X</button>
                <p className="places-list__item__since">Watched since {place.since}</p>
            </li>)}
    </ul>
);

PlacesList.propTypes = {
    places: PropTypes.array.isRequired,
    getPlaceWeather: PropTypes.func.isRequired,
    deletePlace: PropTypes.func.isRequired,
};

export default PlacesList;
