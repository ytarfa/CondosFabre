const TOGGLE_FEATURE = "TOGGLE_FEATURE";

export function togglePlateau() {
    return {
        type: TOGGLE_FEATURE,
        payload: {
            zoom: 13,
            center: {lat: 45.5218361, lng: -73.5821731},
            feature: 'plateau' 
        }
    }

}

export function toggleRachel() {
    return {
        type: TOGGLE_FEATURE,
        payload: {
            zoom: 14,
            center: {lat: 45.529815, lng: -73.571351},
            feature: 'rachel'           
        }
    }
}

export function toggleParclafontaine() {
    return {
        type: TOGGLE_FEATURE,
        payload: {
            zoom: 15,
            center: {lat: 45.5262503, lng: -73.5689312746046},
            feature: 'parclafontaine'           
        }
    }
}

export function toggleMontRoyal() {
    return {
        type: TOGGLE_FEATURE,
        payload: {
            zoom: 13,
            center: {lat:  45.5249800, lng: -73.5817850},
            feature: 'montroyal'           
        }
    }
}

export function toggleParcMontRoyal() {
    return {
        type: TOGGLE_FEATURE,
        payload: {
            zoom: 14,
            center: {lat: 45.5075198, lng: -73.5900540},
            feature: 'parcmontroyal'
        }
    }
}

export function toggleTransport() {
    return {
        type: TOGGLE_FEATURE,
        payload: {
            zoom: 13,
            center: {lat: 45.5218361, lng: -73.5821731},
            feature: 'transport' 
        }
    }
}