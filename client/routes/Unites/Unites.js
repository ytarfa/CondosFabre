import React from 'react';
import ReactDOM from 'react-dom';

export default class UnitesContainer extends React.Component {

    constructor(props) {
        super(props);
    }

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