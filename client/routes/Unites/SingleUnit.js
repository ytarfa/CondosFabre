import React from 'react';
import ReactDOM from 'react-dom';
import '../../scss/SingleUnit/main.scss';

import MapComponent from '../../components/MapComponent';
import PlanComponent from './PlanComponent';

export default class SingleUnit extends React.Component {
    render() {
        return (
            <div class="SingleUnit">
                <div class="header-container">
                    <img src="/images/units/U1A.jpg"/>
                    <div class="quick-info">
                        <h1> Condo 1A </h1>
                    </div>
                </div>

                <div class="general-description-section">
                    <div class="general-info">D’une superficie totale de 2134 à 2148 pieds carrés, cette unité sur deux étages vous propose un espace de vie généreux et contemporain. Au rez-de-chaussée, vous retrouverez le salon jumelé à la cuisine et la salle à manger, une salle d’eau, ainsi qu’une chambre avec walk-in et salle de bain privée. En descendant au sous-sol, vous atteindrez la salle de séjour ainsi que les deux autres chambres, une salle de bain et un espace de rangement.</div>
                    <div class="features">
                        <ul>
                                <li> <i class="fas fa-bed fa-fw"></i> <p>2+1 chambres</p> </li>
                                <li> <i class="fas fa-bath fa-fw"></i> <p>2+1 salles de bain</p> </li>
                                <li> <i class="fas fa-street-view fa-fw"></i> <p>1200 p<sup>2</sup></p> </li>
                                <li> <i class="fas fa-building fa-fw"></i> <p>Rez-de-Chaussée</p> </li>
                        </ul>
                    </div>
                </div>

                <div class="room-description-section">
                    <div class="room-table">
                    <table>
                        <tbody>
                            <tr class="title-r">
                                <td>PIECE</td>
                                <td>NIVEAU</td>
                                <td>DIMENSIONS</td>
                                <td>REVETEMENT DE SOL</td>
                            </tr>
                            <tr>
                                <td>Salon</td>
                                <td>Rez-de-chaussée</td>
                                <td>17,0 X 11,5</td>
                                <td>Bois</td>
                            </tr>
                            <tr>
                                <td>Cuisine</td>
                                <td>Rez-de-chaussée</td>
                                <td>20,0 X 9,6</td>
                                <td>Ceramique</td>
                            </tr>
                            <tr>
                                <td>Salle à manger</td>
                                <td>Rez-de-chaussée</td>
                                <td>20,0 X 7,3</td>
                                <td>Bois</td>
                            </tr>
                            <tr>
                                <td>Salle de bain</td>
                                <td>Rez-de-chaussée</td>
                                <td>5,6 X 3,2</td>
                                <td>Ceramique</td>
                            </tr>
                            <tr>
                                <td>Chambre</td>
                                <td>Rez-de-chaussée</td>
                                <td>12,4 X 13,10</td>
                                <td>Bois</td>
                            </tr>
                            <tr>
                                <td>Chambre</td>
                                <td>Rez-de-chaussée</td>
                                <td>7,6 X 5,0</td>
                                <td>Ceramique</td>
                            </tr>
                            <tr>
                                <td>Chambre 2</td>
                                <td>Sous-sol</td>
                                <td>12,2 X 14,2</td>
                                <td>Bois</td>
                            </tr>
                            <tr>
                                <td>Chambre 3</td>
                                <td>Sous-sol</td>
                                <td>14,10 X 8,11</td>
                                <td>Bois</td>
                            </tr>
                            <tr>
                                <td>Salle de séjour</td>
                                <td>Sous-sol</td>
                                <td>16,6 X 14,2</td>
                                <td>Bois</td>
                            </tr>
                            <tr>
                                <td>Rangement</td>
                                <td>Sous-sol</td>
                                <td>15,0 X 6,10</td>
                                <td>Bois</td>
                            </tr>
                            <tr>
                                <td>Sale de bain</td>
                                <td>Sous-sol</td>
                                <td>8,11 X 5,10</td>
                                <td>Céramique</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                    <PlanComponent />
                </div>

                <div class="location-description-section">
                    <MapComponent />
                    <div class="score-container">
                        <p class="score-paragraph">Lorem ispum dolor amet. Plateau Mont Royal lorem ipsum.</p>
                        <ul>
                            <li><i class="fas fa-walking fa-fw"></i><p>Walkscore: 94</p></li>
                            <li><i class="fas fa-bicycle fa-fw"></i><p>Bikescore: 94</p></li>
                        </ul>
                        <a> Plus d'information </a>
                    </div>
                </div>

                <div class="contact-cta-section">
                    <p>Nous vous invitons à venir voir de plus près ce beau projet dans nos bureaux où nous vous avons aménagé une belle salle de montre qui vous permettra de vous projeter dans votre nouveau nid douillet tout neuf...</p>
                    <div class="link-container">
                        <a> Contactez Nous ! </a>
                    </div>
                </div>
            </div>
        )
    }
}