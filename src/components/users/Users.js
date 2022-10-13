import { useEffect, useState } from "react";
import { getUsers } from "../services/user.axios";
// import { getUsers } from "../services/user.service";
import User from "../user/User";


export default function Users() {

    // hook
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // getUsers().then(value => setUsers([...value]))  
        getUsers().then(({data}) => setUsers([...data]))

    }, []);

    return (
        <div>
            {users.map(value => <User item={value} key={value.id} />)}
        </div>
    );
}