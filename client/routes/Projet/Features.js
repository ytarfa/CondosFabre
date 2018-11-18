import React from 'react';
import ReactDOM from 'react-dom';

export default class Features extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            activeFeature: 0
        }
        this.activateFeature = this.activateFeature.bind(this);
    } 

    activateFeature(index) {
        this.setState({activeFeature: index});
    }

    render() {

        const data = [
            ['fas fa-home fa-fw', 'Facade'],
            ['fas fa-solar-panel fa-fw', 'Toiture'],
            ['fas fa-tint fa-fw', 'Robinetterie'],
            ['fas fa-thermometer-three-quarters fa-fw', 'Température'],
            ['fas fa-wind fa-fw', 'Échangeur d\'air'],
            ['fas fa-volume-up fa-fw', 'Insonorisation'],
            ['fas fa-pencil-ruler fa-fw', 'Sur mesure'],
            ['fab fa-windows fa-fw', 'Fenêtres'],
            ['fas fa-home fa-fw', 'Plafonds'],
            ['fas fa-bicycle fa-fw', 'Vélo']
        ]

        const cubes = data.map((data, index) => {
            if (index == 9) {
                this.featureClass = this.state.activeFeature == index ? 'last feature active' : 'last feature';
            } else if (index == 8) {
                this.featureClass = this.state.activeFeature == index ? 'before-last feature active' : 'before-last feature';
            } else if (index % 2 == 0) {  
                this.featureClass = this.state.activeFeature == index ? 'first feature active' : 'first feature';
            } else {
                this.featureClass = this.state.activeFeature == index ? 'second feature active' : 'second feature';
            }
            return (
                <span 
                    key={index} 
                    className={ this.featureClass } 
                    onClick={() => this.activateFeature(index)}
                >
                <i class={data[0]}></i>
                <p>{data[1]}</p>
                </span>
            )
        })

        const descriptions = data.map((data, index) => 
            <div 
                key={index}
                style={{
                    opacity: this.state.activeFeature == index ? '1' : '0'
                }}
            >
                <h1> <i class={data[0]}></i> {data[1]} </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem viverra aliquet eget sit amet tellus cras. Magna sit amet purus gravida quis blandit turpis. Suspendisse faucibus interdum posuere lorem ipsum. Ut placerat orci nulla pellentesque dignissim enim sit amet.</p>
            </div>
        )

        return (
            <div class="Features">

                <div class="cubes">
                    {cubes}
                </div>

                <div class="description">
                    {descriptions}
                </div>
                
            </div>
        )
    }
}