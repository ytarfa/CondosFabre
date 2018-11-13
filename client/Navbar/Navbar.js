import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import '../scss/Navbar/base.scss';
import ReactTooltip from 'react-tooltip';
import units from '../units.json';

export default class Navbar extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            active: false,
            route: '/',
            en: false
        }
    }

    static getDerivedStateFromProps(props, state, prevProps) {
        let enRegex = RegExp('\/en');
        if (enRegex.test(props.route)) {
            return {
                route: props.route,
                en: true
            }
        } else {
            return {
                route: props.route,
                en: false
            }
        }
    }

    render() {

        let unitList = units.units.map((unit, index) =>
            <Link class="dropdown-item" to={this.state.en ? "/en/unites/condo" + unit._id : "/unites/condo" + unit._id}> 
                <p key="index" >Condo {unit._id}</p>
                <p>{unit.price}</p> 
            </Link>
        )

        return (
            <div id="navbar-component" >
                <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light">

                    <a class="navbar-brand" href="#">
                        <img src="/images/logo.png"/>
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li className={(this.props.route == '/') || (this.props.route == '/en') || (this.props.route == '/en/') ? "nav-item active" : "nav-item"}>
                                <Link class="nav-link" to={this.state.en ? '/en/' : '/'}> {this.state.en ? 'HOME' : 'ACCUEIL'} </Link>
                            </li>
                            <li className={this.props.route.includes('unites') ? "nav-item dropdown active" : "nav-item dropdown"}>
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {this.state.en ? 'UNITS' : 'UNITÉS'}
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    {unitList}
                                </div>
                            </li>
                            <li class="nav-item" data-tip data-for="coming-soon">
                                <a class="nav-link disabled" href="#" style={{pointerEvents: 'none'}}> {this.state.en ? 'PROJECT' : 'PROJET'} </a>
                            </li>
                            <li class="nav-item" data-tip data-for="coming-soon">
                                <a class="nav-link disabled" href="#" style={{pointerEvents: 'none'}}> {this.state.en ? 'THE NEIGHBORHOOD' : 'LE QUARTIER'} </a>
                            </li>
                            <ReactTooltip id="coming-soon" type="light" className="disabled-tooltip" place="bottom">
                                <p>{this.state.en ? 'Coming soon !' : 'Prochainement disponible !'}</p>
                            </ReactTooltip>
                        </ul>
                        <span class="contact-button" onClick={this.props.openContactOverlay}>
                            <a> {this.state.en ? 'CONTACT US' : 'CONTACTEZ NOUS'} </a>
                        </span>
                        <span class="en-fr">
                            <Link 
                                to={this.state.en ? this.props.route.split('en')[1] : this.props.route} 
                                className={this.state.en == true ? ' ' : 'active'}
                            > FR </Link> 
                            <p>|</p> 
                            <Link 
                                to={this.state.en == true ? this.props.route : "/en" + this.props.route} 
                                className={this.state.en == true ? 'active' : ' '}
                            > EN</Link>
                        </span>
                    </div>

                </nav>
            </div>
        )
    }
}