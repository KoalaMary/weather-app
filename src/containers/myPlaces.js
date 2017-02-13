import React, {Component} from 'react';
import {connect} from 'react-redux';
import {modal} from 'react-redux-modal';
import WeatherCard from '../components/weatherCard';
import PlacesList from '../components/placesList';
import {getWeather} from '../actions/weatherAction';
import {measureTempF, measureTempC} from '../actions/weatherAction';
import ModalSettings from './modalSettings';
import '../styles/myPlaces.css';
import {deletePlace} from '../actions/placeAction';

class MyPlaces extends Component {
    getWeather = (lat, lng) => {
        this.props.dispatch(getWeather(lat, lng, 'placeWeather'));
    };

    tempToF = () => {
        this.props.dispatch(measureTempF('placeWeather'));
    };

    tempToC = () => {
        this.props.dispatch(measureTempC('placeWeather'));
    };

    addModal() {
        modal.add(ModalSettings, {
            size: 'medium',
            closeOnOutsideClick: true,
            hideTitleBar: true,
        });
    }

    deletePlace = (place) => {
        this.props.dispatch(deletePlace(place));
    };

    render() {
        const {api, weather, settings, places} = this.props;
        return (
            <div className="my-places">
                <div className="button-panel">
                    <button onClick={this.addModal} className="settings-button button">Settings</button>
                </div>
                <div className="places-space">
                    <PlacesList
                        places={places}
                        getPlaceWeather={this.getWeather}
                        deletePlace={this.deletePlace}/>
                    {api.isFetching
                        ? <h2 className="weather-space__weather-card__loader">Loading...</h2>
                        : <WeatherCard
                        weather={weather}
                        settings={settings}
                        tempToF={this.tempToF}
                        tempToC={this.tempToC}/>
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        api: state.weather.placeWeather.api,
        weather: state.weather.placeWeather.data,
        settings: state.settings,
        marker: state.map.marker.position,
        places: state.places
    }
};

export default connect(mapStateToProps)(MyPlaces);
