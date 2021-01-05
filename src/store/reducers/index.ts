import {combineReducers} from 'redux'
import CounterReducer from './count'

let reducers = combineReducers({
    CounterReducer:CounterReducer
})

export default reducers