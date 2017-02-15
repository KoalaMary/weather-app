import React, {PropTypes} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../../../styles/placesList.css';

const PlacesList = ({places, getPlaceWeather, deletePlace}) => (
    <ul className="places-list">
        <ReactCSSTransitionGroup
            transitionName="deletePlace"
            transitionEnterTimeout={1000}
            transitionLeaveTimeout={500}>
            {places.map((place) =>
                <li className="places-list__item" key={place.id}>
                    <h4 className="places-list__item__name" onClick={() => getPlaceWeather(place.lat, place.lng)}>
                        {place.city}, {place.country}
                    </h4>
                    <button className="places-list__item__button" onClick={() => deletePlace(place)}>X</button>
                    <p className="places-list__item__since">Watched since {place.since}</p>
                </li>)}
        </ReactCSSTransitionGroup>
    </ul>
);

PlacesList.propTypes = {
    places: PropTypes.array.isRequired,
    getPlaceWeather: PropTypes.func.isRequired,
    deletePlace: PropTypes.func.isRequired,
};

export default PlacesList;
