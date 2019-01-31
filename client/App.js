import React, {Suspense, lazy} from 'react';
import { Route, Switch } from 'react-router-dom';
import throttle from 'lodash/throttle'
import { TransitionGroup, CSSTransition } from "react-transition-group";

import './scss/App.scss';

import NavbarContainer from './Navbar/NavbarContainer';
import ContactOverlayContainer from './components/ContactOverlayContainer';

import HomeContainer from './routes/Home/HomeContainer';
import QuartierContainer from './routes/Quartier/QuartierContainer';

import units from './units.json';
import ENunits from './ENunits.json';
import SingleUnitContainer from './routes/Unites/SingleUnitContainer';

export default class App extends React.Component{

    constructor(props){
        super(props);
        this.pushScrollPosition = this.pushScrollPosition.bind(this);
    }

    pushScrollPosition() {
        this.props.pushScrollValues([0, document.body.scrollTop])
    }

    componentDidMount() {
        window.addEventListener('scroll', throttle(this.pushScrollPosition, 500));
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', throttle(this.pushScrollPosition, 500));
    }

    render() {

        let unitRoutes = units.units.map((unit, index) => 
            <Route 
                key={index} 
                path={"/unites/condo" + unit._id} 
                render={(props) => < SingleUnitContainer {...unit} pathname={"/unites/condo" + unit._id} en={false}/>}
            />
        )
        let ENunitRoutes = ENunits.units.map((unit, index) => 
            <Route 
                key={index} 
                path={"/en/unites/condo" + unit._id} 
                render={(props) => < SingleUnitContainer {...unit} pathname={"/en/unites/condo" + unit._id} en={true} />}
            />
        )

        return (
            <div>
                <ContactOverlayContainer />
                <NavbarContainer />
                <div>
                    <Route render={({location}) =>
                        <TransitionGroup>
                            <CSSTransition
                                classNames="fade"
                                appear={true}
                                timeout={750}
                                key={location.key}
                            >
                                <Switch location={location}>
                                    <Route exact path="/" component={HomeContainer} />
                                    {unitRoutes}
                                    <Route exact path="/en" component={HomeContainer} />
                                    {ENunitRoutes}
                                    <Route path="/quartier" component={QuartierContainer} />
                                    <Route path="/en/quartier" component={QuartierContainer} />
                                </Switch>
                            </CSSTransition>
                    </TransitionGroup>
                    } />
                </div>
            </div>
        )
    }
}