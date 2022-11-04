import { getUsers, getUser } from "../services/fetch.service"
import { useState, useEffect } from "react";
import User from "./User";


export default function UpdateUsers() {
    // Select user form
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers().then(data => setUsers([...data]))
    }, []);


    const getUserById = (e) => {
        let id = e.target.value;
        console.log(id)
    }

    return (
        <div>
            <h1>Update users page</h1>

            <p>Select user:</p>
            <form>
                <select onChange={getUserById}>
                    {users.map(user => <User key={user.id} user={user} />)}
                </select>
                <button>Save</button>
            </form>

            <hr />

            <p>Update user:</p>
            <form>
                <input type={"text"} name={"name"} placeholder={"name"}  />
                <input type={"email"} name={"email"} placeholder={"email"} />
                <button>Update</button>
            </form>

        </div>
    )
}