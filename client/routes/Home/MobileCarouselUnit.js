import React from 'react';
import ReactDOM from 'react-dom';

export default class MobileCarouselUnits extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="unit" key={this.props.index}>
                <img src={"/images/units/" + this.props.unit.image} />

                <div class="description">
                    <div class="price">
                        <p>{this.props.unit.price}</p>
                    </div>
                    <div class="link">
                        <a href={"/unites/condo" + this.props.unit._id}>Plus d'information</a>
                    </div>
                </div>
            </div>
        )
    }
}