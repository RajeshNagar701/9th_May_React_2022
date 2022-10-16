import { combineReducers } from "redux";
import userReducers from "./reducer";

const rootReducer=combineReducers({
    userReducers: userReducers
})

export default rootReducer;