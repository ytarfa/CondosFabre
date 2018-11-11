import React from 'react';
import '../../scss/Home/main.scss';

// Unit Carousel related imports
import unitArray from '../../units.json';
import CarouselUnit from './CarouselUnit';
// Neighborhood Carousel related imports
import quartierDiapos from './quartierDiapos.json';

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

    componentDidMount() {
        this.props.pushCurrentRoute(this.props.location.pathname)
    }

    render() {

        const carouselUnits = unitArray.units.map((unit, index) => 
            <CarouselUnit 
                index={index}
                counter={this.state.counter}
                image={unit.image}
                price={unit.price}
                bedrooms={unit.bedrooms}
                washrooms={unit.washrooms}
                floor={unit.floor}
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
            <div class="Home">

                <div class="home-header">
                    <div class="home-carousel">
                        <img src="/images/facade.jpg"/>
                    </div>
                </div>
                <div class="home-header-intro">
                    <h1> Sentez vous à la maison au premier regard.</h1>
                    <ul>
                        <li><i class="fas fa-map-marker-alt fa-fw"></i> <p>Emplacement idéal au sein du Plateau</p> </li>
                        <li><i class="fas fa-tree fa-fw"></i> <p>À deux pieds du parc LaFontaine</p> </li>
                        <li><i class="fas fa-parking fa-fw"></i> <p> Places de parking disponibles </p> </li>
                        <li><i class="fas fa-bicycle fa-fw"></i> <p> Location idéale pour se déplacer à pied ou à vélo </p> </li>
                        <li><i class="fas fa-bus fa-fw"></i> <p> Lignes de bus et métros à proximité </p> </li>
                    </ul>
                </div>

                <div class="home-units">
                    <div class="title-controls-container">
                        <h1 class="background-title">Unités</h1>
                        <h1 class="title">Unités</h1>

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
                </div>

                <div class="home-quartier">
                    <div class="title-section">
                        <h1 class="background-title">Le Plateau</h1>
                        <h1 class="title">Le Plateau</h1>
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

            </div>
        )
    }
}