import { useState, useEffect } from "react";
import { Route, Routes } from "react-router";
import { getUsers } from "../services/api.service";
import User from "./User";
import UsersDetails from "./UserDetails";

export default function Users() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        getUsers().then(data => setUsers([...data]))
    }, [])
    
    return (
        <div>
            <h1>Users page</h1>
            {users.map(value => <User key={value.id} user={value} />)}
            <hr />
            <Routes>
                <Route path={":id"} element={<UsersDetails />} />
            </Routes>
        </div>
    )
}