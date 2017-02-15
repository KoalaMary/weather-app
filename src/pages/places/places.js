import React, {Component} from 'react';
import {connect} from 'react-redux';
import {modal} from 'react-redux-modal';
import $ from 'min-jquery';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import WeatherCard from '../../components/weatherCard';
import PlacesList from './components/placesList';
import {getWeather} from '../../actions/weatherAction';
import {measureTempF, measureTempC} from '../../actions/weatherAction';
import ModalSettings from '../settings/settings';
import {updatePlaces} from '../../actions/placeAction';
import '../../styles/myPlaces.css';

class MyPlaces extends Component {
    field = 'placeWeather';

    componentWillMount() {
        let places = this.props.places;
        if (places.length > 0) {
            this.props.dispatch(getWeather(places[0].lat, places[0].lng, this.field));
        }
    }

    getWeather = (lat, lng) => {
        this.props.dispatch(getWeather(lat, lng, this.field));
    };

    tempToF = () => {
        $('.measure__C').removeClass('active-temp');
        $('.measure__F').addClass('active-temp');
        this.props.dispatch(measureTempF(this.field));
    };

    tempToC = () => {
        $('.measure__F').removeClass('active-temp');
        $('.measure__C').addClass('active-temp');
        this.props.dispatch(measureTempC(this.field));
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
        this.props.dispatch(updatePlaces(place, places[0], this.field));
    };

    renderPlacesSpace(places, weather, settings, api, transitionOptions) {
        if (places.length > 0) {
            return (
                <div className="places-space">
                    <PlacesList
                        places={places}
                        getPlaceWeather={this.getWeather}
                        deletePlace={this.deletePlace}/>
                    {(api.error !== null)
                        ? <h2 className="error">Ooops! No information about this place</h2>
                        : <div className="weather-space">
                        {api.isFetching
                            ? <h2 className="weather-space__loader">Loading...</h2>
                            :
                            <ReactCSSTransitionGroup {...transitionOptions}>
                                <WeatherCard
                                    weather={weather}
                                    settings={settings}
                                    tempToF={this.tempToF}
                                    tempToC={this.tempToC}/>
                            </ReactCSSTransitionGroup>
                        }
                    </div>
                    }
                </div>
            )
        } else {
            return (
                <h2 className="no-places">No places =(</h2>
            )
        }
    }

    render() {
        const {api, weather, settings, places} = this.props;
        const transitionOptions = {
            transitionName: "places",
            transitionAppear: true,
            transitionAppearTimeout: 500,
            transitionEnter: false,
            transitionLeave: false
        };
        return (
            <div className="my-places">
                <div className="button-panel">
                    <button onClick={MyPlaces.addModal} className="settings-button button">Settings</button>
                </div>
                <ReactCSSTransitionGroup {...transitionOptions}>
                    {this.renderPlacesSpace(places, weather, settings, api, transitionOptions)}
                </ReactCSSTransitionGroup>
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
