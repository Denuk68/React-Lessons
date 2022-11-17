import { useNavigate } from "react-router";

export default function Album({ album }) {
    let navigateHook = useNavigate(); // Використовувати цей хук коли кнопки чи форма замість Link

    const navigate = () => {
        navigateHook("/albums/" + album.id)
    }
    return (
        <div>
            {album.title}-<button onClick={navigate}>album deatils</button>
        </div>
    )
}