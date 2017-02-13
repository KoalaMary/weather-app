import React, {Component} from 'react';
import {connect} from 'react-redux';
import {modal} from 'react-redux-modal';
import $ from 'min-jquery';
import setMarker from '../actions/setMarkerAction';
import {getWeather} from '../actions/weatherAction';
import {addPlace} from '../actions/placeAction';
import {measureTempF, measureTempC} from "../actions/weatherAction";
import WeatherCard from '../components/weatherCard';
import Map from '../components/map';
import ModalSettings from './settings';
import '../styles/main.css';

class Main extends Component {
    constructor(props) {
        super(props);
        this.handleMapClick = this.handleMapClick.bind(this);
    }

    componentWillMount() {
        let position = this.props.position;
        this.props.dispatch(getWeather(position.lat, position.lng, 'mainWeather'));
    }

    addModal() {
        modal.add(ModalSettings, {
            size: 'small',
            closeOnOutsideClick: true,
            hideTitleBar: true,
        });
    }

    getWeather = (lat, lng) => {
        this.props.dispatch(getWeather(lat, lng, 'mainWeather'));
    };

    addPlace = (weather) => {
        this.props.dispatch(addPlace({
            id: weather.id,
            city: weather.city,
            country: weather.country,
            lat: weather.lat,
            lng: weather.lng,
            since: weather.date
        }));
    };

    tempToF = () => {
        $('.measure__C').removeClass('active-temp');
        $('.measure__F').addClass('active-temp');
        this.props.dispatch(measureTempF('mainWeather'));
    };

    tempToC = () => {
        $('.measure__F').removeClass('active-temp');
        $('.measure__C').addClass('active-temp');
        this.props.dispatch(measureTempC('mainWeather'));
    };

    handleMapClick(event) {
        this.props.dispatch(setMarker(event.latLng));
    }

    render() {
        const {api, weather, settings, marker, position, center} = this.props;
        return (
            <div className="main">
                <div className="button-panel">
                    <button onClick={this.addModal} className="settings-button button">Settings</button>
                    <div className="button-panel__weather-buttons">
                        <button className="button"
                                onClick={() => this.getWeather(position.lat, position.lng)}>Get weather
                        </button>
                        <button className="button"
                                onClick={() => this.addPlace(weather)}>Add
                        </button>
                    </div>
                </div>

                <div className="weather-space">
                    <div className="map-container">
                        <Map
                            containerElement={
                                <div style={{height: "100%"}}/>
                            }
                            mapElement={
                                <div style={{height: "100%"}}/>
                            }
                            onMapClick={this.handleMapClick}
                            center={center}
                            marker={marker}
                        />
                    </div>
                    < div className="weather-space__weather-card">
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
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        api: state.weather.mainWeather.api,
        weather: state.weather.mainWeather.data,
        settings: state.settings,
        position: state.map.marker.position,
        marker: state.map.marker,
        center: state.map.center,
    }
};

export default connect(mapStateToProps)(Main);
