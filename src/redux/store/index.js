import { legacy_createStore as createStore } from 'redux';
import { reducer } from "../reducer";

import ReduxThunk from "redux-thunk";
import { applyMiddleware } from 'redux';

let store = createStore(reducer, applyMiddleware(ReduxThunk));

export { store }