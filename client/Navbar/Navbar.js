import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import '../scss/Navbar/base.scss';

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
                        <li class="active"><Link to="/">ACCUEIL</Link></li>
                        <li><Link to="/"> PROJET</Link></li>
                        <li><Link to="/">UNITES</Link></li>
                        <li><Link to="/">QUARTIER</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}