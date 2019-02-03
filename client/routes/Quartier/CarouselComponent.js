import React from 'react';
import LazyImage from '../../components/LazyImage';

export default class CarouselComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            counter: 0
        }
        this.counter = this.counter.bind(this);
    }

    counter(x) {
        if (this.state.counter == -(this.props.array.length-1)) {
            if (x==1) {
                this.setState((state) => {
                    return { counter: state.counter + x}
                });
            }
        } else if (this.state.counter == 0) {
            if (x==-1) {
                this.setState((state) => {
                    return { counter: state.counter + x}
                })
            }
        } else {
            this.setState((state) => {
                return { counter: state.counter + x}
            })
        }
    }

    render() {

        const images = this.props.array.map((slide, index) => 
                <div class="slide" key={index}
                    style={{
                        top: 0,
                        left: index*500 + "px",
                        transform: 'translate('+ this.state.counter*500 + 'px)',
                        transition: 'all 0.25s'
                    }}
                >
                    <LazyImage preload={'/images/quartierCarousel/' + slide.imageScaled} hd={'/images/quartierCarousel/' + slide.image}/>
                </div>
        )
        const descriptions = this.props.array.map((slide, index) => 
                    <p 
                        key="index"
                        style= {{
                            opacity: this.state.counter == -index ? '1' : '0',
                            transition: 'all 0.25s'
                        }}
                    >
                        {slide.description}
                    </p>
        )
        // const descriptionsEN = quartierDiapos.diaposEN.map((diapo, index) => 
        //             <p 
        //                 key="index"
        //                 style= {{
        //                     opacity: this.state.plateauCounter == -index ? '1' : '0',
        //                     transition: 'all 0.25s'
        //                 }}
        //             >
        //                 {diapo.description}
        //             </p>
        // )

        return (
            <div class="CarouselComponent">
                <div class='image-container'>
                    {images}
                </div>
                <div class='description-container'>
                    <div class='description'>
                        {/* {this.state.en ? descriptionsEN : descriptions} */}
                        {descriptions}
                    </div>
                    <div class='controls'>
                        <div class="button-container">
                            <button onClick={() => this.counter(1)}
                                style={{
                                    opacity: this.state.counter == 0 ? '0.2' : '1'
                                }}
                            > <i class="fas fa-chevron-left fa-3x"></i> </button>
                            <button onClick={() => this.counter(-1)}
                                style={{
                                    opacity: this.state.counter == -(this.props.array.length-1) ? '0.2' : '1'
                                }}
                            > <i class="fas fa-chevron-right fa-3x"></i> </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}