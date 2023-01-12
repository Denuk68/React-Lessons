import { combineReducers } from "redux";
import { rootReducer } from "./rootReducer";
import { someReducer } from "./someReducer";

const reducer = combineReducers({ someReducer, rootReducer }); // reducer Інкапсулює в собі 2 редюсера.

export { reducer };