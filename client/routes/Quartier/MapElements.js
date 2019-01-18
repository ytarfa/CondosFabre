import React from 'react';

import * as mapData from './mapData';
import { Marker, Polygon, Polyline } from 'react-google-maps';
import { Spring } from 'react-spring';

class PolylineSpring extends React.Component{
    render() {
        return (
            <Spring
                delay={250}
                config={{
                    tension: 280,
                    friction: 60
                }}
                from={{
                    strokeOpacity: 0,
                    fillOpacity: 0
                }} 
                to={{
                    strokeOpacity: this.props.featureToggle ? 1 : 0, 
                    fillOpacity: this.props.featureToggle ? 0.3 : 0
                }}
            >
                {springProps => <PolylineSpringContent path={this.props.path} styleOptions={this.props.styleOptions} {...springProps} />}

            </Spring>
        )
    }
}
class PolylineSpringContent extends React.Component{
    render() {

        const styleOptions = this.props.styleOptions ? this.props.styleOptions : {
            strokeColor: '#DB4437'
        }

        return (
            <Polyline
                path={this.props.path}
                options={{
                    ...styleOptions,
                    strokeOpacity: this.props.strokeOpacity
                }}
            />
        )
    }
}

class PolygonSpring extends React.Component{
    render() {
        return (
            <Spring
                delay={250}
                config={{
                    tension: 280,
                    friction: 60
                }}
                from={{
                    strokeOpacity: 0,
                    fillOpacity: 0
                }} 
                to={{
                    strokeOpacity: this.props.featureToggle ? 1 : 0, 
                    fillOpacity: this.props.featureToggle ? 0.3 : 0
                }}
            >
                {springProps => <PolygonSpringContent path={this.props.path} styleOptions={this.props.styleOptions} {...springProps} />}

            </Spring>
        )
    }
}
class PolygonSpringContent extends React.Component{
    render() {

        const styleOptions = this.props.styleOptions ? this.props.styleOptions : {
            strokeColor: '#DB4437',
            fillColor: '#DB4437'
        }

        return (
            <Polygon
                path={this.props.path}
                options={{
                    ...styleOptions,
                    fillOpacity: this.props.fillOpacity,
                    strokeOpacity: this.props.strokeOpacity
                }}
            />
        )
    }
}

class MarkerSpring extends React.Component {
    render() {
        return (
            <Spring
                delay={250}
                config={{
                    tension: 280,
                    friction: 60
                }}
                from={{
                    opacity: 0
                }} 
                to={{
                    opacity: this.props.featureToggle ? 1 : 0
                }}
            >
                {springProps => <MarkerSpringContent position={this.props.position} icon={this.props.icon} {...springProps} />}

            </Spring>
        )
    }
}

class MarkerSpringContent extends React.Component {
    render() {
        return (
            <Marker
                position={this.props.position}
                icon={this.props.icon}
                opacity={this.props.opacity}
            />
        )
    }
}

export default class MapElement extends React.Component{
    render() {

        const metroPositionArray = [
            mapData.metroLaurier,
            mapData.metroMontRoyal,
            mapData.metroSherbrooke,
            mapData.metroBeaubien,
            mapData.metroRosemont,
            mapData.metroJeanTalon
        ]

        const busPathArray = [
            mapData.rachelBusPath,
            mapData.parcDuMontRoyalBusPath,
            mapData.amherstBusPath,
            mapData.saintDenisBusPath,
            mapData.montRoyalBusPath,
            mapData.saintJosephBusPath,
            mapData.coteSainteCatherineBusPath,
            mapData.massonBusPath,
            mapData.sherbrookeBusPath
        ]

        return (
            <div>
                {/* Condos Faber */}
                <MarkerSpring
                    featureToggle={true}
                    position={{lat: 45.529591, lng: -73.571390}}
                    icon={{
                        url: '/images/cf_pin.png'
                    }}
                />

                {/* Plateau */}
                <PolygonSpring
                    featureToggle={this.props.feature == 'plateau'}
                    path={mapData.plateau_path}
                />

                {/* Parc Lafontaine */}
                <PolygonSpring
                    featureToggle={this.props.feature == 'parclafontaine'}
                    path={mapData.parclafontaine_path}
                />

                {/* Mont-Royal */}
                <PolylineSpring
                    featureToggle={this.props.feature == 'montroyal'}
                    path={mapData.montRoyal_path}
                />

                {/* Transport */}
                {busPathArray.map((busPath) => (
                    <PolylineSpring
                        styleOptions={{
                            strokeColor: '#59BAFF',
                            strokeWeight: 2.5
                        }}
                        featureToggle={this.props.feature == 'transport'}
                        path={busPath}
                    />
                ))}
                <PolylineSpring
                    styleOptions={{
                        strokeColor: '#EB7200',
                        strokeWeight: 5
                    }}
                    featureToggle={this.props.feature == 'transport'}
                    path={mapData.orangeLine_path}
                />
                {metroPositionArray.map((metroPosition) => (
                    <MarkerSpring
                        featureToggle={this.props.feature == 'transport'}
                        position={metroPosition}
                        icon={{
                            url : '/images/subway-icon.svg',
                            anchor: new google.maps.Point(0, 2) 
                        }}
                    />
                ))}

            </div>
        )
    }
}