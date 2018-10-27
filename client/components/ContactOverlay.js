import React from 'react';
import ReactDOM from 'react-dom';

import '../scss/ContactOverlay/main.scss';
import MapComponent from './MapComponent';

export default class ContactOverlay extends React.Component {
    render() {


        return (
            <div class="ContactOverlay"
                style={{
                    display: this.props.open == true ? 'block' : 'none'
                }}
            >
                <div class="overlay">
                    <button
                        onClick={this.props.closeOverlay}
                    >X</button>
                    <div class="mapContainer">
                        <MapComponent/>
                    </div>
                    <div class="formContainer"></div>
                </div>
            </div>
        )
    }
}