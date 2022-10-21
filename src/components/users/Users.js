import { useState, useEffect } from "react";
import { getUsers, getUser } from '../services/service.axios'
import User from '../user/User';


export default function Users() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers().then(({ data }) => setUsers([...data]))
    }, [])

    return (
        <div className="users">
            <h3>All users:</h3>
            {users.map(user => <User user={user} key={user.id} />)}         
        </div>
    )
}