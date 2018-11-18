import React from 'react';
import ReactDOM from 'react-dom';
import '../../scss/Projet/main.scss';

import LazyImage from '../../components/LazyImage';
import Features from './Features';
import Timeline from './Timeline';
export default class ProjetContainer extends React.Component {

    componentDidMount() {
        this.props.pushCurrentRoute(this.props.location.pathname)
    }

    render() {
        return (
            <div class="Projet">
                <div class="projet-header-container">
                    <LazyImage hd="/images/maquette-placeholder.jpg" pre="/images/maquette-placeholder.jpg" />
                </div>
                <div class="maquette-promotion">
                    <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h1>
                    <div class="maquette-info">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel. Turpis massa sed elementum tempus egestas sed. Risus sed vulputate odio ut enim blandit. Neque aliquam vestibulum morbi blandit cursus risus at.</p>
                        <ul>
                            <li><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></li>
                            <li><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></li>
                            <li><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></li>
                            <li><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></li>
                        </ul>
                    </div>
                </div>
                <Features />
                <Timeline />
            </div>
        )
    }
}