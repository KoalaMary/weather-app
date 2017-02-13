import React, {Component} from 'react';
import {withGoogleMap, GoogleMap, Marker} from 'react-google-maps';
import {connect} from 'react-redux';
import setMarker from '../actions/setMarkerAction';

const MapArguments = withGoogleMap((props) => (
    <GoogleMap
        defaultZoom={2}
        defaultCenter={props.center}
        onClick={props.onMapClick}
    >
        <Marker position={props.marker.position}/>

    </GoogleMap>
));

class Map extends Component {
    constructor(props) {
        super(props);
        this.handleMapClick = this.handleMapClick.bind(this)
    }

    handleMapClick(event) {
        this.props.dispatch(setMarker(event.latLng));
    }

    render() {
        return (
            <div className="map-container">
                <MapArguments
                    containerElement={
                        <div style={{height: "100%"}}/>
                    }
                    mapElement={
                        <div style={{height: "100%"}}/>
                    }
                    onMapClick={this.handleMapClick}
                    center={this.props.center}
                    marker={this.props.marker}
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        marker: state.map.marker,
        center: state.map.center,
    };
}

export default connect(mapStateToProps)(Map);
