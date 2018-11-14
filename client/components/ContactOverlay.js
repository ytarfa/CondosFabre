import React from 'react';
import ReactDOM from 'react-dom';
import ReactTooltip from 'react-tooltip';

import '../scss/ContactOverlay/main.scss';
import MapComponent from './MapComponent';

export default class ContactOverlay extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            en: false
        }
    }

    componentDidMount() {
        this.setState({en: this.props.route.includes('en')});
    }

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
                        <MapComponent 
                            zoom={14}
                            center={{ lat:  45.517726, lng: -73.576570 }}
                            markerPosition={{ lat:  45.517726, lng: -73.576570 }}
                        />
                    </div>
                    <div class="formContainer">
                        <button
                            class="closeButton"
                            onClick={this.props.closeOverlay}
                        >
                            <i class="fas fa-times fa-2x"></i>
                        </button>

                        <span class="notre-courtier"> {this.state.en == true ? 'Our broker' : 'Notre courtier'} <br/> </span>
                        <span class="contact-title"> Samia Ouertani </span>
                        <div class="samia-info">
                            <img src="/images/samia-ouertani.jpg" />
                            <div class="info">
                                <a href="http://www.viacapitalevendu.com/courtiers/ouertani-samia-1936/" target="_blank" data-tip data-for="via-capitale-tooltip"> <p>Via Capitale du Mont-Royal</p> </a>
                                <ReactTooltip id="via-capitale-tooltip" type="light" className="disabled-tooltip">
                                    <p>{this.state.en == true ? 'Consult Samia\s Via Capitale profile' : 'Consultez le profil Via Capitale de Samia'}</p>
                                </ReactTooltip>
                                <a 
                                    class="google-maps" 
                                    data-tip data-for="google-maps-tooltip"
                                    href="https://goo.gl/maps/a2vLJx4L2TK2" target="_blank"
                                >
                                    <p>152, Mont-Royal Est <br/> Le Plateau-Mont-Royal <br/> Québec H2J 1X8</p>
                                </a>
                                <ReactTooltip id="google-maps-tooltip" type="light" className="disabled-tooltip">
                                    <p>{this.state.en == true ? 'Click here to open in Google Maps' : 'Cliquez ici pour ouvrir dans Google Maps'}</p>
                                </ReactTooltip>
                            </div>
                        </div>
                        <div class="contact-info">
                            <ul>
                                <li> <i class="fas fa-phone fa-fw"></i> <a href="tel:1-514-597-2121" data-tip data-for="phone-tooltip"> 514 597 2121 </a> </li>
                                <ReactTooltip id="phone-tooltip" type="light" className="disabled-tooltip">
                                    <p>{this.state.en == true ?  'Click here to call' : 'Cliquez ici pour appeler'}</p>
                                </ReactTooltip>
                                <li> <i class="fas fa-envelope fa-fw"></i> <a href="mailto:viasamia@gmail.com" data-tip data-for="email-tooltip">viasamia@gmail.com</a> </li>
                                <ReactTooltip id="email-tooltip" type="light" className="disabled-tooltip">
                                    <p>{this.state.en == true ? 'Click here to open your mail app' : 'Cliquez ici pour ouvrir votre application de messagerie'}</p>
                                </ReactTooltip>
                                <li> <i class="fas fa-link fa-fw"></i> <a class="website" href="http://www.viasamia.com" target="_blank" data-tip data-for="website-tooltip">www.viasamia.com</a> </li>
                                <ReactTooltip id="website-tooltip" type="light" className="disabled-tooltip">
                                    <p>{this.state.en == true ? 'Click here to open the website in a new tab' : 'Cliquez ici pour ouvrir le site web dans un nouvel onglet'}</p>
                                </ReactTooltip>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}