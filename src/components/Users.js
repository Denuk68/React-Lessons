import { useEffect, useState } from "react";
import { getUsers } from "../services/fetch.service";

export default function Users() {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers().then(data => setUsers([...data]))
    }, [])

    return (
        <div>
            {users.map(item => <div key={item.id}>{item.name}</div>)}
        </div>
    )
}