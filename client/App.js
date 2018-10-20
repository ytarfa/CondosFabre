import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
const _ = require('lodash');

import './scss/App.scss';

import HomeContainer from './routes/Home/HomeContainer';
import NavbarContainer from './Navbar/NavbarContainer';

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
                </div>
            </BrowserRouter>
        )
    }
}