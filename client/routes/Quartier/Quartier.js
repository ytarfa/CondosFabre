import React from 'react';
import ReactDOM from 'react-dom';
import '../../scss/Quartier/main.scss';

import Video from './Video';
import QuartierMap from './QuartierMap';
import * as mapData from './mapData';
import LazyImage from '../../components/LazyImage';
import Footer from '../../components/Footer';
import CarouselComponent from './CarouselComponent';

export default class QuartierContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            featureCounter: 0,
        }
        this.panMap = this.panMap.bind(this);
        this.counter = this.counter.bind(this);
    }

    componentDidMount() {
        this.props.pushCurrentRoute(this.props.location.pathname);
    }

    counter(x) {
        if (this.state.featureCounter == -2) {
            if (x==1) {
                this.setState((state) => {
                    return { featureCounter: state.featureCounter + x}
                });
            }
        } else if (this.state.featureCounter == 0) {
            if (x==-1) {
                this.setState((state) => {
                    return { featureCounter: state.featureCounter + x}
                });
            }
        } else {
            this.setState((state) => {
                return { featureCounter: state.featureCounter + x}
            })
        }
    }

    panMap(coordinates) {
        this.refs.map._map.panTo(coordinates);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState != this.state) {
            if(this.state.featureCounter == 0) {
                this.props.togglePlateau()
                // this.panMap()
            } else if (this.state.featureCounter == -1) {
                this.props.toggleRachel()
                // this.panMap()
            } else if (this.state.featureCounter == -2) {
                this.props.toggleParclafontaine()
                // this.panMap()
            }
        }
    }

    render() {

        return (
            <div class="Quartier">
                <div class="map-animation-container">

                    <div class="feature-container">

                        <div class="feature lafontaine" style={{
                            left: `${this.state.featureCounter * 100}%`,
                            opacity: this.state.featureCounter == 0 ? 1 : 0
                        }}>
                            <div class="title">
                                <h1 class="background-title"> Le Plateau </h1>
                                <h1 class="foreground-title"> Le Plateau </h1>
                            </div>
                            {/* <Video /> */}
                            {/* <CarouselComponent array={[{imageScaled: 'plateau-park-scaled.jpg', image: 'plateau-park.jpg', description: 'hi'}, {imageScaled: 'plateau-park-scaled.jpg', image: 'plateau-park.jpg', description: 'hi'}]}/> */}
                        </div>

                        <div class="feature lafontaine" style={{
                            left: `${(this.state.featureCounter+1) * 100}%`,
                            opacity: this.state.featureCounter == -1 ? 1 : 0
                        }}>
                            <div class="title">
                                <h1 class="background-title"> Rue Rachel </h1>
                                <h1 class="foreground-title"> Rue Rachel </h1>
                            </div>
                        </div>

                        <div class="feature lafontaine" style={{
                            left: `${(this.state.featureCounter+2) * 100}%`,
                            opacity: this.state.featureCounter == -2 ? 1 : 0
                        }}>
                            <div class="title">
                                <h1 class="background-title"> Parc Lafontaine </h1>
                                <h1 class="foreground-title"> Parc Lafontaine </h1>
                            </div>
                        </div>

                        <div class="controls">
                            <div class="button-container">
                                <button onClick={() => this.counter(1)}
                                    style={{
                                        opacity: this.state.featureCounter == 0 ? '0.2' : '1'
                                    }}
                                > <i class="fas fa-chevron-left fa-3x"></i> </button>
                                <button onClick={() => this.counter(-1)}
                                    style={{
                                        opacity: this.state.featureCounter == -2 ? '0.2' : '1'
                                    }}
                                > <i class="fas fa-chevron-right fa-3x"></i> </button>
                            </div>
                        </div>

                        <div class="footer-container">
                            <Footer />
                        </div>
                    </div>

                    <div class="map-container">
                        <QuartierMap
                            zoom={this.props.zoom}
                            center={this.props.center}
                            ref='map'
                        />
                    </div>
                </div>
            </div>
        )
    }
}