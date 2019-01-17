import React from 'react';
import ReactDOM from 'react-dom';
import '../../scss/Quartier/main.scss';

import Video from './Video';
import QuartierMap from './QuartierMap';
import * as mapData from './mapData';
import Footer from '../../components/Footer';
import Plateau from './Features/Plateau';
import ParcLaFontaine from './Features/ParcLaFontaine';
import AvenueMontRoyal from './Features/AvenueMontRoyal';
import Transport from './Features/Transport';

export default class QuartierContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            featureCounter: 0
        }
        this.counter = this.counter.bind(this);
    }

    componentDidMount() {
        this.props.pushCurrentRoute(this.props.location.pathname);
    }

    counter(x) {

        function scrollReset() {
            setTimeout(() => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                })
            }, 250)
        }

        if (this.state.featureCounter == -3) {
            if (x==1) {
                // scrollReset();
                this.setState((state) => {
                    return { featureCounter: state.featureCounter + x}
                });
            }
        } else if (this.state.featureCounter == 0) {
            if (x==-1) {
                // scrollReset();
                this.setState((state) => {
                    return { featureCounter: state.featureCounter + x}
                });
            }
        } else {
            // scrollReset();
            this.setState((state) => {
                return { featureCounter: state.featureCounter + x}
            })
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState != this.state) {
            if(this.state.featureCounter == 0) {
                this.props.togglePlateau()
            } else if (this.state.featureCounter == -1) {
                this.props.toggleParclafontaine()
            } else if (this.state.featureCounter == -2) {
                this.props.toggleMontRoyal()
            } else if (this.state.featureCounter == -3) {
                this.props.toggleTransport()
            }
        }
    }

    render() {

        return (
            <div class="Quartier">
                <div class="map-animation-container">


                    <div class="feature-container">
                        
                        <Plateau featureCounter={this.state.featureCounter} />
                        <ParcLaFontaine featureCounter={this.state.featureCounter} />
                        <AvenueMontRoyal featureCounter={this.state.featureCounter} />
                        <Transport featureCounter={this.state.featureCounter} />

                        <div class="controls">
                            <div class="button-container">
                                <button onClick={() => this.counter(1)}
                                    style={{
                                        opacity: this.state.featureCounter == 0 ? '0.2' : '1'
                                    }}
                                > <i class="fas fa-chevron-left fa-3x"></i> </button>
                                    
                                <button onClick={() => this.counter(-1)}
                                    style={{
                                        opacity: this.state.featureCounter == -3 ? '0.2' : '1'
                                    }}
                                > <i class="fas fa-chevron-right fa-3x"></i> </button>
                            </div>
                        </div>
                    </div>

                    <div class="map-container">
                        <QuartierMap
                            center={this.props.center}
                            zoom={this.props.zoom}
                        />
                    </div>

                </div>

                <div class="footer-container">
                    {/* <Footer /> */}
                </div>
            </div>
        )
    }
}