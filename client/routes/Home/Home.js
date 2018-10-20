import React from 'react';

import '../../scss/Home/main.scss';

export default class Home extends React.Component{
    render() {
        return (
            <div class="Home">

                <div class="home-header">
                    <div class="home-carousel">
                        <img src="/images/placeholder.png"/>
                    </div>

                    <div class="info">

                    </div>
                </div>

                <div class="home-units">
                    <div class="title-controls-container">
                        <h1 class="background-title">Unités</h1>
                        <h1 class="title">Unités</h1>
                    </div>

                    <div class="unit-carousel">
                        <div class="unit"><img src="/images/unit-placeholder.jpg"></img></div>
                        <div class="unit"><img src="/images/unit-placeholder.jpg"></img></div>
                        <div class="unit"><img src="/images/unit-placeholder.jpg"></img></div>
                    </div>
                </div>

                <div class="home-quartier">
                    <div class="title-section">
                        <h1 class="background-title">Le Plateau</h1>
                        <h1 class="title">Le Plateau</h1>
                    </div>

                    <div class="quartier-carousel">
                        <img src="/images/quartier-placeholder.jpg"/>
                        <div class="description-control-container">

                        </div>
                    </div>
                </div>

            </div>
        )
    }
}