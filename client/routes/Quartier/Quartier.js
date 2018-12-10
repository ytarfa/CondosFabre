import React from 'react';
import ReactDOM from 'react-dom';

export default class QuartierContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        this.props.pushCurrentRoute(this.props.location.pathname);
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}