import "./App.css"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Users from "./components/Users";
import Posts from "./components/Posts";
import Comments from "./components/Comments";
import Home from "./components/Home";

export default function App() {
  return (

    <Router>

      <div className={"header_wrap"}>
        <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/users-page"}>Users page</Link></li>
          <li><Link to={"/posts-page"}>Posts page</Link></li>
          <li><Link to={"/comments-page"}>Comments page</Link></li>
        </ul>
      </div>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/users-page'} element={<Users />} />
        <Route path={'/posts-page'} element={<Posts />} />
        <Route path={'/comments-page'} element={<Comments />} />
      </Routes>

    </Router>
  );
}