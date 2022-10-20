import { useState, useEffect } from "react";
import { getComments } from "../services/service";
import Comments from "../comments/Comments";


export default function Post({ post: { title, id } }) {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        getComments(id).then(({ data }) => setComments([...data]))
    }, [id])
    return (
        <div className="post">
            <b>Post title: </b>{title}
            <h5>Comments:</h5>
            <Comments comments={comments} />
            <hr/>
            <br/>
        </div>
    )
}