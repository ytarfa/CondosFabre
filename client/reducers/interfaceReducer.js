import { PUSH_SCROLL_POSITION } from '../actions/interfaceActions';

export default function(state={xpos:0, ypos:0}, {type, payload}) {
    switch (type) {
        case 'PUSH_SCROLL_POSITION':
            return payload;
        default:
            return state;
    }
}