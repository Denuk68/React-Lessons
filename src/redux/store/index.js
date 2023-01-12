import { legacy_createStore as createStore } from "redux";
import { reducer } from "../reducers";


export let store = createStore(reducer);
