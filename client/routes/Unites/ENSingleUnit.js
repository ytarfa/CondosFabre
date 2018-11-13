import React from 'react';
import ReactDOM from 'react-dom';
import '../../scss/SingleUnit/main.scss';

import unitData from '../../units.json';
import SimpleCarousel from '../../components/SimpleCarousel';
import MapComponent from '../../components/MapComponent';
import PlanComponent from './PlanComponent';
import ENFooter from '../../components/ENFooter';

export default class SingleUnit extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
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
                    <SimpleCarousel 
                        imageList={unitData.images}
                    />
                    <div class="quick-info">
                        <h1> Condo {this.props._id} </h1>
                        <p> {this.props.price} </p>
                    </div>
                </div>

                <div class="general-description-section">
                    <div class="general-info">{this.props.description}</div>
                    <div class="features">
                        <ul>
                                <li> <i class="fas fa-bed fa-fw"></i> <p>{this.props.bedrooms} bedrooms</p> </li>
                                <li> <i class="fas fa-bath fa-fw"></i> <p>{this.props.washrooms} washrooms</p> </li>
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
                                    <td>ROOM</td>
                                    <td>FLOOR</td>
                                    <td>DIMENSIONS</td>
                                    <td>FLOORING</td>
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
                            <li><i class="fas fa-map-marker-alt fa-fw"></i><p>4217-4223 Fabre St.</p></li>
                            <li><i class="fas fa-walking fa-fw"></i><p>Walkscore: 94</p></li>
                            <li><i class="fas fa-bicycle fa-fw"></i><p>Bikescore: 100</p></li>
                        </ul>
                        <a href="https://www.walkscore.com/score/4217-rue-fabre-montr%C3%A9al-qc-canada" target="_blank"> More info </a>
                    </div>
                </div>

                <div class="contact-cta-section">
                    <p>Nous vous invitons à venir voir de plus près ce beau projet dans nos bureaux où nous vous avons aménagé une belle salle de montre qui vous permettra de vous projeter dans votre nouveau nid douillet tout neuf...</p>
                    <div class="link-container">
                        <a onClick={this.props.openContactOverlay}> Contact Us ! </a>
                    </div>
                </div>
            <ENFooter />
            </div>
        )
    }
}