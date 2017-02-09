import React, {Component} from 'react';
import {connect} from 'react-redux';
import WeatherCard from '../components/weatherCard';
import PlacesList from '../components/placesList';
import {fetchWeather} from '../actions/getWeatherAction';
import {measureTempF, measureTempC} from '../actions/getWeatherAction';

class MyPlaces extends Component {
    getWeather = (lat, lng) => {
        this.props.dispatch(fetchWeather(lat, lng, 'place'));
    };

    tempToF = () => {
        this.props.dispatch(measureTempF());
    };

    tempToC = () => {
        this.props.dispatch(measureTempC());
    };

    options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        timezone: 'UTC'
    };

    render() {
        const {weather, settings, places} = this.props;
        return (
            <div>
                <PlacesList
                    places={places}
                    getPlaceWeather={this.getWeather}/>
                <WeatherCard
                    weather={weather}
                    settings={settings}
                    options={this.options}
                    tempToF={this.tempToF}
                    tempToC={this.tempToC}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        weather: state.weather.placeWeather.data,
        settings: state.settings,
        marker: state.map.marker.position,
        places: state.places
    }
};

export default connect(mapStateToProps)(MyPlaces);
