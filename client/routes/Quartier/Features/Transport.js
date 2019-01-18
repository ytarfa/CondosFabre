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

                <div class="intro-text-container">
                    <p>Quoi de mieux que de pouvoir vivre dans un quartier animé et agréable, tout en profitant de tous les accès de transports à proximité? Le Plateau Mont-Royal répond aux besoins de tout le monde, et s’adapte à vos préférences! Vous aimez vous déplacer à pieds, et marcher pour découvrir les moindres recoins de votre beau quartier? L’agencement du Plateau Mont-Royal permet aux piétons de circuler librement et facilement, pour pouvoir se rendre où ils le veulent, comme ils le veulent. Marchez à travers les rues typiques et laissez-vous charmer.</p>
                    <ul>
                        {/* <ReactTooltip id="google-maps-tooltip" type="light" className="disabled-tooltip" place="bottom">
                            <p>{this.props.en == true ? 'Click here to open in Google Maps' : 'Cliquer pour ouvrir dans Google Maps'}</p>
                        </ReactTooltip> */}
                        <li><i class="fas fa-walking fa-fw"></i><a href="https://www.walkscore.com/score/4217-rue-fabre-montr%C3%A9al-qc-canada" target="_blank" data-tip data-for="bike-walk-score-tooltip">Walkscore: 94</a></li>
                        <li><i class="fas fa-bicycle fa-fw"></i><a href="https://www.walkscore.com/score/4217-rue-fabre-montr%C3%A9al-qc-canada" target="_blank" data-tip data-for="bike-walk-score-tooltip">Bikescore: 100</a></li>
                        {/* <ReactTooltip id="bike-walk-score-tooltip" type="light" className="disabled-tooltip" place="bottom">
                            <p>{this.props.en == true ? 'Click here to learn more about Walkscore' : 'Cliquez ici pour en apprendre plus sur Walkscore.'}</p>
                        </ReactTooltip> */}
                    </ul>
                </div>
        
                <div class="stm-text-container">
                    <p>Pour ceux qui préfèrent utiliser les transports, le quartier met à disposition ses nombreuses lignes de bus, et plusieurs entrées de métro. Le Plateau Mont-Royal agit comme un carrefour central entre les nombreux accès qui l’entourent. Vous n’aurez jamais aucun mal à vous rendre à votre destination.</p>
                    <div class="map-intro">
                        <p>Vous pouvez voir sur la carte les nombreuses <span class="metro">stations de métro</span> et <span class="bus">lignes de bus</span> à proximité.</p>
                        <img src="/images/right-arrow-light.png" />
                    </div>
                </div>

                <div class="img-container">
                    <img src="/images/quartierCarousel/plateau-marche.jpg" />
                    <p>Que manque-t-il à ce quartier agréable, vivant, et accessible? Le Plateau Mont-Royal est le parfait environnement pour votre vie de famille :  vos enfants s’épanouiront dans les écoles qui s’y trouvent. Le quartier se suffit à lui même, car il possède un hôpital, des commerces, de nombreux restaurants, et des garderies. Le Plateau Mont-Royal n’est pas qu’un quartier, c’est un style de vie! Faites le choix d’une vie frôlant la perfection, avec tout le nécessaire à portée de main.. et de marche.</p>
                </div>


            </div>
        )
    }
}