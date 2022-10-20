import { useState, useEffect } from "react";
import { getUsers } from "../services/service";
import User from "../user/User";

export default function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(({ data }) => setUsers([...data]))
    }, [])

    return (
        <div className="users">
            {users.map(user => <User user={user} key={user.id} />)}
        </div>
    )
}