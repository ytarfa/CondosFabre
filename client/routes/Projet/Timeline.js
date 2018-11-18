import React from 'react';

export default class Timeline extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div class="Timeline">

                <div class="time-point">
                    <div class="point-container">
                        <span class="point-active"><span class="point"></span></span>
                        <span class="line-bottom"></span>
                    </div>
                    <div class="description">
                        <span><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus gravida quis blandit turpis cursus in hac. Sit amet commodo nulla facilisi nullam vehicula ipsum. Nullam ac tortor vitae purus. A arcu cursus vitae congue mauris rhoncus.</p>
                    </div>
                </div>

                <div class="time-point">
                    <div class="point-container">
                        <span class="line-top"></span>
                        <span class="point"></span>
                        <span class="line-bottom"></span>
                    </div>
                    <div class="description">
                        <span><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></span>
                    </div>
                </div>

                <div class="time-point">
                    <div class="point-container">
                        <span class="line-top"></span>
                        <span class="point"></span>
                    </div>
                    <div class="description">
                        <span><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus gravida quis blandit turpis cursus in hac. Sit amet commodo nulla facilisi nullam vehicula ipsum. Nullam ac tortor vitae purus. A arcu cursus vitae congue mauris rhoncus.</p>
                    </div>
                </div>

            </div>
        )
    }
}