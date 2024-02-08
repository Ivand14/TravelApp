import { combineReducers, createStore } from  'redux'

import travelReducer from '../Reducers/TravelReducer'

const RootReducer = combineReducers({
    travel:travelReducer
})

export default createStore(RootReducer)