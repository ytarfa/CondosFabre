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
                    <div class="mapContainer">
                        <MapComponent/>
                    </div>
                    <div class="formContainer">
                        <button
                            class="closeButton"
                            onClick={this.props.closeOverlay}
                        >
                            <i class="fas fa-times fa-3x"></i>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}