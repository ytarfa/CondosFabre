import React from 'react';
import unitArray from '../../units.json';
import quartierDiapos from './quartierDiapos.json';
import '../../scss/Home/main.scss';

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
            <div class="unit" key={index} 
                style={{
                    transform: 'translate('+ this.state.counter*500 + 'px)',
                    opacity: index == Math.abs(this.state.counter) ? '1' : '0.1',
                    pointerEvents: index == Math.abs(this.state.counter) ? 'auto' : 'none',
                    transition: 'all 0.25s'
                }}
            >
                <img src={"/images/units/" + unit.image} />
            </div>
        )

        const quartierCarousel = quartierDiapos.diapos.map((diapo, index) => 
                <div class="diapo" key={index}
                    style={{
                        top: 0,
                        left: index*700 + "px",
                        // opacity: index == Math.abs(this.state.plateauCounter) ? '1' : '0',
                        transform: 'translate('+ this.state.plateauCounter*700 + 'px)',
                        transition: 'all 0.25s'
                    }}
                >
                    <img src={"/images/quartierCarousel/" + diapo.image} />
                    <div class="description">
                        {diapo.description}
                    </div>
                </div>
        )

        return (
            <div class="Home">

                <div class="home-header">
                    <div class="home-carousel">
                        <img src="/images/facade.jpg"/>
                    </div>

                    <div class="info">

                    </div>
                </div>

                <div class="home-units">
                    <div class="title-controls-container">
                        <h1 class="background-title">Unités</h1>
                        <h1 class="title">Unités</h1>

                        <div class="button-container">
                            <button onClick={() => this.counter(1)}> <i class="fas fa-chevron-left fa-3x"></i> </button>
                            <button onClick={() => this.counter(-1)}> <i class="fas fa-chevron-right fa-3x"></i> </button>
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
                    </div>

                    <button onClick={() => this.plateauCounter(-1)}> - </button>
                    <button onClick={() => this.plateauCounter(1)}> + </button>
                </div>

            </div>
        )
    }
}