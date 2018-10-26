import React from 'react';
import ReactDOM from 'react-dom';

export default class ProjetContainer extends React.Component {

    componentDidMount() {
        this.props.pushCurrentRoute(this.props.location.pathname)
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}