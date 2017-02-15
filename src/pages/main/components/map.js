import React, {PropTypes} from 'react';
import {withGoogleMap, GoogleMap, Marker} from 'react-google-maps';

const Map = withGoogleMap(({center, marker, onMapClick}) => (
    <GoogleMap
        defaultZoom={2}
        defaultCenter={center}
        onClick={onMapClick}
    >
        <Marker position={marker.position}/>

    </GoogleMap>
));

Map.propTypes = {
    center: PropTypes.object.isRequired,
    marker: PropTypes.object.isRequired,
    onMapClick: PropTypes.func.isRequired,
};

export default Map;
