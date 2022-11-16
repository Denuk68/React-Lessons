import { Link } from "react-router-dom"
export default function User({ user }) {
    return (
        <div>
            {user.name}-<Link to={{ pathname: "/:id", state: user }}>user details</Link>
        </div >

    )
}