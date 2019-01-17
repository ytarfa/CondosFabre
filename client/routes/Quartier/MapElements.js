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
                    strokeOpacity: this.props.featureToggle ? 0 : 1, 
                    fillOpacity: this.props.featureToggle ? 0 : 0.3
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
                    strokeOpacity: this.props.featureToggle ? 0 : 1, 
                    fillOpacity: this.props.featureToggle ? 0 : 0.3
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

export default class MapElement extends React.Component{
    render() {

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
                {/* Plateau */}
                <PolygonSpring
                    featureToggle={this.props.feature == 'plateau'}
                    path={mapData.plateau_path}
                />


                {/* Rachel */}
                <PolylineSpring
                    featureToggle={this.props.feature == 'rachel'}
                    path={mapData.rachel_path}
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
                <PolylineSpring
                    styleOptions={{strokeColor: '#EB7200'}}
                    featureToggle={this.props.feature == 'transport'}
                    path={mapData.orangeLine_path}
                />
                <Marker 
                    position={mapData.metroMontRoyal}
                    icon={{
                        url : '/images/circle-solid.svg',
                        anchor: new google.maps.Point(0, 2) 
                    }}
                />
                <Marker 
                    position={mapData.metroSherbrooke}
                    icon={{
                        url : '/images/circle-solid.svg',
                        anchor: new google.maps.Point(0, 2) 
                    }}
                />
                <Marker 
                    position={mapData.metroLaurier}
                    icon={{
                        url : '/images/circle-solid.svg',
                        anchor: new google.maps.Point(0, 2) 
                    }}
                />

                
                {busPathArray.map((busPath) => (
                    <PolylineSpring
                        styleOptions={{strokeColor: '#59BAFF'}}
                        featureToggle={this.props.feature == 'transport'}
                        path={busPath}
                    />
                ))}

            </div>
        )
    }
}