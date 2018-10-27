const OPEN_OVERLAY = 'OPEN_OVERLAY';
const CLOSE_OVERLAY = 'CLOSE_OVERLAY';

export function openOverlay() {
    return {
        type: OPEN_OVERLAY,
        payload: true
    }
}

export function closeOverlay() {
    return {
        type: CLOSE_OVERLAY,
        payload: false
    }
}