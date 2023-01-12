import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersApi, pushUserApi } from "./services/users.api";

// import { fetchUsers, pushUser } from "./redux/actions/actions";
import { fetchUsers, pushUser } from './redux/actions'; // index.js акамулятор папки в якій він знаходиться. Коли ми звертаємося до папки , ми звертаємося до index файлу , а ын уже до інших файлів. ---- ЦЕ ПРОСТО ОПТИМІЗАЦІЯ КОДУ. 

export default function App() {
  let state = useSelector(state => {    
    let { rootReducer } = state;
    return rootReducer;
  });
  
  let dispatch = useDispatch();
  let { users } = state;


  // todo create command to fetch data from jsonplaceholder
  useEffect(() => {
    fetchUsersApi().then(value => {
      dispatch(fetchUsers(value))
    });
  }, [])


  let onSubmit = (e) => {
    e.preventDefault();
    let name = e.target.name.value;
    let user = { name }
    // todo send request
    pushUserApi(user).then(value => {
      console.log('saved users ->', value);
      dispatch(pushUser(value))
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