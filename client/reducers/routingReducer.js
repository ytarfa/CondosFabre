import { PUSH_CURRENT_ROUTE } from '../actions/routingActions';

export default function(state={route: ''}, {type, payload}) {
    switch (type) {
        case 'PUSH_CURRENT_ROUTE':
            return payload;
        default:
            return state;
    }
}