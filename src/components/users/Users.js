import User from '../user/User';
import './Users.css';
import { getUsers, getPostOfUser } from "../../services/fetch.service";
import { useEffect, useState } from 'react';


export default function Users() {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {
        getUsers().then(data => setUsers([...data]))
    }, [])

    const choseUser = (u) => {
        setUser({ ...u });

        getPostOfUser(u.id).then(data => console.log(data))
    }

    return (
        <div className={"wrap"}>
            <div className={"users-box"}>
                {users.map(value => <User key={value.id} user={value} choseUser={choseUser} />)}
            </div>
            {
                user && (<div className={"chosen-one"}>
                    {JSON.stringify(user)}
                </div>)
            }

        </div>
    )
}