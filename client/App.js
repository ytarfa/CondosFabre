import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
const _ = require('lodash');

import './scss/App.scss';

import HomeContainer from './routes/Home/HomeContainer';
import NavbarContainer from './Navbar/NavbarContainer';
import ProjetContainer from './routes/Projet/ProjetContainer';
import QuartierContainer from './routes/Quartier/QuartierContainer';
import UnitesContainer from './routes/Unites/UnitesContainer';

export default class App extends React.Component{

    constructor(props){
        super(props);
        this.pushScrollPosition = this.pushScrollPosition.bind(this);
    }

    pushScrollPosition() {
        this.props.pushScrollValues([0, document.body.scrollTop])
    }

    componentDidMount() {
        console.log('mounted')
        window.addEventListener('scroll', _.throttle(this.pushScrollPosition, 500));
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', _.throttle(this.pushScrollPosition, 500));
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <NavbarContainer />
                    <Route exact path="/" component={ HomeContainer } />
                    <Route path="/projet" component={ ProjetContainer } />
                    <Route path="/quartier" component={ QuartierContainer } />
                    <Route path="/unites" component={ UnitesContainer } />
                </div>
            </BrowserRouter>
        )
    }
}