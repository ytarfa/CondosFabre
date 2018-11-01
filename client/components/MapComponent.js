import React from 'react';
import ReactDOM from 'react-dom';

import { GoogleMap, Marker, withGoogleMap, withScriptjs } from 'react-google-maps';

const Map = withScriptjs(withGoogleMap((props) => {
    //MARKERS

    return (
        <GoogleMap
            defaultZoom={14}
            center={{ lat:  45.529590, lng: -73.571390 }}
            defaultOptions={{
                disableDefaultUI: true
            }}
        ></GoogleMap>
    )
}));

export default class MapContainer extends React.Component {
    render() {
        return (
            <Map
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDD9kCrw_904LVFzIzNndmNTwhZWjzYq8Y&v=3.exp&libraries=geometry,drawing,places`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%`, width: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        )
    }
}