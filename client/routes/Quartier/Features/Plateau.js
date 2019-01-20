import React from 'react';
import LazyImage from '../../../components/LazyImage';

export default class Plateau extends React.Component {
    render() {
        return (
            <div class="feature plateau"
                style={{
                    transform: `translateX(${this.props.featureCounter * 100}%)`,
                    opacity: this.props.featureCounter == 0 ? 1 : 0
                }}
            >
                <div class="title">
                    <h1 class="background-title"> Le Plateau </h1>
                    <h1 class="foreground-title"> Le Plateau </h1>
                </div>

                <div class="content">
                    <div class="img-container houses">
                        <LazyImage preload={"/images/quartier/plateau/houses-scaled.jpg"} hd={"/images/quartier/plateau/houses.jpg"} />
                    </div>
                    <div class="text-container">
                        <p> L’architecture du Plateau Mont-Royal est unique en son genre. Sans doute l’un des quartiers les plus charmants de Montréal avec ses rues bordées d’arbres et ses façades colorées. S’y promener est un réel plaisir en passant d’une ruelle verte à une rue plus typique dégageant toute l’originalité du quartier et inspirant le bonheur de vivre. </p>
                    </div>
                    <div class="img-container nice-trees">
                        <LazyImage preload={"/images/quartier/plateau/nice-trees-scaled.jpg"} hd={"/images/quartier/plateau/nice-trees.jpg"} />
                    </div>
                </div>
                
            </div>
        )
    }
}