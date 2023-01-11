import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux"



const rootReducer = (state = { users: [] }, action) => {
  // console.log('reducer', state)
  console.log(action)
  switch (action.type) {
    case "FETCH_USERS":
      return { ...state, users: [...action.payload] };
    case "CLEAR_STORE":
      return { ...state, users: [] }
    case "PUSH_USERS":
      console.log(action.payload)
      return { ...state, users: [...state.users, action.payload] }
    default: return state;
  }
}
export let store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
