import React from 'react';
import ReactDOM from 'react-dom';
import '../../scss/Quartier/main.scss';
import Axios from 'axios';

import Video from './Video';

export default class QuartierContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.pushCurrentRoute(this.props.location.pathname);
    }

    render() {
        return (
            <div class="Quartier">
                <Video />
            </div>
        )
    }
}