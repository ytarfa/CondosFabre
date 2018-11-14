import React from 'react';
import ReactDOM from 'react-dom';
import '../../scss/SingleUnit/main.scss';
import ReactTooltip from 'react-tooltip';

import unitData from '../../units.json';
import SimpleCarousel from '../../components/SimpleCarousel';

import MapComponent from '../../components/MapComponent';
import PlanComponent from './PlanComponent';
import Footer from '../../components/Footer';

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
                        className={'single-unit-carousel'}
                    />
                    <div class="quick-info">
                        <h1> Condo {this.props._id} </h1>
                        <span></span>
                        <p> {this.props.price} </p>
                    </div>
                </div>

                <div class="general-description-section">
                    <div class="general-info">{this.props.description}</div>
                    <div class="features">
                        <ul>
                                <li> <i class="fas fa-bed fa-fw"></i> <p>{this.props.bedrooms} {this.props.en == true ? 'bedrooms' : 'chambres'}</p> </li>
                                <li> <i class="fas fa-bath fa-fw"></i> <p>{this.props.washrooms} {this.props.en == true ? 'bathrooms' : 'salles de bain'} </p> </li>
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
                                    <td>{this.props.en == true ? 'ROOM' : 'PIECE'}</td>
                                    <td>{this.props.en == true ? 'FLOOR' : 'NIVEAU'}</td>
                                    <td>DIMENSIONS</td>
                                    <td>{this.props.en == true ? 'FLOORING' : 'REVETEMENT DE SOL'}</td>
                                </tr>
                                {tableRows}
                            </tbody>
                        </table>
                    </div>
                    <PlanComponent unit_id={this.props._id}/>
                </div>

                <div class="location-description-section">
                    <MapComponent 
                        zoom={15}
                        center={{ lat: 45.530326, lng: -73.560793 }}
                        markerPosition={{ lat:  45.529591, lng: -73.571390 }}
                    />
                    <div class="score-container">
                        <ul>
                            <li>
                                <i class="fas fa-map-marker-alt fa-fw"></i>
                                <a 
                                    class="google-maps" 
                                    data-tip data-for="google-maps-tooltip"
                                    href="https://goo.gl/maps/mmLLC1pKGds" target="_blank"
                                > 
                                4217-4223 {this.props.en == true ? 'Fabre St.' : 'Rue Fabre'}
                                </a>
                            </li>
                            <ReactTooltip id="google-maps-tooltip" type="light" className="disabled-tooltip" place="bottom">
                                <p>{this.props.en == true ? 'Click here to open in Google Maps' : 'Cliquer pour ouvrir dans Google Maps'}</p>
                            </ReactTooltip>
                            <li><i class="fas fa-walking fa-fw"></i><a href="https://www.walkscore.com/score/4217-rue-fabre-montr%C3%A9al-qc-canada" target="_blank" data-tip data-for="bike-walk-score-tooltip">Walkscore: 94</a></li>
                            <li><i class="fas fa-bicycle fa-fw"></i><a href="https://www.walkscore.com/score/4217-rue-fabre-montr%C3%A9al-qc-canada" target="_blank" data-tip data-for="bike-walk-score-tooltip">Bikescore: 100</a></li>
                            <ReactTooltip id="bike-walk-score-tooltip" type="light" className="disabled-tooltip" place="bottom">
                                <p>{this.props.en == true ? 'Click here to learn more about Walkscore' : 'Cliquez ici pour en apprendre plus sur Walkscore.'}</p>
                            </ReactTooltip>
                        </ul>
                        <a data-tip data-for="unit-coming-soon"> Le Plateau </a>
                        <ReactTooltip id="unit-coming-soon" type="light" className="disabled-tooltip" place="bottom">
                            <p>{this.props.en == true ? 'Coming soon !' : 'Prochainement disponible !'}</p>
                        </ReactTooltip>
                    </div>
                </div>

                <div class="contact-cta-section">
                    <p>Nous vous invitons à venir voir de plus près ce beau projet dans nos bureaux où nous vous avons aménagé une belle salle de montre qui vous permettra de vous projeter dans votre nouveau nid douillet tout neuf...</p>
                    <div class="link-container">
                        <a onClick={this.props.openContactOverlay}> {this.props.en == true ? 'Contact Us' : 'Contactez Nous'} </a>
                    </div>
                </div>
                <Footer en={this.props.en}/>
            </div>
        )
    }
}