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
        this.collapseRef = React.createRef();
        this.collapseNav = this.collapseNav.bind(this);
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

    collapseNav() {
        if (this.collapseRef.current != null) {
            if(this.collapseRef.current.classList.contains('show')) {
                this.collapseRef.current.classList.remove('show');
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
            <div id="navbar-component">
                <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light">

                    <Link class="navbar-brand" to="/">
                        <img src="/images/logo.png"/>
                    </Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon" ></span>
                    </button>
                
                    <div class="collapse navbar-collapse" id="navbarSupportedContent" ref={this.collapseRef}>
                        <ul class="navbar-nav mr-auto" onClick={() => {this.collapseNav()}}>
                            <li className={(this.props.route == '/') || (this.props.route == '/en') || (this.props.route == '/en/') ? "nav-item active" : "nav-item"}>
                                <Link class="nav-link" to={this.state.en ? '/en/' : '/'}> {this.state.en ? 'PROJECT' : 'PROJET'} </Link>
                            </li>
                            <li className={this.props.route.includes('unites') ? "nav-item dropdown active" : "nav-item dropdown"}>
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {this.state.en ? 'UNITS' : 'UNITÉS'}
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    {unitList}
                                </div>
                            </li>
                            {/* <li class="nav-item" data-tip data-for="coming-soon">
                                <a class="nav-link disabled" href="#" style={{pointerEvents: 'none'}}> {this.state.en ? 'PROJECT' : 'PROJET'} </a>
                            </li> */}
                            <li className={this.props.route.includes('quartier') ? "nav-item active" : "nav-item"}>
                                <Link class="nav-link" to={this.state.en ? '/en/quartier' : '/quartier'} > {this.state.en ? 'THE NEIGHBORHOOD' : 'LE QUARTIER'} </Link>
                            </li>
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