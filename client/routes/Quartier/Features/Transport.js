import React from 'react';
import ReactTooltip from 'react-tooltip';

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
                    <p>{this.props.en ? 'What better way to live in a lively and pleasant neighbourhood, while enjoying all the nearby transportation facilities, Plateau Mont-Royal meets everyone\'s needs and adapts to your preferences! You like to walk and walk to discover the smallest corners of your beautiful neighbourhood? The layout of the Plateau Mont-Royal allows pedestrians to move freely and easily, so they can go where they want, as they want. Walk through the typical streets and let yourself be charmed.' : 'Quoi de mieux que de pouvoir vivre dans un quartier animé et agréable, tout en profitant de tous les accès de transports à proximité? Le Plateau Mont-Royal répond aux besoins de tout le monde, et s’adapte à vos préférences! Vous aimez vous déplacer à pieds, et marcher pour découvrir les moindres recoins de votre beau quartier? L’agencement du Plateau Mont-Royal permet aux piétons de circuler librement et facilement, pour pouvoir se rendre où ils le veulent, comme ils le veulent. Marchez à travers les rues typiques et laissez-vous charmer.'}</p>
                    <ul>
                        <li><i class="fas fa-walking fa-fw"></i><a href="https://www.walkscore.com/score/4217-rue-fabre-montr%C3%A9al-qc-canada" target="_blank" data-tip data-for="bike-walk-score-tooltip">Walkscore: 94</a></li>
                        <li><i class="fas fa-bicycle fa-fw"></i><a href="https://www.walkscore.com/score/4217-rue-fabre-montr%C3%A9al-qc-canada" target="_blank" data-tip data-for="bike-walk-score-tooltip">Bikescore: 100</a></li>
                    </ul>
                </div>
        
                <div class="stm-text-container">
                    <p>{this.props.en ? 'For those who prefer to use public transporttion, the district offers its many bus lines and several metro entrances. Plateau Mont-Royal acts as a central crossroads between the many entrances that surround it. You will never have any trouble getting to your destination.' : 'Pour ceux qui préfèrent utiliser les transports, le quartier met à disposition ses nombreuses lignes de bus, et plusieurs stations de métro. Le Plateau Mont-Royal agit comme un carrefour central entre les nombreux accès qui l’entourent. Vous n’aurez jamais aucun mal à vous rendre à votre destination.'}</p>
                    <div class="map-intro">
                        <p style={{display: this.props.en ? 'none' : 'block'}}>Vous pouvez voir sur la carte les nombreuses <span class="metro">stations de métro</span> et <span class="bus">lignes de bus</span> à proximité.</p>
                        <p style={{display: this.props.en ? 'block' : 'none'}}> Take a look at the map, you can see the numerous <span class="metro">metro stations</span> and <span class="bus">bus lines</span> close by. </p>
                        <img src="/images/right-arrow-light.png" />
                    </div>
                </div>

                <div class="img-container">
                    <img src="/images/quartierCarousel/plateau-marche.jpg" />
                    <p>{this.props.en ? 'What is missing from this pleasant, lively, accessible neighbourhood? Plateau Mont-Royal is the perfect environment for your family life: your children will thrive in the schools that are located here. The district is self-sufficient because it has a hospital, shops, many restaurants, and daycare centres. Plateau Mont-Royal is not just a neighbourhood, it\'s a lifestyle! Choose a life that borders on perfection, with everything you need within reach... and walking distance.' : 'Que manque-t-il à ce quartier agréable, vivant, et accessible? Le Plateau Mont-Royal est le parfait environnement pour votre vie de famille :  vos enfants s’épanouiront dans les écoles qui s’y trouvent. Le quartier se suffit à lui même, car il possède un hôpital, des commerces, de nombreux restaurants, et des garderies. Le Plateau Mont-Royal n’est pas qu’un quartier, c’est un style de vie! Faites le choix d’une vie frôlant la perfection, avec tout le nécessaire à portée de main.. et de marche.'}</p>
                </div>


            </div>
        )
    }
}