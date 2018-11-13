import React from 'react';
import ReactDOM from 'react-dom';
import '../scss/LazyImage/main.scss';

export default class LazyImage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hdImageLoaded: false
        }
        this.imageHd = React.createRef();
    }

    componentDidMount() {
        const hdImage = new Image();
        hdImage.src = this.props.hd;
        hdImage.onload = () => {
            console.log('loaded');
            this.setState({hdImageLoaded: true});
            this.imageHd.current.setAttribute(
                'style',
                `background-image: url(${this.props.hd})`
            )
            this.imageHd.current.classList.add('fade-in');
        }

    }

    render() {

        let imageClass = this.state.hdImageLoaded ? 'lazy-image-hd fade-in' : 'lazy-image-hd';

        return (
            <div class="lazy-image-container">
                <div 
                    class="lazy-image-hd"
                    ref={this.imageHd}
                ></div>
                <div 
                    class="lazy-image-preload"
                    style={{
                        backgroundImage: `url(${this.props.preload})`
                    }}
                ></div>
            </div>
        )
    }
}