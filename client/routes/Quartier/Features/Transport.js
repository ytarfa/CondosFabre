import React from 'react';

export default class Transport extends React.Component {
    render() {
        return (
            <div class="feature transport"
                style={{
                    transform: `translateX(${this.props.featureCounter * 100}%)`,
                    opacity: this.props.featureCounter == -3 ? 1 : 0
                }}
            >

                <div class="title">
                    <h1 class="background-title"> Transport </h1>
                    <h1 class="foreground-title"> Transport </h1>
                </div>

            </div>
        )
    }
}