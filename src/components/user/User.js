export default function User({ user: { id, name, email } }) {


    return (
        <div className="user">
            {id}---{name}---{email}  
        </div>  
    )
}