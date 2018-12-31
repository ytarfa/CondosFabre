const TOGGLE_FEATURE = "TOGGLE_FEATURE";

export function togglePlateau() {
    return {
        type: TOGGLE_FEATURE,
        payload: {
            zoom: 14,
            center: {},
            feature: 'plateau' 
        }
    }

}

export function toggleRachel() {
    return {
        type: TOGGLE_FEATURE,
        payload: {
            zoom: 14,
            center: {},
            feature: 'rachel'           
        }
    }
}

export function toggleParclafontaine() {
    return {
        type: TOGGLE_FEATURE,
        payload: {
            zoom: 14,
            center: {},
            feature: 'parclafontaine'           
        }
    }
}