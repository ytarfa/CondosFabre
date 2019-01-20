import React from 'react';
import { GoogleMap, Marker, withGoogleMap, withScriptjs, Polygon, Polyline } from 'react-google-maps';
import { Spring } from 'react-spring';
import MapElementsContainer from './MapElementsContainer';
import mapStyles from './mapStyles';

const Map = withScriptjs(withGoogleMap((props) => {
    //MARKERS

    return (
        <GoogleMap
            center={props.center}
            zoom={props.zoom}
            options={{
                disableDefaultUI: true,
                styles: mapStyles,
                gestureHandling: 'none',
                zoomControl: false
            }}
        >
            <MapElementsContainer />
        </GoogleMap>
    )
}));

export default class QuartierMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prevZoom: this.props.zoom,
            prevCenter: {...this.props.center}
        }
    }

    componentDidUpdate(prevProps) {
        if(this.props.zoom != prevProps.zoom) {
            this.setState({prevZoom: prevProps.zoom});
        }
        if(this.props.center != prevProps.center) {
            this.setState({
                prevCenter:{
                    lat: prevProps.center.lat,
                    lng: prevProps.center.lng
                }
            });
        }
    }

    render() {
        return (
            <Spring
                immediate={true}
                config={{
                    tension: 280,
                    friction: 200
                }}
                from={{
                    zoom: this.state.prevZoom,
                    lat: this.state.prevCenter.lat,
                    lng: this.state.prevCenter.lng
                }}
                to={{
                    zoom: this.props.zoom,
                    lat: this.props.center.lat,
                    lng: this.props.center.lng
                }}
            >
                {springProps => (<Map
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDD9kCrw_904LVFzIzNndmNTwhZWjzYq8Y&v=3.exp&libraries=geometry,drawing,places`}
                    loadingElement={<div style={{ height: `100%`, width: `100%` }} />}
                    containerElement={<div style={{ height: `100%`, width: `100%` }} />}
                    mapElement={<div style={{ height: `100%`, width: `100%` }} />}
                    zoom={springProps.zoom}
                    center={{lat: springProps.lat, lng: springProps.lng}}
                />)}
            </Spring>
        )
    }
}