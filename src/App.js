import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,

} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Users from "./components/Users";

export default function App() {
  return (
    <Router>
      <div>
        <Link to={"/"}>null</Link>
        <br />
        <Link to={"/home"}>Home page</Link>
        <br />
        <Link to={"/about"}>About page</Link>
        <br />
        <Link to={"/contacts"}>Contacts page</Link>
        <br />
        <Link to={"/home/xxx"}>Home page xxx</Link>
        <br />
        <Link to={"/users-list"}>Users page</Link>
        <br />
      </div>
      <hr />

      <Routes>
        <Route path={"/home"} element={<Home />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/contacts"} element={<Contact />} />
        <Route path={"/home/xxx"} element={<div>xxxx</div>} />
        <Route path={"/users-list"} element={<Users />} />
      </Routes>
    </Router>
  );
}