import React from 'react';
import unitArray from '../../units.json';
import '../../scss/Home/main.scss';

export default class Home extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            counter: 0
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

        return (
            <div class="Home">

                <div class="home-header">
                    <div class="home-carousel">
                        <img src="/images/placeholder.png"/>
                    </div>

                    <div class="info">

                    </div>
                </div>

                <div class="home-units">
                    <div class="title-controls-container">
                        <h1 class="background-title">Unités</h1>
                        <h1 class="title">Unités</h1>

                        <button onClick={() => this.counter(-1)}> - </button>
                        <button onClick={() => this.counter(1)}> + </button>
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
                        <img src="/images/quartier-placeholder.jpg"/>
                        <div class="description-control-container">

                        </div>
                    </div>
                </div>

            </div>
        )
    }
}