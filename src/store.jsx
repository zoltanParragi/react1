import { createStore } from 'redux'

const reducer = (state, action) => {

    switch (action.type) {
        case 'COLOR':
            state.color = action.payload;
            break;
        case 'COUNT':
            if (action.operation === "increment") {
                state.num++;
            } else if (action.operation === "decrement") {
                state.num--;
            } else if (action.operation === "byamount") {
                state.num += action.amount;
            }
            break;
    }
    return state;
}

export default createStore(reducer, { color: null, num: 0 });