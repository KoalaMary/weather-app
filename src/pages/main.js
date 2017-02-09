import React, {Component} from 'react';
import {connect} from 'react-redux';
import {modal} from 'react-redux-modal';
import ModalSettings from '../Settings/modalSettings';
import Map from '../Map/map';
import WeatherCard from '../Weather Card/weatherCard';
import GetWeatherButton from '../Weather Card/getWeatherButton';
import AddPlaceButton from '../Weather Card/addPlaceButton';
import {fetchWeather} from '../Weather Card/getWeatherAction';
import addPlace from '../My Places/placeAction';
import {measureTempF, measureTempC} from "../Weather Card/getWeatherAction";
import '../styles/css/main.css';

class Main extends Component {

    addModal() {
        modal.add(ModalSettings, {
            size: 'medium',
            closeOnOutsideClick: true,
            hideTitleBar: true,
        });
    }

    getWeather = (lat, lng) => {
        this.props.dispatch(fetchWeather(lat, lng));
    };

    addPlace = (city, country, lat, lng) => {
        this.props.dispatch(addPlace(city, country, lat, lng));
    };

    tempToF = () => {
        console.log('Date', typeof this.props.weather.date);
        this.props.dispatch(measureTempF());
    };

    tempToC = () => {
        this.props.dispatch(measureTempC());
    };

    render() {
        const {api, weather, settings, marker} = this.props;
        return (
            <div className="main">
                <button onClick={this.addModal} className="settings-button">Settings</button>
                <div className="weather-space">
                    <Map />
                    <div className="weather-space__weather-card">
                        <AddPlaceButton
                            weather={weather}
                            addPlace={this.addPlace}/>
                        {api.isFetching
                            ? <h2>Loading...</h2>
                            : <WeatherCard
                                weather={weather}
                                settings={settings}
                                tempToF={this.tempToF}
                                tempToC={this.tempToC}/>
                        }
                        <GetWeatherButton
                            marker={marker}
                            getWeather={this.getWeather}/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        api: state.api,
        weather: state.api.weather,
        settings: state.settings,
        marker: state.map.marker.position
    }
};

export default connect(mapStateToProps)(Main);
