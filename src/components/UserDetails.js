import { useLocation } from "react-router"

export default function UsersDetails() {
    let location = useLocation();
    // let user = location.state.user  Не деструкторизований варіант 
    let { state: { user } } = location;

    return (
        <div>
            <h2>UsersDetails</h2>
            {JSON.stringify(user)}
        </div>
    )
}