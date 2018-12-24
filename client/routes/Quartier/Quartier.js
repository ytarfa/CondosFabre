import React from 'react';
import ReactDOM from 'react-dom';
import '../../scss/Quartier/main.scss';

import Video from './Video';
import QuartierMap from './QuartierMap';

export default class QuartierContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeFeature: 0,
            zoom: 14,
            center: { lat:  45.517726, lng: -73.576570 }
        }
        this.panMap = this.panMap.bind(this);
    }

    componentDidMount() {
        this.props.pushCurrentRoute(this.props.location.pathname);
    }

    panMap(coordinates) {
        this.refs.map._map.panTo(coordinates)
    }

    componentDidUpdate(prevProps, prevState) {
        if ((this.state.activeFeature == 1) && (prevState.activeFeature != 1)) {
            this.panMap({lat:  45.526461, lng: -73.569323})
        } else if ((this.state.activeFeature == 0) && (prevState.activeFeature != 0)) {
            this.panMap({ lat:  45.517726, lng: -73.576570 })
        } else if ((this.state.activeFeature == 2) && (prevState.activeFeature != 2)) {
            this.panMap({lat:  45.519380, lng: -73.572821})
        }
    }

    static getDerivedStateFromProps(props, state) {
        let activeFeature = 0;
        if(props.position <= 1000) {
            activeFeature = 0;
        } else if (props.position < 1600 && props.position > 1000) {
            activeFeature = 1;
        } else {
            activeFeature = 2;
        }
        return {
            activeFeature: activeFeature
        }
    }

    render() {
        return (
            <div class="Quartier">
                {/* <Video /> */}
                <div style={{
                    position: 'fixed',
                    top: '200px',
                    left: '250px',
                }}>
                    {this.props.position}
                </div>

                <div class="quartier-nav">
                    <ul>
                       <li><p>Parc Lafontaine</p></li> 
                       <li><p>Rue Rachel</p></li> 
                       <li><p>Boulevard Mont-Royal</p></li> 
                       <li><p>Parc Jeanne-Mance</p></li> 
                    </ul>
                </div>

                <div class="map-animation-container">

                    <div class="feature-container">
                        <div class="feature"></div>
                        <div class="feature"></div>
                        <div class="feature"></div>
                    </div>

                    <div class="map-container">
                        <QuartierMap
                            zoom={this.state.zoom}
                            center={this.state.center}
                            markerPosition={{ lat:  45.517726, lng: -73.576570 }}
                            ref='map'
                        />
                    </div>

                </div>

            </div>
        )
    }
}