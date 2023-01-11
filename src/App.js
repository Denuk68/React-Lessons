import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./services/users.api";

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

  }



  return (
    <div>
      <form onSubmit={onSubmit}>

      </form>
      <hr />
      
      {users.map((value, index) => <div key={index}>{value.name}</div>)}
    </div>
  );
}