import { useState, useEffect } from "react";
import { getUsers } from "../services/api.service";
import User from "./User";

export default function Users() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        getUsers().then(data => setUsers([...data]))
    }, [])
    return (
        <div>
            <h1>Users page</h1>
            {users.map(value => <User key={value.id} user={value} />)}
        </div>
    )
}