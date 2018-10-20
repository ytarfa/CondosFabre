const PUSH_SCROLL_POSITION = 'PUSH_SCROLL_POSITION'

export function pushScrollValues(pos) {
    return {
        type: PUSH_SCROLL_POSITION,
        payload: {
            xpos: pos[0],
            ypos: pos[1]
        }
    }
}