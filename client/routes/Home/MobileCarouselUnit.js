import React from 'react';
import ReactDOM from 'react-dom';

export default class MobileCarouselUnits extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="unit" key={this.props.index}>
                <img src={"/images/units/" + this.props.image} />

                <div class="description">
                    <div class="price">
                        <p>{this.props.price}</p>
                    </div>
                    {/* <div class="info">
                        <ul>
                            <li> <i class="fas fa-bed fa-fw"></i> {this.props.bedrooms} </li>
                            <li> <i class="fas fa-bath fa-fw"></i> {this.props.washrooms} </li>
                            <li> <i class="fas fa-street-view fa-fw"></i> 1200 p<sup>2</sup> </li>
                            <li> <i class="fas fa-building fa-fw"></i> {this.props.floor} </li>
                        </ul>
                    </div> */}
                    <div class="link">
                        <a href="/unites">Plus d'information</a>
                    </div>
                </div>
            </div>
        )
    }
}