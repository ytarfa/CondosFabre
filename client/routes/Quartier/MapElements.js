import React from 'react';

import * as mapData from './mapData';

import { Marker, Polygon, Polyline } from 'react-google-maps';

export default class MapElement extends React.Component{
    render() {
        return (
            <div>
                {/* Plateau */}
                <Polygon
                    path={mapData.plateau_path}
                    visible={this.props.feature == 'plateau'}
                />

                {/* Rachel */}
                <Polyline
                    path={mapData.rachel_path}
                    visible={this.props.feature == 'rachel'}
                />

                {/* Parc Lafontaine */}
                <Polygon
                    path={mapData.parclafontaine_path}
                    visible={this.props.feature == 'parclafontaine'}
                />

                {/* Mont-Royal */}
                <Polyline
                    path={mapData.montRoyal_path}
                    visible={this.props.feature == 'montroyal'}
                />

                {/* St-Laurent */}
                {/* <Polyline

                /> */}

            </div>
        )
    }
}