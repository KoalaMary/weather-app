import React, {Component} from 'react';
import {connect} from 'react-redux';
import WeatherCard from '../Weather Card/weatherCard';
import PlacesList from './placesList';
import {fetchPlaceWeather} from './placeAction';
import {measureTempF, measureTempC} from '../My Places/placeAction';

class MyPlaces extends Component {
    getPlaceWeather = (place) => {
        this.props.dispatch(fetchPlaceWeather(place.city, place.country));
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
                    getPlaceWeather={this.getPlaceWeather}/>
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
        weather: state.placeWeather.weather,
        settings: state.settings,
        marker: state.map.marker.position,
        places: state.places
    }
};

export default connect(mapStateToProps)(MyPlaces);
