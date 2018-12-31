import React from 'react';

import * as mapData from './mapData';
import { Marker, Polygon, Polyline } from 'react-google-maps';
import { Spring } from 'react-spring';

class PolylineSpring extends React.Component{
    render() {
        return (
            <Spring
                from={{
                    strokeOpacity: this.props.featureToggle ? 0 : 1, 
                    fillOpacity: this.props.featureToggle ? 0 : 0.3
                }} 
                to={{
                    strokeOpacity: this.props.featureToggle ? 1 : 0, 
                    fillOpacity: this.props.featureToggle ? 0.3 : 0
                }}
            >
                {springProps => <PolylineSpringContent path={this.props.path} {...springProps} />}

            </Spring>
        )
    }
}
class PolylineSpringContent extends React.Component{
    render() {

        const styleOptions = {
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
                from={{
                    strokeOpacity: this.props.featureToggle ? 0 : 1, 
                    fillOpacity: this.props.featureToggle ? 0 : 0.3
                }} 
                to={{
                    strokeOpacity: this.props.featureToggle ? 1 : 0, 
                    fillOpacity: this.props.featureToggle ? 0.3 : 0
                }}
            >
                {springProps => <PolygonSpringContent path={this.props.path} {...springProps} />}

            </Spring>
        )
    }
}
class PolygonSpringContent extends React.Component{
    render() {

        const styleOptions = {
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

                {/* St-Laurent */}

            </div>
        )
    }
}