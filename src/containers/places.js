import React, {Component} from 'react';
import {connect} from 'react-redux';
import {modal} from 'react-redux-modal';
import $ from 'min-jquery';
import WeatherCard from '../components/weatherCard';
import PlacesList from '../components/placesList';
import {getWeather} from '../actions/weatherAction';
import {measureTempF, measureTempC} from '../actions/weatherAction';
import ModalSettings from './settings';
import {updatePlaces} from '../actions/placeAction';
import '../styles/myPlaces.css';

class MyPlaces extends Component {
    componentWillMount() {
        let places = this.props.places;
        if (places.length > 0) {
            this.props.dispatch(getWeather(places[0].lat, places[0].lng, 'placeWeather'));
        }
    }

    getWeather = (lat, lng) => {
        this.props.dispatch(getWeather(lat, lng, 'placeWeather'));
    };

    tempToF = () => {
        $('.measure__C').removeClass('active-temp');
        $('.measure__F').addClass('active-temp');
        this.props.dispatch(measureTempF('placeWeather'));
    };

    tempToC = () => {
        $('.measure__F').removeClass('active-temp');
        $('.measure__C').addClass('active-temp');
        this.props.dispatch(measureTempC('placeWeather'));
    };

    static addModal() {
        modal.add(ModalSettings, {
            size: 'small',
            closeOnOutsideClick: true,
            hideTitleBar: true,
        });
    }

    deletePlace = (place) => {
        let places = this.props.places;
        this.props.dispatch(updatePlaces(place, places[0], 'placeWeather'));
    };

    renderPlacesSpace(places, weather, settings, api) {
        if (places.length > 0) {
            return (
                <div className="places-space">
                    <PlacesList
                        places={places}
                        getPlaceWeather={this.getWeather}
                        deletePlace={this.deletePlace}/>
                    <div className="weather-space">
                        {api.isFetching
                            ? <h2 className="weather-space__loader">Loading...</h2>
                            : <WeatherCard
                            weather={weather}
                            settings={settings}
                            tempToF={this.tempToF}
                            tempToC={this.tempToC}/>
                        }
                    </div>
                </div>
            )
        } else {
            return (
                <h2>No places =(</h2>
            )
        }
    }

    render() {
        const {api, weather, settings, places} = this.props;
        return (
            <div className="my-places">
                <div className="button-panel">
                    <button onClick={MyPlaces.addModal} className="settings-button button">Settings</button>
                </div>
                {this.renderPlacesSpace(places, weather, settings, api)}
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
