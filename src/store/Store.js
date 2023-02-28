import { createStore } from 'redux'
import { allReduce } from '../reduce/rootAllReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

export const store = createStore(allReduce, composeWithDevTools())