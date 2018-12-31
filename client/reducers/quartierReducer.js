import { TOGGLE_FEATURE } from '../actions/quartierActions';

export default function(
    state={
        zoom: 13,
        center: {lat: 45.5218361, lng: -73.5821731},
        feature: 'plateau'
    },
    {type, payload}
) {
    switch(type){
        case 'TOGGLE_FEATURE':
            return payload;
        default:
            return state;
    }
}