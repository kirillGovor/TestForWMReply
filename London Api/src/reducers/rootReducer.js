import { combineReducers } from "redux";
import { busses } from "./busses";
import { stations } from "./stations";

const rootReducer = combineReducers({
    busses,
    stations,
});

export default rootReducer;