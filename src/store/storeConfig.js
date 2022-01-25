

import {  createStore, combineReducers } from "redux";

const reducers = combineReducers({
    numbers: function(state, action) {
        return {
            min: 0,
            max: 10
        }
    }
})

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig