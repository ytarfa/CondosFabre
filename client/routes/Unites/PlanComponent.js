import React from 'react';
import ReactDOM from 'react-dom';

export default class PlanComponent extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            hover: false,
            overlay: false
        }
        this.openOverlay = this.openOverlay.bind(this);
        this.closeOverlay = this.closeOverlay.bind(this);
    }

    openOverlay() {
        this.setState({overlay: true});
    }

    closeOverlay() {
        this.setState({overlay: false});
    }

    render() {
        return (
            <div class="PlanComponent">

                <button 
                    onClick={this.openOverlay}
                    class="mobile-plan-component-toggle"> 
                        <i class="fas fa-file-alt"></i> 
                        <p>{this.props.en == true ? 'See the full unit plan' : 'Consulter le plan complet de l\'unité' }</p> 
                    </button>

                <div class="small-image-container">
                    <img
                        src={"/images/units/cropped-plan/" + this.props.unit_id +".jpg"}
                        class="small-image"
                    />
                    <span 
                        class="small-image-overlay"
                        onClick={this.openOverlay}
                    >
                        <i class="fas fa-search-plus"></i>
                    </span>
                </div>
                <p> {this.props.en ? 'Click here to make the image larger.' : 'Cliquez ici pour aggrandir l\'image.'} </p>

                <div class="plan-overlay"
                    style={{
                        opacity: this.state.overlay ? '1' : '0',
                        pointerEvents: this.state.overlay ? 'all' : 'none'
                    }}
                >
                    <button onClick={this.closeOverlay}> <i class="fa fa-times fa-fw"></i> </button>
                    <img src={"/images/units/full-plan/" + this.props.unit_id +".jpg"}/>
                </div>

            </div>
        )
    }
}