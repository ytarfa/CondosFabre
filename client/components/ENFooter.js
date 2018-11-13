import React from 'react';
import ReactDOM from 'react-dom';
import '../scss/Footer/main.scss';

export default class ENFooter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="Footer">
                <p> &copy; 2018 Condos Fabre. All rights reserved. </p>
                {/* <ul>
                    <li></li>
                </ul> */}
            </div>
        )
    }
}