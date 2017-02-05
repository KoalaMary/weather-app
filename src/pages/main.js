import React, {Component} from 'react';
import {connect} from 'react-redux';
import Map from '../Map/map';
import WeatherCard from '../Weather Card/weatherCard';
import './main.css';

class Main extends Component {

    static path = '/';

    render() {
        return (
            <div className="main">
                <Map />
                <div className="main__weather-card">
                    {!this.props.isFetching &&
                    <WeatherCard />
                    }
                    <div className="main__weather-card__loading">
                        {this.props.isFetching &&
                        <h2>Loading...</h2>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        isFetching: state.api.isFetching,
        fetched: state.api.fetched
    }
}

export default connect(mapStateToProps)(Main);
