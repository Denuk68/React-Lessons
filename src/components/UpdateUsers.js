import { getUsers, getUser } from "../services/fetch.service"
import { useState, useEffect } from "react";
import User from "./User";


export default function UpdateUsers() {
    // Select user form
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers().then(data => setUsers([...data]))
    }, []);

    const [userId, setUserId] = useState(1);
    const getUserById = (e) => {
        setUserId(e.target.value);
    }

    const [user, setUser] = useState({});

    const getUserOnSubmit = (e) => {
        e.preventDefault();
        getUser(userId).then(data => console.log(data))
    }

    return (
        <div>
            <h1>Update users page</h1>

            <p>Select user:</p>
            <form onSubmit={getUserOnSubmit}>
                <select onChange={getUserById}>
                    {users.map(user => <User key={user.id} user={user} />)}
                </select>
                <button>Save</button>
            </form>

            <hr />

            <p>Update user:</p>
            <form>
                <input type={"text"} name={"name"} placeholder={"name"} />
                <input type={"email"} name={"email"} placeholder={"email"} />
                <button>Update</button>
            </form>

        </div>
    )
}