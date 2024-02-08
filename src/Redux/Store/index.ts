import { applyMiddleware, combineReducers, createStore } from  'redux'

import {thunk} from 'redux-thunk'
import travelReducer from '../Reducers/TravelReducer'

const RootReducer = combineReducers({
    travel:travelReducer
})

// @ts-ignore
export default createStore(RootReducer,applyMiddleware(thunk))