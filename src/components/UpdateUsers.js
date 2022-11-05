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
        getUser(userId).then(data => setUser({ ...data }))
    }

    // Update user form
    const [formState, setFormState] = useState({ id: "", name: "", email: "" });
    const onFormInputChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    }
    const onSubmitUpdateForm = (e) => {
        e.preventDefault();
        console.log(formState)
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
            <form onSubmit={onSubmitUpdateForm}>
                <input type={"number"} name={"id"} placeholder={"id"} onInput={onFormInputChange} />
                <input type={"text"} name={"name"} placeholder={"name"} onInput={onFormInputChange} />
                <input type={"email"} name={"email"} placeholder={"email"} onInput={onFormInputChange} />
                <button>Update</button>
            </form>

        </div>
    )
}