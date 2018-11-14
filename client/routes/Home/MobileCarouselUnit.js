import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

export default class MobileCarouselUnits extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="mobile-unit" key={this.props.index}>
                <div class="img-container">
                    <p class="condo-id">Condo {this.props.unit._id}</p>
                    <img src={"/images/units/" + this.props.unit.image} />
                </div>

                <div class="description">
                    <div class="price">
                        <p>{this.props.unit.price}</p>
                    </div>
                    <div class="link">
                        <Link 
                            to={this.props.en == true ? "/en/unites/condo" + this.props.unit._id : "/unites/condo" + this.props.unit._id}
                        >
                            {this.props.en == true ? 'More information' : 'Plus d\'information'}
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}