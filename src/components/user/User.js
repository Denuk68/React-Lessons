export default function User({ user, choseUser }) {
    const onClickUserChoice = () => {
        choseUser(user)
    }

    return (
        <div>
            {user.id}-{user.name}
            <button onClick={onClickUserChoice}>details</button>
        </div>
    )
}