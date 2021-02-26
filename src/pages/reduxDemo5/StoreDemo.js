import { createStore, combineReducers } from 'redux'
import reducerDemo from '../ReducerDemo'
import reducerPerson from './ReducerPerson'

// 1. 有多个reducer时，需要合并
const combine = combineReducers({
    demoKey: reducerDemo,
    personKey: reducerPerson
})

// 整个应用应只有一个
export default createStore(combine)
