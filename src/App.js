import { useSelector, useDispatch } from "react-redux";
import { addUser, loadUsers } from "./redux/actions";
import { getUsers, saveUser } from "./services/service.api";
import { useEffect } from "react";



export default function App() {
  let state = useSelector(state => state);
  let dispatch = useDispatch();
  let { users } = state;

  useEffect(() => {
    getUsers().then(data => {
      dispatch(loadUsers(data))
    })
  }, []);

  let handleAddUser = (e) => {
    let user = { name: "den" };
    saveUser(user).then(
      value => dispatch(addUser(value))
    );
  }

  return (
    <div>
      <button onClick={handleAddUser}>add user</button>
      {users.map(value => <div key={value.id}>{value.name}</div>)}
    </div>
  );
}