import { useEffect, useState } from "react";
import { getComments } from "../services/axios.service";

export default function Comments() {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        getComments().then(({ data }) => setComments([...data]))
    }, [])
    return (
        <div>
            {comments.map(comment => <div key={comment.id}>{comment.id}-{comment.name}</div>)}
        </div>

    );
}