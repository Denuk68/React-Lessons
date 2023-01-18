import { useEffect } from "react";
import { addUser, loadUsers } from "./redux/actions";
import { useSelector, useDispatch } from "react-redux";

// ReduxThunk потрібний для того щоб  зробити actions асинхронними
const fetchUsersWithThunk = () => async (dispatch) => {
  let response = await (await fetch("https://jsonplaceholder.typicode.com/users")).json();
  dispatch(loadUsers(response))
}

const addUserWithThunk = (userData) => async (dispatch) => {
  let response = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: userData.name,
    })
  });
  let savedUser = await response.json();
  dispatch(addUser(savedUser))

}




export default function App() {
  let state = useSelector(state => state);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsersWithThunk());
  }, [])

  const xxx = (e) => {
    let user = { name: "den" };
    dispatch(addUserWithThunk(user))
  }

  return (
    <div>
      <button onClick={xxx}>save user</button>
      {state.users.map(value => <div key={value.id}>{value.name}</div>)}
    </div>
  );
}