import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import '../scss/Navbar/base.scss';
import ReactTooltip from 'react-tooltip';

export default class Navbar extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            active: false
        }
    }

    render() {

        let NavbarClass = this.props.ypos > 75 ? "Navbar active" : "Navbar";


        return (
            <div className={NavbarClass}>
                <div class="logo-container">
                    <img src="/images/logo.png"/>
                </div>

                <div class="links-container">
                    <ul>
                        <li className={this.props.route == '/' ? "active" : ""}><Link to="/">ACCUEIL</Link></li>
                        <li className={this.props.route == '/unites' ? "active" : ""}><Link to="/unites">UNITES</Link></li>

                        <li data-tip data-for="coming-soon" className="coming-soon"><Link to="/projet"> PROJET</Link></li>
                        <li data-tip data-for="coming-soon" className="coming-soon"><Link to="/quartier">QUARTIER</Link></li>
                        <ReactTooltip id="coming-soon" type="info" place="top">
                            <p>Coming Soon !</p>
                        </ReactTooltip>

                        <li class="contact-button" onClick={this.props.openContactOverlay}> <a href="#"> CONTACTEZ-NOUS </a> </li>
                    </ul>
                </div>
            </div>
        )
    }
}