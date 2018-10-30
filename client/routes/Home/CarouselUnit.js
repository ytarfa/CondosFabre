import React from 'react';
import ReactDOM from 'react-dom';

export default class CarouselUnits extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: this.props.counter
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.counter != this.props.counter) {
            this.setState({counter: this.props.counter})
        }
    }

    render() {
        return (
            <div class="unit" key={this.props.index}
                style={{
                    transform: 'translate('+ this.state.counter*500 + 'px)',
                    opacity: this.props.index == Math.abs(this.state.counter) ? '1' : this.props.index > Math.abs(this.state.counter) ? '0.1': '0',
                    pointerEvents: this.props.index == Math.abs(this.state.counter) ? 'auto' : 'none',
                    transition: 'all 0.25s'
                }}
            >
                <img src={"/images/units/" + this.props.image} />

                <p class="condo-id">{this.props.id}</p>

                <div class="description-section">

                    <div class="price-container">
                        <p> {this.props.price} </p>
                    </div>

                    <div class="info-container">

                        <div class="info">
                            <div>
                                <p> <i class="fas fa-street-view"></i> 1200 p2</p>
                            </div>
                            <div>
                                <p> <i class="fas fa-bed"></i> {this.props.bedrooms} </p>
                            </div>
                            <div>
                                <p> <i class="fas fa-building"></i> {this.props.floor} </p>
                            </div>
                            <div>
                                <p> <i class="fas fa-bath"></i> {this.props.washrooms}</p>
                            </div>
                        </div>
                        
                    </div>

                </div>

                <div class="button-container">
                    <a href="#"> EN SAVOIR PLUS </a>
                </div>
            </div>
        )
    }
}