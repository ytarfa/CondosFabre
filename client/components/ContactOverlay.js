import React from 'react';
import ReactDOM from 'react-dom';

import '../scss/ContactOverlay/main.scss';
import MapComponent from './MapComponent';

export default class ContactOverlay extends React.Component {
    render() {


        return (
            <div class="ContactOverlay"
                style={{
                    pointerEvents: this.props.open == true ? 'all' : 'none',
                    opacity: this.props.open == true ? '1' : '0'
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
                            <i class="fas fa-times fa-2x"></i>
                        </button>

                        <span class="notre-courtier"> {this.props.route.includes('en') ? 'Our broker' : 'Notre courtier'} <br/> </span>
                        <span class="contact-title"> Samia Ouertani </span>
                        <div class="samia-info">
                            <img src="/images/samia-ouertani.jpg" />
                            <div class="info">
                                <p> Via Capitale du Mont-Royal</p>
                                <p> 152, Mont-Royal Est <br/> Le Plateau-Mont-Royal <br/> Québec H2J 1X8</p>
                            </div>
                        </div>
                        <div class="contact-info">
                            <ul>
                                <li> <i class="fas fa-phone fa-fw"></i> 514-999-3433</li>
                                <li> <i class="fas fa-envelope fa-fw"></i> viasamia@gmail.com</li>
                                <li> <i class="fas fa-link fa-fw"></i> <a href="http://www.viasamia.com" target="_blank">www.viasamia.com</a> </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}