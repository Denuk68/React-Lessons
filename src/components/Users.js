import { useState, useEffect } from "react";
import { getUsers, } from "../services/fetch.service";


export default function Users() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers().then(data => setUsers([...data]))
    }, [])


    return (
        <div>
            <h1>Users page</h1>
            {users.map(item => <div key={item.id}>{item.id}-{item.name}-{item.email}</div>)}
        </div>
    )
}