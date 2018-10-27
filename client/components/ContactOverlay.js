import React from 'react';
import ReactDOM from 'react-dom';

import '../scss/ContactOverlay/main.scss';

export default class ContactOverlay extends React.Component {
    render() {
        return (
            <div class="ContactOverlay"
                style={{
                    display: this.props.open == true ? 'block' : 'none'
                }}
            >
                <div class="overlay">
                    <button
                        onClick={this.props.closeOverlay}
                    >X</button>
                    <p> {this.props.open.toString()} </p>
                </div>
            </div>
        )
    }
}