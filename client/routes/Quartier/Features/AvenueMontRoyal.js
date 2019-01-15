import React from 'react';

export default class AvenueMontRoyal extends React.Component {
    render() {
        return (
            <div class="feature avenue-montroyal"
                style={{
                    transform: `translateX(${this.props.featureCounter * 100}%)`,
                    opacity: this.props.featureCounter == -2 ? 1 : 0
                }}
            >

                <div class="title">
                    <h1 class="foreground-title"> Avenue Mont-Royal </h1>
                    <h1 class="background-title"> Avenue Mont-Royal </h1>
                </div>


                
            </div>
        )
    }
}