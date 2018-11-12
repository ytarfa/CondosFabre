import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
const _ = require('lodash');

import './scss/App.scss';

import NavbarContainer from './Navbar/NavbarContainer';
import ContactOverlayContainer from './components/ContactOverlayContainer';

import HomeContainer from './routes/Home/HomeContainer';
import ProjetContainer from './routes/Projet/ProjetContainer';
import QuartierContainer from './routes/Quartier/QuartierContainer';
import UnitesContainer from './routes/Unites/UnitesContainer';

import units from './units.json';
import SingleUnit from './routes/Unites/SingleUnit';

export default class App extends React.Component{

    constructor(props){
        super(props);
        this.pushScrollPosition = this.pushScrollPosition.bind(this);
    }

    pushScrollPosition() {
        this.props.pushScrollValues([0, document.body.scrollTop])
    }

    componentDidMount() {
        window.addEventListener('scroll', _.throttle(this.pushScrollPosition, 500));
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', _.throttle(this.pushScrollPosition, 500));
    }

    render() {

        let unitRoutes = units.units.map((unit, index) => 
            <Route path={"/unites/condo" + unit._id} component={ SingleUnit } key={index} />
        )

        return (
            <BrowserRouter>
                <div>
                    <ContactOverlayContainer />
                    <NavbarContainer />
                    <Route exact path="/" component={ HomeContainer } />
                    <Route path="/projet" component={ ProjetContainer } />
                    <Route path="/quartier" component={ QuartierContainer } />
                    <Route exact path="/unites" component={ UnitesContainer } />
                    {unitRoutes}
                </div>
            </BrowserRouter>
        )
    }
}