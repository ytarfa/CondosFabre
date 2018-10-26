const PUSH_CURRENT_ROUTE = 'PUSH_CURRENT_ROUTE';

export function pushCurrentRoute(route) {
    return {
        type: PUSH_CURRENT_ROUTE,
        payload: {
            route: route
        }
    }
}