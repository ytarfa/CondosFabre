import React from 'react';
import LazyImage from '../../../components/LazyImage';

export default class ParcLaFontaine extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            imgCounter: 0
        }
        this.counter = this.counter.bind(this);
    }

    counter(x) {
        if (this.state.imgCounter == -2) {
            if (x==1) {
                this.setState((state) => {
                    return { imgCounter: state.imgCounter + x}
                });
            }
        } else if (this.state.imgCounter == 0) {
            if (x==-1) {
                this.setState((state) => {
                    return { imgCounter: state.imgCounter + x}
                });
            }
        } else {
            this.setState((state) => {
                return { imgCounter: state.imgCounter + x}
            })
        }
    }

    render() {
        return (
            <div class="feature parc-lafontaine"
                style={{
                    transform: `translateX(${this.props.featureCounter * 100}%)`,
                    opacity: this.props.featureCounter == -1 ? 1 : 0
                }}
            >
                <div class="title">
                    <h1 class="background-title"> {this.props.en ? 'La Fontaine Park' : 'Parc La Fontaine'} </h1>
                    <h1 class="foreground-title"> {this.props.en ? 'La Fontaine Park' : 'Parc La Fontaine'} </h1>
                </div>

                <div class="text-container">
                    <p> {this.props.en ? 'Located right next to Les Condos Fabre, is one of the most beautiful parks in Montreal: La Fontaine Park. This place is the scene of a multitude of activities, each more enjoyable than the next: sports, running, tennis, walking, or cultural activities! La Fontaine Park is the meeting point for the residents of the district, as it promises to be a wonderful day out. Green spaces are very important, and Plateau Mont-Royal gives you the opportunity to live in a lively and relaxing neighbourhood!' : 'Juste à côté des Condos Fabre, est l’un des plus beaux parcs que connaît Montréal : le parc La Fontaine. Ce lieu est le théâtre d’une multitude d’activités toutes plus sympathiques les unes que les autres : sport, promenade, ou activités culturelles! Le parc La Fontaine est le point de rassemblement des habitants du quartier, car il promet de passer une superbe journée. Les coins de verdure sont très importants, et Le Plateau Mont-Royal vous donne l’occasion de vivre dans un quartier vivant et relaxant!'} </p>
                </div>

                <div class="img-carousel">

                    <div class="img-container"
                        style={{
                            transform: `translateX(${this.state.imgCounter * 100}%)`
                        }}
                    >
                        <LazyImage preload={"/images/quartier/parclafontaine/lake-birds-scaled.jpg"} hd={"/images/quartier/parclafontaine/lake-birds.jpg"} />
                    </div>
                    <div class="img-container"
                        style={{
                            transform: `translateX(${this.state.imgCounter * 100}%)`
                        }}
                    >
                        <LazyImage preload={"/images/quartier/parclafontaine/parclafontaine_ducks-scaled.jpg"} hd={"/images/quartier/parclafontaine/parclafontaine_ducks.jpg"} />
                    </div>
                    <div class="img-container"
                        style={{
                            transform: `translateX(${this.state.imgCounter * 100}%)`
                        }}
                    >
                        <LazyImage preload={"/images/quartier/parclafontaine/parclafontaine_ice-scaled.jpg"} hd={"/images/quartier/parclafontaine/parclafontaine_ice.jpg"} />
                        
                    </div>


                    <button 
                            class="left"
                            onClick={() => this.counter(1)}
                            style={{
                                opacity: this.state.imgCounter == 0 ? '0.2' : '1'
                            }}
                        > <i class="fas fa-chevron-left fa-3x"></i> </button>
                            
                    <button 
                        class="right"
                        onClick={() => this.counter(-1)}
                        style={{
                            opacity: this.state.imgCounter == -2 ? '0.2' : '1'
                        }}
                    > <i class="fas fa-chevron-right fa-3x"></i> </button>

                </div>

            </div>
        )
    }
}