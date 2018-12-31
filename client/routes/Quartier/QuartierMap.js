import React from 'react';
import { GoogleMap, Marker, withGoogleMap, withScriptjs, Polygon, Polyline } from 'react-google-maps';
import MapElementsContainer from './MapElementsContainer';

const Map = withScriptjs(withGoogleMap((props) => {
    //MARKERS

    return (
        <GoogleMap
            defaultZoom={props.zoom}
            center={props.center}
            defaultOptions={{
                disableDefaultUI: true
            }}
            ref={props.onMapMounted}
        >
            <MapElementsContainer />
        </GoogleMap>
    )
}));

export default class QuartierMap extends React.Component {
    constructor(props) {
        super(props);
    }
    handleMapMounted = (map) => {
        this._map = map;
    }

    render() {
        return (
            <Map
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDD9kCrw_904LVFzIzNndmNTwhZWjzYq8Y&v=3.exp&libraries=geometry,drawing,places`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%`, width: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                zoom={this.props.zoom}
                center={this.props.center}
                markerPosition={this.props.markerPosition}
                onMapMounted={this.handleMapMounted}
                polygonVisible={this.props.polygonVisible}
            />
        )
    }
}