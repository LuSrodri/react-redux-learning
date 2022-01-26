

import { setMax, setMin } from "../actions/actionsType"

const initialState = {
    min: 0, 
    max: 10
}

export default function(state = initialState, action) {

    switch (action.type) {
        case setMin:
            return {
                ...state,
                min: action.payload.min
            }
        case setMax:
            return {
                ...state,
                max: action.payload.max
            }
        default:
            return state
    }
}