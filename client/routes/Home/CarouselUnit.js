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

                <div class="description">
                    <div class="price">
                        <p>{this.props.price}</p>
                    </div>
                    <div class="info">
                        <ul>
                            <li> <i class="fas fa-bed fa-fw"></i> {this.props.bedrooms} </li>
                            <li> <i class="fas fa-bath fa-fw"></i> {this.props.washrooms} </li>
                            <li> <i class="fas fa-street-view fa-fw"></i> 1200 p<sup>2</sup> </li>
                            <li> <i class="fas fa-building fa-fw"></i> {this.props.floor} </li>
                        </ul>
                    </div>
                    <div class="link">
                        <a href="/unites">Plus d'information</a>
                    </div>
                </div>
            </div>
        )
    }
}