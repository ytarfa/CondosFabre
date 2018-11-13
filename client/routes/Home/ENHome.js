import React from 'react';
import '../../scss/Home/main.scss';
import Footer from '../../components/Footer';
import MapComponent from '../../components/MapComponent';

// Unit Carousel related imports
import unitArray from '../../units.json';
import ENCarouselUnit from './ENCarouselUnit';
import ENMobileCarouselUnit from './ENMobileCarouselUnit';
// Neighborhood Carousel related imports
import quartierDiapos from './quartierDiapos.json';

import LazyImage from '../../components/LazyImage';
import SimpleCarousel from '../../components/SimpleCarousel';

export default class Home extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            plateauCounter: 0
        };
        this.counter = this.counter.bind(this);
        this.plateauCounter = this.plateauCounter.bind(this);
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

    plateauCounter(x) {
        if (this.state.plateauCounter == -2) {
            if (x==1) {
                this.setState((state) => {
                    return { plateauCounter: state.plateauCounter + x}
                })
            }
        } else if (this.state.plateauCounter == 0) {
            if (x==-1) {
                this.setState((state) => {
                    return { plateauCounter: state.plateauCounter + x}
                })
            }
        } else {
            this.setState((state) => {
                return { plateauCounter: state.plateauCounter + x}
            })
        }
    }

    componentWillMount() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    componentDidMount() {
        this.props.pushCurrentRoute(this.props.location.pathname)
    }

    render() {

        const carouselUnits = unitArray.units.map((unit, index) => 
            <ENCarouselUnit 
                index={index}
                counter={this.state.counter}
                unit={unit}
            />
        )
        const mobileCarouselUnits = unitArray.units.map((unit, index) => 
            <ENMobileCarouselUnit 
                index={index}
                counter={this.state.counter}
                unit={unit}
            />
        )

        const quartierCarousel = quartierDiapos.diapos.map((diapo, index) => 
                <div class="diapo" key={index}
                    style={{
                        top: 0,
                        left: index*500 + "px",
                        transform: 'translate('+ this.state.plateauCounter*500 + 'px)',
                        transition: 'all 0.25s'
                    }}
                >
                    <img src={"/images/quartierCarousel/" + diapo.image} />
                    <div class="description">
                        {diapo.description}
                    </div>
                </div>
        )
        const quartierCarouselDescription = quartierDiapos.diapos.map((diapo, index) => 
                    <p 
                        key="index"
                        style= {{
                            opacity: this.state.plateauCounter == -index ? '1' : '0',
                            transition: 'all 0.25s'
                        }}
                    >
                        {diapo.description}
                    </p>
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
                                ['/images//images/units/U2A.jpg', '/images/units/U2A.jpg'],
                                ['/images//images/units/U3A.jpg', '/images/units/U3A.jpg']
                            ]
                        }
                    />
                </div>
                <div class="home-header-intro">
                    <h1> Feel at home at first glance.</h1>
                    <ul>
                        <li><i class="fas fa-map-marker-alt fa-fw"></i> <p>Ideal location in the Plateau</p> </li>
                        <li><i class="fas fa-tree fa-fw"></i> <p>A minute away from beautiful LaFontaine park</p> </li>
                        <li><i class="fas fa-parking fa-fw"></i> <p> Parking spots available </p> </li>
                        <li><i class="fas fa-bicycle fa-fw"></i> <p> Ideal for cycling and walking </p> </li>
                        <li><i class="fas fa-bus fa-fw"></i> <p> Bus and metro stations close by </p> </li>
                    </ul>
                </div>

                <div class="home-units">
                    <div class="title-controls-container">
                        <h1 class="background-title">Units</h1>
                        <h1 class="title">Units</h1>

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
                        <h1 class="background-title">The Plateau</h1>
                        <h1 class="title">The Plateau</h1>
                    </div>

                    <div class="quartier-carousel">
                        <div class="diapos-container"> 
                            {quartierCarousel}
                        </div>
                        <div class="description-container">
                            <div class="description">
                                {quartierCarouselDescription}
                            </div>
                            <div class="controls">
                                <div class="button-container">
                                    <button onClick={() => this.plateauCounter(1)}
                                    style={{
                                        opacity: this.state.plateauCounter == 0 ? '0.2' : '1'
                                    }}
                                    > <i class="fas fa-chevron-left fa-3x"></i> </button>
                                    <button onClick={() => this.plateauCounter(-1)}
                                        style={{
                                            opacity: this.state.plateauCounter == -2 ? '0.2' : '1'
                                        }}
                                    > <i class="fas fa-chevron-right fa-3x"></i> </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="map-container">
                    <MapComponent />
                    
                    <div class="contact-section-container">
                        <div class="contact-section-items">
                            <ul>
                                <li><i class="fas fa-map-marker-alt fa-fw"></i><p>4217-4223 Fabre St.</p></li>
                                <li><i class="fas fa-walking fa-fw"></i><p>Walkscore: 94</p></li>
                                <li><i class="fas fa-bicycle fa-fw"></i><p>Bikescore: 100</p></li>
                            </ul>
                            <ul class="contact-info">
                                <li><i class="fas fa-phone"></i> <p>(514)-597-2121</p> </li>
                                <li><i class="fas fa-envelope"></i> <p>viasamia@gmail.com</p> </li>
                            </ul>
                        </div>
                        
                        <a class="cta"> <p>Interested? Contact us!</p> </a>
                    </div>
                </div>
            
            <Footer />
            </div>
        )
    }
}