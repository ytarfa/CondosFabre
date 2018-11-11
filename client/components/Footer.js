import React from 'react';
import ReactDOM from 'react-dom';
import '../scss/Footer/main.scss';

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="Footer">
                <p> &copy; 2018 Condos Fabre. Tous droits réservés. </p>
                {/* <ul>
                    <li></li>
                </ul> */}
            </div>
        )
    }
}