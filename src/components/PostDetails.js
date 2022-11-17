import { useParams } from "react-router";
import { getPost } from "../services/api.service";
import { useState, useEffect } from "react";


export default function PostDetails() {
    const params = useParams();
    let { id } = params;

    const [post, setPost] = useState({});
    useEffect(() => {
        getPost(id).then(data => setPost({ ...data }))
    }, [id])


    return (
        <div>
            <h1>PostDetails</h1>
            {JSON.stringify(post)}
        </div>
    )
}