
import { setMax, setMin } from "./actionsType"

//Action Creator
export function setMinAction(newMin) {
    return {
        type: setMin,
        payload: {min: newMin}
    }
}

export function setMaxAction(newMax) {
    return {
        type: setMax,
        payload: {max: newMax}
    }
}