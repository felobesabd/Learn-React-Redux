
export const reducerFunc = (state = {counter: 0}, action) => {
    
    if (action.type === 'increase') {
        return {counter: state.counter + 1}
    }
    if (action.type === 'decrease') {
        return {counter: state.counter - 1}
    }
    if (action.type === 'x') {
        return {counter: state.counter * state.counter}
    }
    if (action.type === 'reset') {
        return {counter: 0}
    }
    return state;
}