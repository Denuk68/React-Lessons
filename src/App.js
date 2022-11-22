import { useReducer } from "react";
import {reducer} from "./reducers/reducer";


export default function App() {
  
  const[state , dispatch]= useReducer(reducer, {a: 0, b: 0, c:0})
  
  return (
    <div>
      number A: {state.a}
      <br/>
      <button onClick={() => {dispatch({type: "PLUS_A"})}}>Plus</button>
      <button onClick={() => {dispatch({type: "MINUS_A"})}}>Minus</button>
      <br/><br/>
      number B: {state.b}
      <br/>
      <button onClick={() => {dispatch({type: "PLUS_B"})}}>Plus</button>
      <button onClick={() => {dispatch({type: "MINUS_B"})}}>Minus</button>
      <br/><br/>
      number С: {state.c}
      <br/>
      <button onClick={() => {dispatch({type: "PLUS_C"})}}>Plus</button>
      <button onClick={() => {dispatch({type: "MINUS_C"})}}>Minus</button>
    </div>
  );
}