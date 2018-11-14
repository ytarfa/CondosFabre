import React from 'react';
import ReactDOM from 'react-dom';
import '../scss/SimpleCarousel/main.scss';
import LazyImage from './LazyImage';

export default class SimpleCarousel extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            length: null,
            autoplay: true
        }
        this.autoplay = this.autoplay.bind(this);
        this.changeImage = this.changeImage.bind(this);
        this.toggleAutoplay = this.toggleAutoplay;
    }

    componentDidMount() {
        this.setState({ length: this.props.imageList.length});
        this.interval = setInterval(this.autoplay, 3000);
    }

    autoplay() {
        if ( this.state.counter == this.state.length-1 ) {
            this.setState((state) => {
                return { counter: 0}
            })
        } else {
            this.setState((state) => {
                return { counter: state.counter + 1}
            })
        }
    }

    changeImage(x) {
        this.setState({counter: x});

        if (this.state.autoplay == true) {
            clearInterval(this.interval);
            this.interval = setInterval(this.autoplay, 3000);
            this.setState({autoplay: true});
        }
    }

    toggleAutoplay(bool) {
        this.setState({autoplay: bool});
        if (bool == true) {
            this.interval = setInterval(this.autoplay, 3000);
        } else {
            clearInterval(this.interval);
        }
    }


    render() {

        const imageElements = this.props.imageList.map((img, index) => 
            <div
                key={"SimpleCarouselImage" + index}
                class="image-container"
                style = {{
                    transform: `translate(-${100*this.state.counter}vw)`
                }}
            >
                <LazyImage
                    preload={img[0]}
                    hd={img[1]}
                />
            </div>
        );
        const controlElements = this.props.imageList.map((img, index) => 
            <li 
                key={"SimpleCarouselControls" + index}
                style={{
                    transform: this.state.counter == index ? 'scale(2)' : 'scale(1)'
                }}
                onClick={() => this.changeImage(index)}
                onTouchEnd={() => this.changeImage(index)}
            ></li>
        )

        return (
            <div className={this.props.className + ' SimpleCarousel'}>
                {imageElements}
                <div class="controls">
                    <ul>
                        {controlElements}
                    </ul>
                    <span class="pause-play">
                        <i 
                            class="fas fa-pause"
                            onClick={() => this.toggleAutoplay(false)}
                            style={{
                                display: this.state.autoplay == true ? 'inline' : 'none'
                            }}
                        ></i>
                        <i 
                            class="fas fa-play"
                            onClick={() => this.toggleAutoplay(true)}
                            style={{
                                display: this.state.autoplay == true ? 'none' : 'inline'
                            }}
                        ></i>
                    </span>
                </div>
            </div>  
        )
    }
}