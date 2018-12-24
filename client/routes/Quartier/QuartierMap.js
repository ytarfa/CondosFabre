import React from 'react';
import ReactDOM from 'react-dom';
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from 'react-google-maps';
import map from 'lodash/map';

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
            <Marker 
                // position={{ lat:  45.529591, lng: -73.571390 }}
                position={props.markerPosition}
            />
        </GoogleMap>
    )
}));

export default class QuartierMap extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            mapMounted: false
        }
    }

    handleMapMounted = (map) => {
        this._map = map;
        this.setState({mapMounted: this._map});
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
            />
        )
    }
}