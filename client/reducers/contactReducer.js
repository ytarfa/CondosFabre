import { OPEN_OVERLAY, CLOSE_OVERLAY } from '../actions/contactActions';

export default function(
    state=false,
    {type, payload}
) {
    switch (type) {
        case 'OPEN_OVERLAY':
            return payload;
        case 'CLOSE_OVERLAY':
            return payload;
        default:
            return state;
    }
}