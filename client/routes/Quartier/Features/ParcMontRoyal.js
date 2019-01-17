import React from 'react';

export default class ParcMontRoyal extends React.Component {
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

            </div>
        )
    }
}