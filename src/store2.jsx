import { createStore } from 'redux'

const reducer = (state, action) => {

    switch (action.type) {
        case 'WIDTH':
            state += action.payload
            break;
    }
    return state;
}

export default createStore(reducer, 100);