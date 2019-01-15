import React from 'react';

export default class AvenueMontRoyal extends React.Component {
    render() {
        return (
            <div class="feature avenue-montroyal"
                style={{
                    transform: `translateX(${this.props.featureCounter * 100}%)`,
                    opacity: this.props.featureCounter == -2 ? 1 : 0
                }}
            >

                <div class="title">
                    <h1 class="foreground-title"> Avenue Mont-Royal </h1>
                    <h1 class="background-title"> Avenue Mont-Royal </h1>
                </div>

                <div class="text-container">
                    <p>Le Plateau Mont-Royal est un quartier jeune et dynamique. On y trouve sans doute les meilleurs bars et pubs de la ville. C’est l’endroit idéal pour se détendre autour d’un bon verre et prendre du bon temps. Les styles de cafés qui s’y trouvent se comptent par dizaines et offrent une large gamme de produits, de décorations intérieure, d’ambiances et d'atmosphères.</p>
                </div>

                <div class="img-container">
                    <img src="/images/quartierCarousel/plateau-restaurant.jpg" />
                    <p> La restauration ne manque pas sur le Plateau Mont-Royal. C’est le quartier parfait pour bruncher entre amis. De la cuisine la plus classique à la plus originale, une panoplie de saveurs s’offrent au palais. on y trouve également certains des restaurants les plus célèbres de Montréal comme La Banquise et sa fameuse poutine ou bien Saint Viateur et ses délicieux Bagels. </p>
                </div>


            </div>
        )
    }
}