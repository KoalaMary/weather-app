import React, {Component} from 'react';
import Map from '../components/map';
import WeatherCard from '../components/weatherCard';
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
            </div>
        );
    }
}

export default Main;
