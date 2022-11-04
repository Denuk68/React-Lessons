import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CreateUser from "./components/CreateUser";
import Home from "./components/Home";
import UpdateUsers from "./components/UpdateUsers";
import Users from "./components/Users";

export default function App() {
  return (
    <Router>

      <ul>
        <li><Link to={'/'}>Home page</Link></li>
        <li><Link to={"/users-page"}>Users page</Link></li>
        <li><Link to={"/create-user-page"}>Create user</Link></li>
        <li><Link to={"/update-users-page"}>Update users</Link></li>
      </ul>

      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/users-page"} element={<Users />} />
        <Route path={"/create-user-page"} element={<CreateUser />} />
        <Route path={"/update-users-page"} element={<UpdateUsers />} />
      </Routes>

    </Router>

  );
}