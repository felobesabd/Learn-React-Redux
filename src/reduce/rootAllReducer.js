import { combineReducers } from 'redux'
import { logReducerFunc } from "./loginReduce";
import { reducerFunc } from "./reducereact";

export const allReduce = combineReducers ({
    log: logReducerFunc,
    red: reducerFunc
})