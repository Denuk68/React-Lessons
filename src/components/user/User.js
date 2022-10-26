export default function User({ item, choseUser }) {
    let onClickUserChoice = () => {
        choseUser(item);
    }
    return (
        <div>
            {item.id} - {item.name}
            <button onClick={onClickUserChoice}>Click me</button>
        </div>
    )
}