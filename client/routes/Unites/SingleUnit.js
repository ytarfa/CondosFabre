import React from 'react';
import ReactDOM from 'react-dom';
import '../../scss/SingleUnit/main.scss';

import LazyImage from '../../components/LazyImage';

import MapComponent from '../../components/MapComponent';
import PlanComponent from './PlanComponent';

export default class SingleUnit extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.pushCurrentRoute(this.props.pathname);
    }

    render() {

        let tableRows = this.props.rooms_table.map((room, index) =>
        <tr key={index}>
            <td>{room[0]}</td>
            <td>{room[1]}</td>
            <td>{room[2]}</td>
            <td>{room[3]}</td>
        </tr>
        )

        return (
            <div class="SingleUnit page">
                <div class="header-container">
                    {/* <img src="/images/units/U1A.jpg"/> */}
                    <LazyImage hd="/images/units/U1A.jpg" preload="/images/units/U1A-scaled.jpg" />
                    <div class="quick-info">
                        <h1> Condo {this.props._id} </h1>
                    </div>
                </div>

                <div class="general-description-section">
                    <div class="general-info">{this.props.description}</div>
                    <div class="features">
                        <ul>
                                <li> <i class="fas fa-bed fa-fw"></i> <p>{this.props.bedrooms} chambres</p> </li>
                                <li> <i class="fas fa-bath fa-fw"></i> <p>{this.props.washrooms} salles de bain</p> </li>
                                <li> <i class="fas fa-street-view fa-fw"></i> <p>{this.props.area} p<sup>2</sup></p> </li>
                                <li> <i class="fas fa-building fa-fw"></i> <p>{this.props.floor.full}</p> </li>
                        </ul>
                    </div>
                </div>

                <div class="room-description-section">
                    <div class="room-table">
                        <table>
                            <tbody>
                                <tr class="title-r">
                                    <td>PIECE</td>
                                    <td>NIVEAU</td>
                                    <td>DIMENSIONS</td>
                                    <td>REVETEMENT DE SOL</td>
                                </tr>
                                {tableRows}
                            </tbody>
                        </table>
                    </div>
                    <PlanComponent unit_id={this.props._id}/>
                </div>

                <div class="location-description-section">
                    <MapComponent />
                    <div class="score-container">
                        <ul>
                            <li><i class="fas fa-map-marker-alt fa-fw"></i><p>4217-4223 Rue Fabre</p></li>
                            <li><i class="fas fa-walking fa-fw"></i><p>Walkscore: 94</p></li>
                            <li><i class="fas fa-bicycle fa-fw"></i><p>Bikescore: 100</p></li>
                        </ul>
                        <a href="https://www.walkscore.com/score/4217-rue-fabre-montr%C3%A9al-qc-canada" target="_blank"> Plus d'information </a>
                    </div>
                </div>

                <div class="contact-cta-section">
                    <p>Nous vous invitons à venir voir de plus près ce beau projet dans nos bureaux où nous vous avons aménagé une belle salle de montre qui vous permettra de vous projeter dans votre nouveau nid douillet tout neuf...</p>
                    <div class="link-container">
                        <a> Contactez Nous ! </a>
                    </div>
                </div>
            </div>
        )
    }
}