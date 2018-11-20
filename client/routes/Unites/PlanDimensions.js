import React from 'react';
import LazyImage from '../../components/LazyImage';

export default class PlanDimensions extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            activeFloor: 0
        }
        this.changeFloor = this.changeFloor.bind(this);
    }

    changeFloor(floor) {
        this.setState({ activeFloor: floor });
    }


    render() {

        let rooms = this.props.data.rooms_table.map((room, index) => 
            <p>{room[0]}   .................   {room[2]}</p>
        )

        return (
            <div class="PlanDimensions">
                <div class="image">
                    <LazyImage hd={'/images/facade-cropped.jpg'} />
                </div>
                <div class="table-container">
                    <ul>
                        <li onClick={() => this.changeFloor(0)} class={this.state.activeFloor == 0 ? 'active' : ''}><p>RDC</p></li>
                        <li onClick={() => this.changeFloor(1)} class={this.state.activeFloor == 1 ? 'active' : ''}><p>1ER ETAGE</p></li>
                    </ul>
                    
                    {rooms}
                </div>
            </div>
        )
    }
}