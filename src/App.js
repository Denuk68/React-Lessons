import { useReducer, useEffect } from "react";
import Users from "./components/Users";
import reducer from "./reducers/reducer";
import { getUsers } from "./services/users.api.service";


export default function App() {
  const [{ users, posts }, dispatch] = useReducer(reducer, { users: [], posts: [] });

  useEffect(() => {
    async function fetchData() {
      let users = await getUsers();
      dispatch({ type: 'GET_USERS', payload: users })
    }
    fetchData()
  }, [])

  return (
    <div>

      <Users items={users} />
    </div>
  );
} 