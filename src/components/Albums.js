import { useState, useEffect } from "react";
import { getAlbums } from "../services/fetch.service";

export default function Albums() {
    const [albums, setAlbums] = useState([]);
    useEffect(() => {
        getAlbums().then(data => setAlbums([...data]))
    }, [])
    return (
        <div>
            <h1>Albums page</h1>
            <ul>
                {albums.map(item => <li key={item.id}>{item.id}-{item.title}</li>)}
            </ul>

        </div>
    )
}
