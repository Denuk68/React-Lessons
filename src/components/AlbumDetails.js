import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { getAlbum } from "../services/api.service";

export default function AlbumDetails() {
    const params = useParams();
    let { id } = params;

    const [album, setAlbum] = useState({});
    useEffect(() => {
        getAlbum(id).then(data => setAlbum({ ...data }))
    }, [id])

    return (
        <div>
            <h1>AlbumDetails</h1>
            {JSON.stringify(album)}
        </div>
    )
}