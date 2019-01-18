import React from 'react';

export default class ParcMontRoyal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            carouselCounter: 0
        }
        this.carouselCounter = this.carouselCounter.bind(this);
    }

    carouselCounter(x) {
        if (this.state.carouselCounter == -3) {
            if (x==1) {
                this.setState((state) => {
                    return { carouselCounter: state.carouselCounter + x}
                })
            }
        } else if (this.state.carouselCounter == 0) {
            if (x==-1) {
                this.setState((state) => {
                    return { carouselCounter: state.carouselCounter + x}
                })
            }
        } else {
            this.setState((state) => {
                return { carouselCounter: state.carouselCounter + x}
            })
        }
    }

    render() {
        return (
            <div 
                class="feature parc-mont-royal"
                style={{
                    transform: `translateX(${this.props.featureCounter * 100}%)`,
                    opacity: this.props.featureCounter == -3 ? 1 : 0
                }}
            >
                <div class="title">
                    <h1 class="background-title"> Parc Mont-Royal </h1>
                    <h1 class="foreground-title"> Parc Mont-Royal </h1>
                </div>

                <div class="text-container">
                    <p> Vivre au Plateau Mont-Royal c’est aussi vivre au pied de la montagne du Mont-Royal. À seulement quelques minutes, vous pourrez vous resourcer et explorer la nature de Montréal. Été comme hiver, le Mont-Royal regorge d’activités uniques à faire seul avec des amis ou en famille. Un vrai poumon tout juste à côté de chez-soi. </p>
                </div>

                <div class="img-carousel">
                        <div class="img-container"> 
                            <div
                                style={{
                                    transform: 'translateX(' + (this.state.carouselCounter*100) + '%)',
                                    opacity: this.state.carouselCounter == 0 ? 1 : 0
                                }} 
                            >
                                <img src="/images/quartierParcMontRoyal/vue-belvedere.jpg" />
                            </div>
                            <div
                                style={{
                                    transform: 'translateX(' + (this.state.carouselCounter*100) + '%)',
                                    opacity: this.state.carouselCounter == -1 ? 1 : 0
                                }} 
                            >
                                <img src="/images/quartierParcMontRoyal/tam-tam.jpg" />
                            </div>
                        </div>
                        <div class="description-container">
                            <div class="description">

                                <div
                                    style={{
                                        transform: 'translateX(' + (this.state.carouselCounter*100) + '%)',
                                        opacity: this.state.carouselCounter == 0 ? 1 : 0
                                    }}
                                > 
                                    <p>Lorem idivsum dolor amet.</p>
                                </div>

                                <div
                                    style={{
                                        transform: 'translateX(' + (this.state.carouselCounter*100) + '%)',
                                        opacity: this.state.carouselCounter == -1 ? 1 : 0
                                    }}
                                > 
                                    <p>Lorem idivsum dolor amet2.</p>
                                </div>

                            </div>
                            <div class="controls">
                                <div class="button-container">
                                    <button onClick={() => this.carouselCounter(1)}
                                    style={{
                                        opacity: this.state.carouselCounter == 0 ? '0.2' : '1'
                                    }}
                                    > <i class="fas fa-chevron-left fa-3x"></i> </button>
                                    <button onClick={() => this.carouselCounter(-1)}
                                        style={{
                                            opacity: this.state.carouselCounter == -3 ? '0.2' : '1'
                                        }}
                                    > <i class="fas fa-chevron-right fa-3x"></i> </button>
                                </div>
                            </div>
                        </div>
                    </div>

            </div>
        )
    }
}