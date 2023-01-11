import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, fetchUsers } from "./services/users.api";

export default function App() {
  let state = useSelector(state => state);
  let dispatch = useDispatch();
  let { users } = state;


  // todo create command to fetch data from jsonplaceholder
  useEffect(() => {
    fetchUsers().then(value => {
      dispatch({ type: 'FETCH_USERS', payload: value })
    });
  }, [])


  let onSubmit = (e) => {
    e.preventDefault();
    let name = e.target.name.value;
    let user = { name }
    // todo send request
    addUser(user).then(value => {
      console.log('saved users ->', value);
      dispatch({type:'PUSH_USERS', payload: value})
    })
  }



  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" name={"name"}></input>
        <button>add user</button>

      </form>
      <hr />

      {users.map((value, index) => <div key={index}>{value.name}</div>)}
    </div>
  );
}