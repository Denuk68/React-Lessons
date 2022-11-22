import { useReducer } from "react";

const reducer = (state, action) => {
   if(action.diya === "+10"){
    return {...state, number: state.number +10 }
   }
   else if(action.diya === "-2"){
    return {...state, number: state.number-2}
   }
   else{
    return {...state}
   }
 }

export default function App() {
  
  const[{number} , dispatch]= useReducer(reducer, {number: 0})
  
  return (
    <div>
      number: {number}
      <br/>
      <button onClick={() => {dispatch({diya: '+10'})}}>+ 10</button>
      <button onClick={() => {dispatch({diya: '-2'})}}>- 2</button>
    </div>
  );
}