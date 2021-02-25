import { createStore, applyMiddleware } from 'redux'
import reducerDemo from '../ReducerDemo'
import thunk from 'redux-thunk'

export default createStore(reducerDemo, applyMiddleware(thunk))

// 支持异步action (函数)传递