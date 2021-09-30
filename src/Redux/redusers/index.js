import { combineReducers } from "redux"
import { cardReducer } from "./card"


const reducers = combineReducers({
    card: cardReducer
})

export default reducers