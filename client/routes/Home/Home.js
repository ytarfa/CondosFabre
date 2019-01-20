import React from 'react';
import '../../scss/Home/main.scss';
import ReactTooltip from 'react-tooltip';
import { Link } from 'react-router-dom';

import Footer from '../../components/Footer';
import MapComponent from '../../components/MapComponent';
import SimpleCarousel from '../../components/SimpleCarousel';

// Unit Carousel related imports
import unitArray from '../../units.json';
import CarouselUnit from './CarouselUnit';
import MobileCarouselUnit from './MobileCarouselUnit';
// Neighborhood Carousel related imports
import quartierDiapos from './quartierDiapos.json';
import LazyImage from '../../components/LazyImage';

export default class Home extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            en: false
        };
        this.counter = this.counter.bind(this);
    }

    counter(x) {
        if (this.state.counter == -5) {
            if (x == 1) {
                this.setState((state) => {
                    return { counter: state.counter + x }
                });
            }
        } else if (this.state.counter ==  0) {
            if (x == -1) {
                this.setState((state) => {
                    return { counter: state.counter + x }
                }); 
            }
        } else {
            this.setState((state) => {
                return { counter: state.counter + x }
            });
        }
    }

    componentWillMount() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    componentDidMount() {
        this.props.pushCurrentRoute(this.props.location.pathname);
        if (this.props.location.pathname.includes('/en')) {
            this.setState({en: true})
        } else {
            this.setState({en: false})
        }
    }

    render() {

        const carouselUnits = unitArray.units.map((unit, index) => 
            <CarouselUnit 
                en={this.state.en}
                index={index}
                counter={this.state.counter}
                unit={unit}
            />
        )
        const mobileCarouselUnits = unitArray.units.map((unit, index) => 
            <MobileCarouselUnit 
                en={this.state.en}
                index={index}
                counter={this.state.counter}
                unit={unit}
            />
        )

        return (
            <div class="Home page">

                <div class="home-header">
                    <SimpleCarousel 
                        class="home-carousel" 
                        imageList={
                            [
                                ['/images/facade-cropped-scaled.jpg', '/images/facade-cropped.jpg'],
                                ['/images/units/U1A-scaled.jpg', '/images/units/U1A.jpg'],
                                ['/images/units/U2A-scaled.jpg', '/images/units/U2A.jpg'],
                                ['/images/units/U3A-scaled.jpg', '/images/units/U3A.jpg']
                            ]
                        }
                    />
                </div>
                <div class="delivery-date">{this.state.en ? (<h1>On sale now. <br/> Delivery July 2019</h1>) : (<h1>En vente dès maintenant. <br/> Livraison en Juillet 2019 </h1>)}</div>

                <div class="home-header-intro">
                    <h1> {this.state.en == true ? 'Feel at home at first glance' : 'Sentez vous à la maison au premier regard.'}</h1>
                    <ul>
                        <li><i class="fas fa-map-marker-alt fa-fw"></i> <p> {this.state.en ? 'Prime location in the Plateau' : 'Emplacement idéal au coeur du Plateau'} </p> </li>
                        <li><i class="fas fa-tree fa-fw"></i> <p> {this.state.en ? 'A skip away from beautiful LaFontaine park' : 'À deux pas du parc LaFontaine'}</p> </li>
                        <li><i class="fas fa-parking fa-fw"></i> <p> {this.state.en ? 'Parking spots available' : 'Places de parking disponibles'} </p> </li>
                        <li><i class="fas fa-bicycle fa-fw"></i> <p> {this.state.en ? 'Ideal for cycling and walking' : 'Location idéale pour se déplacer à pied ou à vélo'} </p> </li>
                        <li><i class="fas fa-bus fa-fw"></i> <p> {this.state.en ? 'Bus and metro stations close by' : 'Lignes de bus et métros à proximité'} </p> </li>
                    </ul>
                </div>
                <div class="intro-paragraph">
                    <p>{this.state.en ? 'Condos Fabre is the result of the thorough work of devoted professionals that have real estate, not only as a job, but also as a passion. The idea for this project is to offer brand new spacious and luminous spaces in one of Montreal’s most dynamic and lively neighborhoods.' : 'Condos Fabre est le fruit d’un travail minutieux de professionnels dévoués qui ont l’habitat comme métier mais également comme passion. Le concept est de pouvoir offrir des espaces de vie spacieux, lumineux et neufs  dans l’un des quartiers les plus sympathiques et les plus dynamiques de Montréal. '}</p>
                </div>

                <div class="home-units">
                    <div class="title-controls-container">
                        <h1 class="background-title">{this.state.en ? 'Units' : 'Unités' }</h1>
                        <h1 class="title">{this.state.en ? 'Units' : 'Unités' }</h1>

                        <div class="button-container">
                            <button onClick={() => this.counter(1)}
                                style={{
                                    opacity: this.state.counter == 0 ? '0.2' : '1'
                                }}
                            > <i class="fas fa-chevron-left fa-3x"></i> </button>
                            <button onClick={() => this.counter(-1)}
                                style={{
                                    opacity: this.state.counter == -5 ? '0.2' : '1'
                                }}
                            > <i class="fas fa-chevron-right fa-3x"></i> </button>
                        </div>
                    </div>

                    <div class="unit-carousel">
                        {carouselUnits}
                    </div>
                    <div class="mobile-scroll-wrapper">
                        <div class="mobile-unit-carousel">
                            {mobileCarouselUnits}
                        </div>
                    </div>
                </div>

                <div class="home-quartier">
                    <div class="title-section">
                        <h1 class="background-title">{this.state.en ? 'The Plateau' : 'Le Plateau'} </h1>
                        <h1 class="title">{this.state.en ? 'The Plateau' : 'Le Plateau'} </h1>
                    </div>

                    <div class="video-container">
                        <iframe width="80%" height="500vh" src="https://www.youtube.com/embed/bUi3H7lArNc" frameborder="0" autoplay="1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>

                    <div class="link-container">
                        <Link to="/quartier"> <p>En apprendre plus</p> <img src="/images/right-arrow-light.png" /></Link>
                    </div>
                </div>

                <div class="map-container">
                    <MapComponent 
                        zoom={15}
                        center={{ lat: 45.530326, lng: -73.560793 }}
                        markerPosition={{ lat: 45.529591, lng: -73.571390 }}
                    />
                    
                    <div class="contact-section-container">
                        <div class="contact-section-items">
                            <ul>
                                <li>
                                    <i class="fas fa-map-marker-alt fa-fw"></i>
                                    <a 
                                        class="google-maps" 
                                        data-tip data-for="google-maps-tooltip"
                                        href="https://goo.gl/maps/mmLLC1pKGds" target="_blank"
                                    >
                                    4217-4223 {this.state.en ? 'Fabre St.' : 'Rue Fabre'}</a>
                                </li>
                                <ReactTooltip id="google-maps-tooltip" type="light" className="disabled-tooltip" place="bottom">
                                    <p>{this.state.en == true ? 'Click here to open in Google Maps' : 'Cliquez ici pour ouvrir dans Google Maps'}</p>
                                </ReactTooltip>
                                <li><i class="fas fa-walking fa-fw"></i><a href="https://www.walkscore.com/score/4217-rue-fabre-montr%C3%A9al-qc-canada" target="_blank" data-tip data-for="bike-walk-score-tooltip">Walkscore: 94</a></li>
                                <li><i class="fas fa-bicycle fa-fw"></i><a href="https://www.walkscore.com/score/4217-rue-fabre-montr%C3%A9al-qc-canada" target="_blank" data-tip data-for="bike-walk-score-tooltip">Bikescore: 100</a></li>
                                <ReactTooltip id="bike-walk-score-tooltip" type="light" className="disabled-tooltip" place="bottom">
                                    <p>{this.state.en == true ? 'Click here to learn more about Walkscore' : 'Cliquez ici pour en apprendre plus sur Walkscore.'}</p>
                                </ReactTooltip>
                            </ul>
                            <ul class="contact-info">
                                <li><i class="fas fa-phone"></i> <a href="tel:1-514-572-1213" data-tip data-for="phone-tooltip"> 514 572 1213 </a> </li>
                                <ReactTooltip id="phone-tooltip" type="light" className="disabled-tooltip">
                                    <p>{this.state.en == true ?  'Click here to call' : 'Cliquez ici pour appeler'}</p>
                                </ReactTooltip>
                                <li><i class="fas fa-envelope"></i> <a href="mailto:viasamia@gmail.com" data-tip data-for="email-tooltip">viasamia@gmail.com</a> </li>
                                <ReactTooltip id="email-tooltip" type="light" className="disabled-tooltip">
                                    <p>{this.state.en == true ? 'Click here to open your mail app' : 'Cliquez ici pour ouvrir votre application de messagerie'}</p>
                                </ReactTooltip>
                            </ul>
                        </div>
                        
                        <a class="cta" onClick={this.props.openContactOverlay}> <p>{this.state.en ? 'Interested? Contact us!' : 'Intéressés? Contactez nous!'}</p> </a>
                    </div>
                </div>
            
            <Footer en={this.state.en}/>
            </div>
        )
    }
}