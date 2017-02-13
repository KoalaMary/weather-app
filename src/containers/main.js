import React, {Component} from 'react';
import {connect} from 'react-redux';
import {modal} from 'react-redux-modal';
import ModalSettings from './modalSettings';
import Map from '../components/map';
import WeatherCard from '../components/weatherCard';
import {getWeather} from '../actions/weatherAction';
import {addPlace} from '../actions/placeAction';
import {measureTempF, measureTempC} from "../actions/weatherAction";
import '../styles/main.css';

class Main extends Component {
    componentWillMount() {
        let position = this.props.marker;
        this.props.dispatch(getWeather(position.lat, position.lng, 'mainWeather'));
    }

    addModal() {
        modal.add(ModalSettings, {
            size: 'medium',
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
        this.props.dispatch(measureTempF('mainWeather'));
    };

    tempToC = () => {
        this.props.dispatch(measureTempC('mainWeather'));
    };

    render() {
        const {api, weather, settings, marker} = this.props;
        return (
            <div className="main">
                <div className="button-panel">
                    <button onClick={this.addModal} className="settings-button button">Settings</button>
                    <div className="button-panel__weather-buttons">
                        <button className="button"
                                onClick={() => this.getWeather(marker.lat, marker.lng)}>Get weather
                        </button>
                        <button className="button"
                                onClick={() => this.addPlace(weather)}>Add
                        </button>
                    </div>
                </div>
                <div className="weather-space">
                    <Map />
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
        marker: state.map.marker.position
    }
};

export default connect(mapStateToProps)(Main);
