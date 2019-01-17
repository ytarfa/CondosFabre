import React from 'react';

export default class Transport extends React.Component {
    render() {
        return (
            <div class="feature transport"
                style={{
                    transform: `translateX(${this.props.featureCounter * 100}%)`,
                    opacity: this.props.featureCounter == -4 ? 1 : 0
                }}
            >

                <div class="title">
                    <h1 class="background-title"> Transport </h1>
                    <h1 class="foreground-title"> Transport </h1>
                </div>

                <div class="stm-text-container">
                    <p>Quoi de mieux que de pouvoir vivre dans un quartier animé et agréable, tout en profitant de tous les accès de transports à proximité? Le Plateau Mont-Royal répond aux besoins de tout le monde, et s’adapte à vos préférences! Vous aimez vous déplacer à pieds, et marcher pour découvrir les moindres recoins de votre beau quartier? L’agencement du Plateau Mont-Royal permet aux piétons de circuler librement et facilement, pour pouvoir se rendre où ils le veulent, comme ils le veulent. Marchez à travers les rues typiques et laissez-vous charmer.</p>
                </div>
        
                <div class="stm-text-container">
                    <p>Pour ceux qui préfèrent utiliser les transports, le quartier met à disposition ses nombreuses lignes de bus, et plusieurs entrées de métro. Le Plateau Mont-Royal agit comme un carrefour central entre les nombreux accès qui l’entourent. Vous n’aurez jamais aucun mal à vous rendre à votre destination.</p>
                </div>

                <div class="img-container">
                    <img src="/images/quartierCarousel/plateau-marche.jpg" />
                    <p>Que manque-t-il à ce quartier agréable, vivant, et accessible? Le Plateau Mont-Royal est le parfait environnement pour votre vie de famille :  vos enfants s’épanouiront dans les écoles qui s’y trouvent. Le quartier se suffit à lui même, car il possède un hôpital, des commerces, de nombreux restaurants, et des garderies. Le Plateau Mont-Royal n’est pas qu’un quartier, c’est un style de vie! Faites le choix d’une vie frôlant la perfection, avec tout le nécessaire à portée de main.. et de marche.</p>
                </div>


            </div>
        )
    }
}