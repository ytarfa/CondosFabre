import React, {Suspense, lazy} from 'react';
import { Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import './scss/App.scss';

import NavbarContainer from './Navbar/NavbarContainer';
import ContactOverlayContainer from './components/ContactOverlayContainer';

import HomeContainer from './routes/Home/HomeContainer';
import QuartierContainer from './routes/Quartier/QuartierContainer';

import units from './units.json';
import ENunits from './ENunits.json';
import SingleUnitContainer from './routes/Unites/SingleUnitContainer';
import ProjetContainer from './routes/Projet/ProjetContainer';

export default class App extends React.Component{

    constructor(props){
        super(props);
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
                                    <Route path="/projet" component={ ProjetContainer } />
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