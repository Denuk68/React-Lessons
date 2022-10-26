import "./Users.css";
import { getUsers, getPostsOfUser } from "../../services/fetch.service";
import { useState, useEffect } from "react";
import User from "../user/User";

export default function Users() {
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        getUsers().then(data => setUsers([...data]))
    }, []);

    const choseUser = (u) => {
        getPostsOfUser(u.id).then(value => setPosts([...value]));
    }

    return (
        <div className={"wrap"}>
            <div className={"users-box"}>
                {users.map(item => <User key={item.id} item={item} choseUser={choseUser} />)}
            </div>
            <div className={"chosen-one"}>
                {JSON.stringify(posts.map(post => post.title))}
            </div>
        </div>
    )
}