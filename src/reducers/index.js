import {combineReducers} from "redux";
import counterReducer from "./counterReducer";

const allReducers = combineReducers({
    counters: counterReducer
})

export default allReducers;
