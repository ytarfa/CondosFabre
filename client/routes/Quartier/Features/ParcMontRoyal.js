import React from 'react';
import LazyImage from '../../../components/LazyImage';

export default class ParcMontRoyal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            imgCounter: 0
        }
        this.counter = this.counter.bind(this);
    }

    counter(x) {
        if (this.state.imgCounter == -3) {
            if (x==1) {
                this.setState((state) => {
                    return { imgCounter: state.imgCounter + x}
                })
            }
        } else if (this.state.imgCounter == 0) {
            if (x==-1) {
                this.setState((state) => {
                    return { imgCounter: state.imgCounter + x}
                })
            }
        } else {
            this.setState((state) => {
                return { imgCounter: state.imgCounter + x}
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
                    <h1 class="background-title"> {this.props.en ? 'Mont-Royal Park' : 'Parc Mont-Royal'} </h1>
                    <h1 class="foreground-title"> {this.props.en ? 'Mont-Royal Park' : 'Parc Mont-Royal'} </h1>
                </div>

                <div class="text-container">
                    <p> {this.props.en ? 'Living in Le Plateau Mont-Royal is also living at the foot of Mount Royal mountain. Only a few minutes away, you can recharge your batteries and explore Montreal\'s nature. In summer and winter, Mount Royal abounds in unique activities to do alone, with friends or with the family. A true lung right next door to home.' : 'Vivre au Plateau Mont-Royal c’est aussi vivre au pied de la montagne du Mont-Royal. À seulement quelques minutes, vous pourrez vous resourcer et explorer la nature de Montréal. Été comme hiver, le Mont-Royal regorge d’activités uniques à faire seul avec des amis ou en famille. Un vrai poumon tout juste à côté de chez-soi.'} </p>
                </div>

                <div class="img-carousel">

                    <div class="img-container"
                        style={{
                            transform: `translateX(${this.state.imgCounter * 100}%)`
                        }}
                    >
                        <img src="/images/quartier/parcmontroyal/belvedere_view.jpg" />
                    </div>
                    <div class="img-container"
                        style={{
                            transform: `translateX(${this.state.imgCounter * 100}%)`
                        }}
                    >
                        <img src="/images/quartier/parcmontroyal/belvedere_top.jpg" />
                    </div>
                    <div class="img-container"
                        style={{
                            transform: `translateX(${this.state.imgCounter * 100}%)`
                        }}
                    >
                        <img src="/images/quartier/parcmontroyal/volleyball.jpg" />
                        
                    </div>
                    <div class="img-container"
                        style={{
                            transform: `translateX(${this.state.imgCounter * 100}%)`
                        }}
                    >
                        <img src="/images/quartier/parcmontroyal/parcmontroyal_tamtam.jpg" />
                        
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
                            opacity: this.state.imgCounter == -3 ? '0.2' : '1'
                        }}
                    > <i class="fas fa-chevron-right fa-3x"></i> </button>

                </div>

            </div>
        )
    }
}