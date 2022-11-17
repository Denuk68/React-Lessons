import { useState, useEffect } from "react";
import { Routes, Route } from "react-router";
import { getAlbums } from "../services/api.service";
import Album from "./Album";
import AlbumDetails from "./AlbumDetails";

export default function Albums() {
    const [albums, setAlbums] = useState([]);
    useEffect(() => {
        getAlbums().then(data => setAlbums([...data]))
    }, [])
    return (
        <div>
            <h1>AlbumsPage</h1>
            {albums.map(value => <Album key={value.id} album={value} />)}
            <Routes>
                <Route path={":id"} element={<AlbumDetails />} />
            </Routes>
        </div>
    )
}