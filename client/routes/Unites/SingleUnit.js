import React from 'react';
import ReactDOM from 'react-dom';
import '../../scss/SingleUnit/main.scss';

export default class SingleUnit extends React.Component {
    render() {
        return (
            <div class="SingleUnit">
                <div class="header-container">
                    <img src="/images/units/U1A.jpg"/>
                    <h1> Condo 1A </h1>
                </div>

                <div class="general-description-section">
                    <div class="general-info">D’une superficie totale de 2134 à 2148 pieds carrés, cette unité sur deux étages vous propose un espace de vie généreux et contemporain. Au rez-de-chaussée, vous retrouverez le salon jumelé à la cuisine et la salle à manger, une salle d’eau, ainsi qu’une chambre avec walk-in et salle de bain privée. En descendant au sous-sol, vous atteindrez la salle de séjour ainsi que les deux autres chambres, une salle de bain et un espace de rangement.</div>
                    <div class="general-description">
                        {/* <h2> Avantages </h2> */}
                        <ul>
                            <li> <i class="fas fa-angle-right"></i> Facade design aux lignes très épurées </li>
                            <li> <i class="fas fa-angle-right"></i> Toiture elastometre </li>
                            <li> <i class="fas fa-angle-right"></i> Robinetterie haut de gamme </li>
                            <li> <i class="fas fa-angle-right"></i> Chauffage par convecteur </li>
                            <li> <i class="fas fa-angle-right"></i> Thermopompe et air climatisé mural </li>
                            <li> <i class="fas fa-angle-right"></i> Échangeur d'air </li>
                        </ul>
                    </div>
                    <div class="features"></div>
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
                    <div class="plan">
                        <img src="/images/units/plan1A.jpg" />
                    </div>
                </div>

                <div class="location-description-section">
                    {/* MAP */}
                    <div class="neighborhood-container"></div>
                </div>

                <div class="contact-cta-section">
                    <p>Nous vous invitons à venir voir de plus près ce beau projet dans nos bureaux où nous vous avons aménagé une belle salle de montre qui vous permettra de vous projeter dans votre nouveau nid douillet tout neuf...</p>
                    <a> Contact Button </a>
                </div>
            </div>
        )
    }
}