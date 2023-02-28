
export const logReducerFunc = (state = {islog: false}, action) => {
    
    if (action.type === 'islogin') {
        return {islog: true}
    }
    if (action.type === 'notlogin') {
        return {islog: false}
    }
    return state;
}