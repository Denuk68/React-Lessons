import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Albums from "./components/Albums";
import Comments from "./components/Comments";
import Todos from "./components/Todos";

export default function App() {
  return (
    <Router>
      <ul>
        <li><Link to={'/'}>Home page</Link></li>
        <li><Link to={"/albums-page"}>Albums page</Link></li>
        <li><Link to={"/comments-page"}>Comments page</Link></li>
        <li><Link to={"/todos-page"}>Todos page</Link></li>
      </ul>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/albums-page"} element={<Albums />} />
        <Route path={"/comments-page"} element={<Comments />} />
        <Route path={"/todos-page"} element={<Todos />} />
      </Routes>

    </Router>

  );
}