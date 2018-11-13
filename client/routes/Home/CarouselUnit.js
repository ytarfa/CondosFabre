import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

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
                    transition: 'all 0.25s'
                }}
            >
                <div class="img-container">
                    <img src={"/images/units/" + this.props.unit.image} />
                </div>

                <div class="description">
                    <div class="price">
                        <p>{this.props.unit.price}</p>
                    </div>
                    <div class="info">
                        <ul>
                            <li> <i class="fas fa-bed fa-fw"></i> {this.props.unit.bedrooms} </li>
                            <li> <i class="fas fa-bath fa-fw"></i> {this.props.unit.washrooms} </li>
                            <li> <i class="fas fa-street-view fa-fw"></i> 1200 p<sup>2</sup> </li>
                            <li> <i class="fas fa-building fa-fw"></i> {this.props.unit.floor.short} </li>
                        </ul>
                    </div>
                    <div class="link">
                        <Link
                            to={this.props.en == true ? "/en/unites/condo" +this.props.unit._id : "/unites/condo" +  this.props.unit._id}
                            style={{
                                pointerEvents: this.props.index == Math.abs(this.state.counter) ? 'all' : 'none'
                            }}
                        >{this.props.en == true ? 'More information' : 'Plus d\'information'}</Link>
                    </div>
                </div>
            </div>
        )
    }
}