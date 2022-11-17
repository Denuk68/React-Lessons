import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Users from "./components/Users";
import Home from "./components/Home";
import Posts from "./components/Posts"
import Albums from "./components/Albums"

export default function App() {
  return (
    <Router>

      <nav>
        <ul>
          <li><Link to={"/"}>Home page</Link></li>
          <li><Link to={"/users"}>Users page</Link></li>
          <li><Link to={"/posts"}>Posts page</Link></li>
          <li><Link to={"/albums"}>Albums page</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/users/*"} element={<Users />} />
        <Route path={"/posts/*"} element={<Posts />} />
        <Route path={"/albums/*"} element={<Albums />} />
      </Routes>

    </Router>
  );
}