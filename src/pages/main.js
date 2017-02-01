import React, {Component} from 'react';
import Map from '../components/map';
import WeatherCard from '../components/weatherCard';
import GetWeatherButton from '../components/getWeatherButton';
import '../styles/main.css';

class Main extends Component {

    static path = '/';

    render() {
        return (
            <div className="main">
                <div className="info">
                    <Map />
                    <WeatherCard />
                </div>
                <GetWeatherButton />
            </div>
        );
    }
}

export default Main;
